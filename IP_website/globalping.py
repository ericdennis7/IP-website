# Name: Eric Dennis
# Started: 3/4/2024
# Last Updated: 3/4/2024
# Update Notes: 

### IMPORTS ###

import json
import requests
import reflex as rx
import myipaddress as myip

### MAIN PAGE FUNCTION ###

def globalping_page():

    #myip_info = myip.info()

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
        ),
        rx.container(
            rx.hstack(
              rx.select(["North America", "South America", "Africa"])
            ),
        ),
    ),
)