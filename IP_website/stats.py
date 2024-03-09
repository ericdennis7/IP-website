# Name: Eric Dennis
# Started: 3/4/2024
# Last Updated: 3/4/2024
# Update Notes: 

### IMPORTS ###

import time
import json
import folium
import asyncio
import requests
import pycountry
import pandas as pd
import reflex as rx
import myipaddress as myip
import plotly.express as px


def globalping():
        
    url = "https://api.globalping.io/v1/measurements"
    
    data = {
        "type": "ping",
        "target": f"{myip.public_ip()}",
        "locations": [
            {
            "magic": "world",
            "limit": 100
            }
        ]
    }
    
    headers = {"Content-Type": "application/json"}

    response = requests.post(url, json=data, headers=headers)
    measurement_id = response.json().get('id')
    response.raise_for_status()
    time.sleep(10)
    result_response = requests.get(f"https://api.globalping.io/v1/measurements/{measurement_id}")
    result_data = json.loads(result_response.text)

    # Extracting required data into lists.
    continents = []
    regions = []
    countries = []
    countries_full = []
    cities = []
    min_values = []
    max_values = []
    avg_values = []
    total = []
    loss = []
    rcv = []
    drop = []

    # Inserting results into their appropriate lists.
    for result in result_data['results']:
        continents.append(result['probe']['continent'])
        regions.append(result['probe']['region'])
        countries.append(result['probe']['country'])
        cities.append(result['probe']['city'])
        min_values.append(result['result']['stats']['min'])
        max_values.append(result['result']['stats']['max'])
        avg_values.append(result['result']['stats']['avg'])
        total.append(result['result']['stats']['total'])
        rcv.append(result['result']['stats']['rcv'])
        loss.append(result['result']['stats']['loss'])
        drop.append(result['result']['stats']['drop'])
        
    for code in countries:
        try:
            country = pycountry.countries.get(alpha_2=code.upper())
            countries_full.append(country.name)
        except AttributeError:
            # If country is not found, append the original code
            countries_full.append(code)

    # Creating a pandas dataframe.
    df = pd.DataFrame({
        'City': cities,
        'Country': countries_full,
        'Region': regions,
        'Continent': continents,
        'Avg': avg_values,
        'Min': min_values,
        'Max': max_values,
        'Tot': total,
        'Rcv': rcv,
        'Los': loss,
        'Dpd': drop
    })

    return df
        
### CLASSES ###
        
class FormInput(rx.State):
    form_data: dict = {}
    results: str = ""
    cities: list = []
    numbers: list = ["1", "2", "3"]

    def handle_submit(self, form_data: dict):
        self.form_data = form_data
        
        url = "https://api.globalping.io/v1/measurements"

        data = {
            "type": "ping",
            "target": f"{self.form_data.get('ip_domain')}",
            "locations": [
                {
                "magic": f"{self.form_data.get('location')}",
                "limit": f"{self.form_data.get('test_count')}"
                }
            ]
        }

        headers = {"Content-Type": "application/json"}

        try:
            response = requests.post(url, json=data, headers=headers)
            response.raise_for_status()
            measurement_id = response.json().get('id')
            time.sleep(5)
            result_response = requests.get(f"https://api.globalping.io/v1/measurements/{measurement_id}")
            result_data = json.loads(result_response.text)
            self.results = result_response.text

        except requests.exceptions.RequestException as e:
            print("Error:", e)
            return None
        
    
### MAIN PAGE FUNCTION ###

def stats_page():
    
    myip_info = myip.info()

    ### CREATING PAGE ###
    
    return rx.fragment(
        # MAIN CONTAINER
        #rx.desktop_only(
        rx.container(
            rx.heading("Get your ping from anywhere! 🌎", size="9", margin_top="10vh", align="left"),
            background_color="#f4f5f8",
            padding="50px 1em 100px 1em"
        ),
        # MINI NAVBAR
        rx.container(
            rx.hstack(
                rx.link("My IP Address", 
                        href="/",
                        color="rgba(34,46,58,.5)",
                        background_color="hsla(0,0%,100%,.5)",
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("My Global Ping", 
                        href="/globalping",
                        color="rgba(34,46,58,.5)",
                        background_color="hsla(0,0%,100%,.5)", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("Track My Packet", 
                        href="/tracepacket",
                        color="black",
                        background_color="white", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                background_color="#f4f5f8",
            ),
            background_color="#f4f5f8",
            padding_left="1em",
            padding_right="1em"
        ),
        rx.center(
            rx.code_block(FormInput.results, language="json", wrap_long_lines=True),
    ),
)