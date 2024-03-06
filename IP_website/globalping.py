# Name: Eric Dennis
# Started: 3/4/2024
# Last Updated: 3/4/2024
# Update Notes: 

### IMPORTS ###

import time
import json
import requests
import reflex as rx
import myipaddress as myip

regions_list = []
    
### CLASSES ###   

class FormInputState(rx.State):
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
            
            cities = [location["probe"]["city"] for location in result_data.get("results", [])]

            self.results = result_response.text
            self.cities = cities
            
        except requests.exceptions.RequestException as e:
            print("Error:", e)
            return None
        
class TextfieldControlled(rx.State):
    address: str = f"{myip.public_ip()}"
    location: str = "world"
    testcount: str = "5"
    packetcount: str = "4"
    
    
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
            print(f"Error: {response.status_code}")
            
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
                rx.form.root(
                    rx.flex(
                        rx.box(
                            rx.text("Target Address", weight="medium", required=True),
                            rx.container(height="5px"),
                            rx.input(value=TextfieldControlled.address, on_change=TextfieldControlled.set_address, name="ip_domain"),
                            width="30%",
                        ),
                        rx.box(
                            rx.text("Location(s)", weight="medium", required=True),
                            rx.container(height="5px"),
                            rx.input(value=TextfieldControlled.location, on_change=TextfieldControlled.set_location, name="location"),
                            width="25%",
                        ),
                        rx.box(
                            rx.text("Test", weight="medium", required=True),
                            rx.container(height="5px"),
                            rx.input(value=TextfieldControlled.testcount, on_change=TextfieldControlled.set_testcount, name="test_count", max_length="1"),
                            width="15%",
                        ),
                        rx.box(
                            rx.text("Packets", weight="medium", required=True),
                            rx.container(height="5px"),
                            rx.input(value=TextfieldControlled.packetcount, on_change=TextfieldControlled.set_packetcount, name="packet_count"),
                            width="15%",
                        ),
                        rx.box(
                            rx.text("⠀"),
                            rx.container(height="5px"),
                            rx.button("Run Test", color_scheme="grass", type="submit"),
                            width="10%",
                        ),
                        spacing="2",
                        width="100%"
                    ),
                    on_submit=FormInputState.handle_submit,
                ),
                rx.code_block(FormInputState.results, language="json", wrap_long_lines=True),
                
                rx.container(
                    rx.foreach(
                        FormInputState.cities,
                        lambda item: rx.box(
                        item,
                        color="red"  
                        ),
                    ),
                    background_color="#f4f5f8"
                ),
                
                margin_top="3em",
                width="100%"
            ),
            align="center",
            margin="1em",
        ),
    ),
)