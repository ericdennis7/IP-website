# Name: Eric Dennis
# Started: 3/8/2024
# Last Updated: 3/8/2024
# Update Notes: 

### IMPORTS ###

import folium
import pandas as pd
import reflex as rx
import myipaddress as myip
import plotly.express as px


### TRACEROUTE PAGE

def traceroute_page():
    return rx.fragment(
    # MAIN CONTAINER
        rx.container(
            rx.heading("Track your packet! 🌎", size="9", margin_top="10vh", align="left"),
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
    ),