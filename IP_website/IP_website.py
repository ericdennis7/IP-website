# Eric Dennis
# Started: Feb 29th, 2024

### IMPORTS ###

import json
import requests
import reflex as rx
import myipaddress as myip

from .navbar import navbar

### GATHERING USER INFORMATION ###

def ip(arg1):
    response = requests.get(f"http://ip-api.com/json/{arg1}?fields=66846719")
    js = response.json()

    status = js["status"]
    if status == "fail":
        message = js["message"]
        print(message)
        return {}

    return {
        "continent": js.get("continent", "None"),
        "country": js.get("country", "None"),
        "region": js.get("regionName", "None"),
        "city": js.get("city", "None"),
        "rue": js.get("district", "None"),
        "zipcode": js.get("zip", "None"),
        "lat": js.get("lat", "None"),
        "lon": js.get("lon", "None"),
        "timezone": js.get("timezone", "None"),
        "offset": js.get("offset", "None"),
        "iso": js.get("isp", "None"),
        "org": js.get("org", "None"),
        "reverse": js.get("reverse", "None"),
        "mobile": js.get("mobile", "None"),
        "proxy": js.get("proxy", "None"),
        "hosting": js.get("hosting", "None")
    }

myip_info = myip.info()
ip_api = ip(myip_info.get('ip'))

# Setting conditions on whether the user is protected or not.
vpn_status_color = "#000"
protection_status_text = "N/A"
protection_status_img = "N/A"
button_text = "N/A"
identity_text = "N/A"

if ip_api.get('proxy'):
    vpn_status_color = "#218c74"
    protection_status_text = "You are protected!"
    protection_status_img = "./protection.jpg"
    button_text = "Perform a Global Ping Test"
    identity_text = "Identity is Hidden"
else:
    vpn_status_color = "#e54666"
    protection_status_text = "You are unprotected!"
    protection_status_img = "./hacker.jpg"
    button_text = "Hide Your Identity"
    identity_text = "Identity is Visible"


### CLASSES / MANAGING APP EXTRAS) ###

class State(rx.State):
    """The app state."""

### MAIN APP / HOMEPAGE ###

def index() -> rx.Component:
    return rx.fragment(
        navbar(),
        rx.container(
            rx.heading("What's my IP address?", size="9", margin_top="10vh", align="left"),
            background_color="#f4f5f8",
            padding="50px 1em 100px 1em"
        ),
        rx.center(
            rx.container(
                rx.container(
                    rx.text.strong(f"{protection_status_text}"),
                    color="white",
                    text_align="center",
                    text_wrap="wrap",
                    border_radius="7px 7px 0px 0px",
                    border="none",
                    background_color=f"{vpn_status_color}",
                    inset="0",
                    padding=".7em",
                    ),
            
            # DESKTOP VERSION ONLY
            rx.hstack(
                rx.desktop_only(
                    rx.flex(
                        rx.card(
                            rx.vstack(
                                rx.card(
                                    rx.tooltip(rx.image(src=f"{protection_status_img}", width="200px", align="center"), content='Image by storyset on Freepik'),
                                    align="center",
                                    margin="auto",
                                    padding="0px"
                                ),
                                rx.container(height="5px"),
                                rx.text(f"{identity_text}", text_align="center", color=f"{vpn_status_color}", weight="bold", size="6"),
                                rx.container(height="5px"),
                                rx.button(f"{button_text}", background_color=f"{vpn_status_color}"),
                                align="center"
                            ),
                            border_radius="0px 0px 0px 7px",
                            border=f"2px solid {vpn_status_color}",
                            width="40%",
                            padding="1.5em",
                            spacing="4"
                        ),
                        rx.card(
                            rx.vstack(
                                rx.text("IP Address:", size="3", weight="light"), 
                                rx.text(f"{myip_info.get('ip')}", size="5", weight="bold"),
                                rx.container(height="5px"),  
                                rx.text("City, Region:", size="3", weight="light"),
                                rx.text(f"{ip_api.get('city')}, {ip_api.get('region')}", size="5", weight="bold"),
                                rx.container(height="5px"),  
                                rx.text("Country, Continent:", size="3", weight="light"),
                                rx.text(f"{ip_api.get('country')}, {ip_api.get('continent')}", size="5", weight="bold"),
                                rx.container(height="5px"),  
                                rx.text("Internet Service Provider (org):", size="3", weight="light"), 
                                rx.text(f"{ip_api.get('iso')} ({ip_api.get('org')})", size="5", weight="bold"),
                                rx.container(height="5px"),                         
                            ),
                            border_radius="0px 0px 7px 0px",
                            border=f"2px solid {vpn_status_color}",
                            border_left="none",
                            width="60%",
                            padding="1.5em",
                            spacing="2"
                        ),
                        justify="between",
                        wrap="wrap",
                        width="100%"
                    ),
                    width="100%",
                ),
                border_radius="7px",
                box_shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px",
            ),
            
        # PHONE AND TABLET VIEW ONLY
        rx.mobile_and_tablet(
            rx.hstack(
                rx.flex(
                    rx.card(
                        "Your IP Address: mobile",
                        border_radius="0px",
                        border=f"2px solid {vpn_status_color}",
                        border_bottom="none",
                        width="100%"
                    ),
                    rx.card(
                        rx.vstack(
                            rx.text("IP Address:", size="3", weight="light"), 
                            rx.text(f"{myip_info.get('ip')}", size="5", weight="bold"),
                            rx.text("Physical Address", size="3", weight="light"),
                            #rx.text(f"{myip_info.public_fulladdress()}", size="5", weight="bold"),
                            rx.text("Timezone", size="3", weight="light"),
                            rx.text(f"{myip_info.get('timezone').replace('_', ' ')}", size="5", weight="bold"),
                            rx.divider()
                        ),
                        border_radius="0px 0px 7px 7px",
                        border=f"2px solid {vpn_status_color}",
                        border_top="none",
                        width="100%",
                        padding="1.5em",
                        height="auto",
                    ),
                    justify="between",
                    wrap="wrap",
                    width="100%"
                    ),
                width="100%",
                ),
            ),
            border="none",
            inset="0",
        ),
        height="50vh",
        margin="1em",
        border="none",
        inset="0",
        align="center",
    ),
        
    # LEARNING ABOUT IP ADDRESSES
    rx.center(
        rx.container(
            rx.heading("What's an IP address?", size="7"),
            rx.container(height="5px"),
            rx.text("""
                An IP (Internet Protocol) address serves as a numerical label assigned to each device connected to a computer network
                that uses the Internet Protocol for communication. It functions much like a home address in the digital realm. 
                When data is sent over the internet, it gets divided into packets, and each packet contains both the sender's and receiver's 
                IP addresses. These addresses ensure that the data reaches the correct destination, allowing devices to communicate and share 
                information across the vast network of interconnected computers that make up the internet. In essence, IP addresses play a 
                fundamental role in facilitating the routing and delivery of data between different devices on the internet.
                """
                ),
            ),
        ),
    )

### EXTRA STYLES ###

style={
    ".rt-Card:where(.rt-variant-surface)::after": {
        "inset": "unset"
    },
    
    ".rt-Card::after": {
        "display": "none"
    },
    
    ".rt-CardInner": {
        "padding": "0px"
    },
    
    "@media only screen and (max-width: 768px)": {
        ".rt-Card": {
            "width": "100%"
    }
}
}

### CREATING THE APP ###

app = rx.App(theme=rx.theme(accent_color="blue"), style=style)
app.add_page(index)