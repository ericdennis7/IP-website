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
        cities = []
        min_values = []
        max_values = []
        avg_values = []

        # Inserting results into their appropriate lists.
        for result in result_data['results']:
            continents.append(result['probe']['continent'])
            regions.append(result['probe']['region'])
            countries.append(result['probe']['country'])
            cities.append(result['probe']['city'])
            min_values.append(result['result']['stats']['min'])
            max_values.append(result['result']['stats']['max'])
            avg_values.append(result['result']['stats']['avg'])

        # Creating a pandas dataframe.
        df = pd.DataFrame({
            'City': cities,
            'Country': countries,
            'Region': regions,
            'Continent': continents,
            'Avg': avg_values,
            'Min': min_values,
            'Max': max_values,
        })

        return df
        
### CLASSES ###
        
class FormInputState(rx.State):
    ping_results: pd.DataFrame = pd.DataFrame()
    loading: bool = False

    @rx.background
    async def handle_submit(self):
        async with self:
            self.loading = True

        # Fetch ping results in a non-blocking way
        results = await asyncio.to_thread(globalping)

        async with self:
            self.ping_results = results
            self.loading = False
        
    
### MAIN PAGE FUNCTION ###

def globalping_page():
    
    def probes():
        url = "https://api.globalping.io/v1/probes"
        headers = {"accept": "application/json"}

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            data = response.json()
            
        continents = []
        regions = []
        countries = []
        cities = []
            
        for entry in data:
            location = entry.get('location', {})
            continents.append(location.get('continent'))
            regions.append(location.get('region'))
            countries.append(location.get('country'))
            cities.append(location.get('city'))
        else:
            pass
            
        # Remove duplicates using set
        continents = list(set(continents))
        regions = list(set(regions))
        countries = list(set(countries))
        cities = list(set(cities))
        
        return continents, regions, countries, cities
    
    myip_info = myip.info()
    continents, regions, countries, cities = probes()

    ### CREATING PAGE ###
    
    return rx.fragment(
        # MAIN CONTAINER
        rx.desktop_only(
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
                        color="black",
                        background_color="white", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("Track My Packet", 
                        href="https://reflex.dev",
                        color="rgba(34,46,58,.5)",
                        background_color="hsla(0,0%,100%,.5)", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                background_color="#f4f5f8",
            ),
            background_color="#f4f5f8",
            padding_left="1em",
            padding_right="1em"
        ),
        rx.center(
            rx.container(
                rx.button("Get my globalping!", on_click=FormInputState.handle_submit),
                rx.cond(
                    FormInputState.loading,
                    rx.chakra.circular_progress(is_indeterminate=True),
                    rx.container(height="0px"),
                ),
                rx.data_table(
                    data=FormInputState.ping_results,
                    search=True,
                    sort=True,
                    pagination=True
                ),
                margin_top="3em",
                width="100%"
            ),
            align="center",
            margin="1em",
        ),
    ),
)