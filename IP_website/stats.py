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
    {"value": 68.8, "name": "Chrome", "fill": "green"},
    {"value": 14.9, "name": "Safari", "fill": "red"},
    {"value": 4.2, "name": "Internet Explorer/Edge", "fill": "blue"},
    {"value": 3.3, "name": "Firefox", "fill": "orange"},
    {"value": 1.3, "name": "Other", "fill": "purple"},
]

screen_data = [
    {"value": 47.2, "name": "Other High", "fill": "#40739e"},
    {"value": 18.4, "name": "1920x1080", "fill": "#44bd32"},
    {"value": 18.2, "name": "1366x768", "fill": "#e1b12c"},
    {"value": 1.1, "name": "1280x1024", "fill": "#8c7ae6"},
    {"value": 1.0, "name": "1280x800", "fill": "#c23616"},
    {"value": 0.7, "name": "1024x768", "fill": "#718093"},
    {"value": 0.7, "name": "Other Lower", "fill": "##2f3640"},
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
        rx.text("All information below is in percent (%) and from https://www.w3schools.com/browsers/"),
        rx.container(
            rx.flex(
                rx.vstack(
                    rx.heading("What's an OS and what are the top OS's?", size="7"),
                    rx.container(height="20px"),
                    rx.text("""
                        An operating system (OS) is a software that manages computer hardware and provides common services for computer programs. 
                        It acts as an intermediary between computer hardware and the applications that run on it. The OS handles tasks 
                        such as managing memory, controlling peripheral devices, facilitating communication between software applications, 
                        and providing a user interface. Popular examples of operating systems include Microsoft Windows, macOS, Linux, and Android.
                        As of 2024, the top operating systems are:
                        """,
                        wrap="wrap", width="100%"),
                    ),
                rx.container(height="20px"),
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
                        margin_top="50px"
                    ),
                    align="center",
                    margin="auto"
                ),
                wrap="wrap",
                align="center"
            ),
            padding="1em"
        ),
        rx.container(height="50px"),
        rx.container(
            rx.flex(
                rx.vstack(
                    rx.heading("What's a web browser and what's the top browsers?", size="7"),
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
                        on the Internet. As of 2024, the top browsers are:
                        """,
                        wrap="wrap", width="100%"),
                    ),
                rx.recharts.pie_chart(
                    rx.recharts.pie(
                        data=browser_data,
                        data_key="value",
                        name_key="name",
                        cx="50%",
                        cy="50%",
                        fill="#8884d8",
                        label=True,
                    ),
                    rx.recharts.graphing_tooltip(),
                    rx.recharts.legend(),
                    width="100%",
                    height=275
                ),
                rx.container(height="7px"),
                wrap="wrap",
                align="center"
            ),
            padding="1em"
        ),
        rx.container(height="50px"),
        rx.container(
            rx.flex(
                rx.vstack(
                    rx.heading("What are the top screen sizes?", size="7"),
                    rx.container(height="20px"),
                    rx.text("""                        
                        Screen resolution refers to the number of pixels that a display can show horizontally and vertically. It is typically 
                        represented as the width x height in pixels. For example, a screen resolution of 1920 x 1080 means the display has 1920 
                        pixels in width and 1080 pixels in height. Screen resolution is an important factor in determining the clarity and 
                        detail of images and text on a display. Higher resolutions generally result in sharper and more detailed visuals.
                        """,
                        wrap="wrap", width="100%"),
                    ),
                rx.container(height="20px"),
                    rx.recharts.bar_chart(
                        rx.recharts.bar(
                            data_key="value", stroke="#8884d8", fill="#8884d8"
                        ),
                        rx.recharts.x_axis(data_key="name"),
                        rx.recharts.y_axis(),
                        data=screen_data,
                        width="100%",
                        height=275,
                        margin_top="20px"
                    ),
                wrap="wrap",
                align="center"
            ),
            padding="1em"
        ),
        margin_bottom="100px"
    )