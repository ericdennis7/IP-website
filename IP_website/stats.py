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
    
### MAIN PAGE FUNCTION ###

os_data = [
    {"value": 38.2, "name": "Win10", "fill": "#004fe1"},
    {"value": 30.6, "name": "Win11", "fill": "#004fe1"},
    {"value": 18.0, "name": "Mobile", "fill": "#81b662"},
    {"value": 8.4, "name": "Mac", "fill": "#7e499d"},
    {"value": 4.1, "name": "Linux", "fill": "#ffcc33"},
    {"value": 1.3, "name": "Win7", "fill": "#004fe1"},
    {"value": 0.5, "name": "Win8", "fill": "#004fe1"},
]

browser_data = [
    {"value": 68.8, "name": "Chrome", "fill": "#004fe1"},
    {"value": 14.9, "name": "Safari", "fill": "#004fe1"},
    {"value": 4.2, "name": "Internet Explorer/Edge", "fill": "#81b662"},
    {"value": 3.3, "name": "Firefox", "fill": "#7e499d"},
    {"value": 1.3, "name": "Other", "fill": "#ffcc33"},
]

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
                        href="/internetstats",
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
        rx.container(height="50px"),
        rx.container(
            rx.hstack(
                rx.vstack(
                    rx.heading("What's an OS?", size="7"),
                    rx.container(height="20px"),
                    rx.text("""
                        An operating system (OS) is a software that manages computer hardware and provides common services for computer programs. 
                        It acts as an intermediary between computer hardware and the applications that run on it. The OS handles tasks 
                        such as managing memory, controlling peripheral devices, facilitating communication between software applications, 
                        and providing a user interface. Popular examples of operating systems include Microsoft Windows, macOS, Linux, and Android.
                        """,
                        wrap="wrap", width="100%"),
                    ),
                rx.container(height="7px"),
                rx.container(
                    rx.recharts.funnel_chart(
                        rx.recharts.funnel(
                            rx.recharts.label_list(
                                position="right",
                                data_key="name",
                                fill="#000",
                                stroke="none",
                            ),
                            rx.recharts.label_list(
                                position="right",
                                data_key="name",
                                fill="#000",
                                stroke="none",
                            ),
                            data_key="value",
                            data=os_data,
                        ),
                        rx.recharts.graphing_tooltip(),
                        width=350,
                        height=250,
                    ),
                    align="center",
                    margin="auto"
                ),
            ),
            padding="1em"
        ),
        rx.container(height="50px"),
        rx.container(
            rx.hstack(
                rx.recharts.pie_chart(
                    rx.recharts.pie(
                        data=browser_data,
                        data_key="value",
                        name_key="name",
                        cx="50%",
                        cy="50%",
                        fill="#8884d8",
                        label=True,
                    )
                ),
                rx.vstack(
                    rx.heading("What's a web browser?", size="7"),
                    rx.container(height="20px"),
                    rx.text("""                        
                        A web browser is a software application that allows users to access and navigate the World Wide Web (WWW) to view web pages, 
                        download files, and interact with web-based applications. Web browsers interpret and display content written in languages 
                        such as HTML, CSS, and JavaScript, which are used to create websites. 
                        """,
                        wrap="wrap", width="100%"),
                    rx.text(""" 
                        Examples of popular web browsers include Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera. Each browser 
                        may have its unique features, but they all serve the primary purpose of allowing users to interact with and explore content 
                        on the Internet.
                        """,
                        wrap="wrap", width="100%"),
                    padding_left="20px"
                    ),
                rx.container(height="7px"),
            ),
            padding="1em"
        ),
    )