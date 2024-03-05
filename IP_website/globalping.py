# Name: Eric Dennis
# Started: 3/4/2024
# Last Updated: 3/4/2024
# Update Notes: 

### IMPORTS ###

import json
import requests
import reflex as rx
import myipaddress as myip
    
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
            print(f"Error: {response.status_code}")
            
        # Remove duplicates using set
        continents = list(set(continents))
        regions = list(set(regions))
        countries = list(set(countries))
        cities = list(set(cities))
        
        return continents, regions, countries, cities
    
class SetterState(rx.State):
    selected: str = "World"
    
    def return_location(self):
        myip_info = myip.info()
        continents, regions, countries, cities = probes()

    
### MAIN PAGE FUNCTION ###

def globalping_page():
    
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
                rx.flex(
                    rx.box(
                        rx.text("Target Address", weight="medium"),
                        rx.container(height="5px"),
                        rx.input(value=f"{myip_info.get('ip')}"),
                        width="30%",
                    ),
                    rx.box(
                        rx.text("Location(s)", weight="medium"),
                        rx.container(height="5px"),
                        rx.input(value="World"),
                        width="25%",
                    ),
                    rx.box(
                        rx.text("Test", weight="medium"),
                        rx.container(height="5px"),
                        rx.input(value="5"),
                        width="15%",
                    ),
                    rx.box(
                        rx.text("Packets", weight="medium"),
                        rx.container(height="5px"),
                        rx.input(value="3"),
                        width="15%",
                    ),
                    rx.box(
                        rx.text("⠀"),
                        rx.container(height="5px"),
                        rx.button("Run Test", color_scheme="grass"),
                        width="10%",
                    ),
                    spacing="2",
                    width="100%"
                ),
                margin_top="3em",
                width="100%"
            ),
            align="center",
            margin="1em",
        ),
    ),
)