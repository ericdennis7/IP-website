# Name: Eric Dennis
# Started: 3/4/2024
# Last Updated: 3/4/2024
# Update Notes: 

### IMPORTS ###

import time
import json
import asyncio
import requests
import pycountry
import pandas as pd
import reflex as rx
import myipaddress as myip


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
        
class FormInputState(rx.State):
    ping_results: pd.DataFrame = pd.DataFrame()
    loading: bool = False
    show_data: bool = False
    show_initial: bool = True

    @rx.background
    async def handle_submit(self):
        async with self:
            self.loading = True
            self.show_initial = False

        # Fetch ping results in a non-blocking way
        results = await asyncio.to_thread(globalping)

        async with self:
            self.ping_results = results
            self.show_data = True
            self.loading = False
        
    
### MAIN PAGE FUNCTION ###

def globalping_page():
    
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
                rx.link("IP Address", 
                        href="/",
                        color="rgba(34,46,58,.5)",
                        background_color="hsla(0,0%,100%,.5)",
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("Global Ping", 
                        href="/globalping",
                        color="black",
                        background_color="white", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("Internet Stats", 
                        href="/internetstats",
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
                rx.container(height="20px"),
                rx.heading("How does this work?"),
                rx.container(height="20px"),
                rx.text("""
                    Using the awesome features of jsDelivr Globalping, this cool web tool will randomly pick 100 spots across 
                    the globe and gather the ping times (in milliseconds) from your current IP address. To get started, just click "Run Globalping Test." 
                    It only takes around 10 seconds to gather and show your results. Feel free to run it again whenever you want!
                    """,
                    wrap="wrap", width="100%"),
                rx.container(height="10px"),
                rx.text("Every test contains 3 packets and the results are displayed in milliseconds (ms).", wrap="wrap", width="100%"),
                rx.container(height="20px"),
                rx.button(rx.icon(tag="play"), "Run Globalping Test!", on_click=FormInputState.handle_submit, size="3"),
                rx.container(height="20px"),
                rx.cond(
                    FormInputState.loading,
                    rx.chakra.stack(
                    rx.chakra.skeleton_text(
                        no_of_lines=25,
                    ),
                    width="100%",
                ),
                rx.container(height="0px"),
                ),
                rx.cond(
                    FormInputState.show_data,
                    rx.data_table(
                        data=FormInputState.ping_results,
                        search=True,
                        sort=True,
                        resizable=True,
                        pagination=True
                    ),
                rx.cond(
                    FormInputState.show_initial,
                    rx.container(
                        rx.text("Your ping results will be displayed here!", padding="1em", text_align="center"),
                        background_color="#f4f5f8",
                        border_radius="7px",
                        margin_top="20px",
                        width="100%"
                    ),
                    rx.container()
                ),
            ),
            rx.container(height="40px"),
                rx.container(
                    rx.heading("What is ping?"),
                    rx.container(height="20px"),
                    rx.text("""Ping is a measure of the round-trip time it takes for a data packet to travel from the source to the destination and back again. The "good" or acceptable ping range can vary depending on the specific use case and requirements. Here are general categories for ping ranges:""", wrap="wrap", width="100%"),
                    rx.container(height="10px"),
                    rx.unordered_list(
                        rx.container(height="7px"),
                        rx.list_item(
                            rx.icon(
                                "laugh",
                                color="purple",
                                style={"display": "inline"},
                            ),
                            " Low Ping (0-30 ms)",
                        ),
                        rx.container(height="7px"),
                        rx.list_item(
                            rx.icon(
                                "smile",
                                color="green",
                                style={"display": "inline"},
                            ),
                            " Medium Ping (30-100 ms)",
                        ),
                        rx.container(height="7px"),
                        rx.list_item(
                            rx.icon(
                                "meh",
                                color="orange",
                                style={"display": "inline"},
                            ),
                            " High Ping (100-200 ms)",
                        ),
                        rx.container(height="7px"),
                        rx.list_item(
                            rx.icon(
                                "frown",
                                color="red",
                                style={"display": "inline"},
                            ),
                            " Very High Ping (200+ ms)",
                        ),
                        list_style_type="none",
                    ),
                    bg="#f4f5f8",
                    border_radius="7px",
                    padding="1em",
                    wrap="wrap"
                ),
            margin_top="3em",
            margin_bottom="3em",
            width="100%"
            ),
            align="center",
            margin="1em",
        #),
    ),
)