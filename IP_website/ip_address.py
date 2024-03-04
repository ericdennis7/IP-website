# Name: Eric Dennis
# Started: 2/29/2024
# Last Updated: 3/4/2024
# Update Notes: 

### IMPORTS ###

import json
import requests
import reflex as rx
import myipaddress as myip

from .navbar import navbar

### IP ADDRESS PAGE ###

# FETCHING IP INFORMATION FROM IP-API
def ip_address_page():
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

    # SETTING CONDITIONS ON WHETHER OR NOT THE USER IS USING A VPN
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


    ### MAIN APP / HOMEPAGE FOR DESKTOP APPS ###

    return rx.fragment(
        # MAIN CONTAINER
        rx.desktop_only(
        rx.container(
            rx.heading("What's my IP address?", size="9", margin_top="10vh", align="left"),
            background_color="#f4f5f8",
            padding="50px 1em 100px 1em"
        ),
        # MINI NAVBAR
        rx.container(
            rx.hstack(
                rx.link("My IP Address", 
                        href="https://reflex.dev",
                        color="black",
                        background_color="white", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("My Global Ping", 
                        href="https://reflex.dev",
                        color="black",
                        background_color="hsla(0,0%,100%,.5)", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("Track My Packet", 
                        href="https://reflex.dev",
                        color="black",
                        background_color="hsla(0,0%,100%,.5)", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                background_color="#f4f5f8",
            ),
            background_color="#f4f5f8",
        ),
        # MAIN IP INFORMATION BOX & LOGIC
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
            rx.hstack(
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
                #),
                border_radius="7px",
                box_shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px",
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
    # INFORMATION SECTION TO TEACH OTHERS
    rx.container(height="30px"),
    rx.container(
        rx.hstack(
            rx.vstack(
            rx.heading("What's an IP address?", size="7"),
            rx.container(height="20px"),
                rx.text("""
                    An IP (Internet Protocol) address serves as a numerical label assigned to each device connected to a computer network
                    that uses the Internet Protocol for communication. It functions much like a home address in the digital realm.
                    """,
                    wrap="wrap", width="88%"),
                rx.container(height="7px"),
                rx.text("""
                    When data is sent over the internet, it gets divided into packets, and each packet contains both the sender's and receiver's 
                    IP addresses. These addresses ensure that the data reaches the correct destination, allowing devices to communicate and share 
                    information across the vast network of interconnected computers that make up the internet. In essence, IP addresses play a 
                    fundamental role in facilitating the routing and delivery of data between different devices on the internet.
                    """, 
                    wrap="wrap", width="88%")
                
            ),
            rx.image(src="./what_is_an_ip_address.jpg", width="300px", margin="auto", margin_top="0px", padding="10px")
        ),
        margin="1em"
    ),
    rx.container(height="50px"),
    rx.container(
        rx.hstack(
            rx.vstack(
                rx.container(width="20px"),
                rx.vstack(
                    rx.container(height="30px"),
                    rx.heading("Why is my location wrong?", size="7"),
                    rx.container(height="20px"),
                    rx.text("""
                        Your IP address location isn't always your precise location because IP addresses are assigned based on regions, 
                        not exact addresses. Internet Service Providers (ISPs) assign IP addresses to their users within specific geographic areas, 
                        often identified by towns or cities. When websites or services try to determine your location based on your IP address, 
                        they can only get an approximate idea of where you are.

                        This approximation is due to the way IP addresses are distributed. ISPs allocate IP addresses in blocks to different regions, 
                        and many users within the same area may share similar or identical IP addresses. As a result, services can identify the general 
                        region or city associated with an IP address but not the specific address or location of an individual user.
                        Additionally, some users may employ technologies like Virtual Private Networks (VPNs) or proxies, which can further mask 
                        their true location by making it appear as if they are connecting from a different city or country.
                        """, 
                        wrap="wrap", width="100%"),
                    rx.container(height="30px"),
                ),
            ), 
        ),
        height="auto",
        background_color="#f4f5f8",
        margin_top="30px",
        margin_bottom="70px",
        padding="1em"
        ),
    rx.container(
        rx.hstack(
            rx.container(height="30px"),
            rx.image(src="./what_is_vpn.jpg", width="300px", margin="auto", margin_top="0px", padding="10px"),
            rx.container(width="55px"),
            rx.vstack(
                rx.container(height="30px"),
                rx.heading("What's a VPN?", size="7"),
                rx.container(height="20px"),
                rx.text("""
                    A VPN, or Virtual Private Network, is like a secure and private tunnel on the internet. 
                    When you use the internet without a VPN, it's a bit like talking on the phone without a private room – people 
                    might overhear your conversations. But when you use a VPN, it's like having a secret room where your internet 
                    activities are safe from eavesdropping. The VPN encrypts your data, making it unreadable to anyone trying to spy 
                    on you. It's useful for protecting your privacy, especially when using public Wi-Fi, and it can also make it seem 
                    like your computer is in a different location, which can be handy for accessing content that might be restricted 
                    in your school or country.
                    """,
                    wrap="wrap", width="100%"),
            ),
            rx.container(width="20px"),
        ),
        margin="1em"
        ),
    ),
        
    ### MAIN APP / HOMEPAGE FOR MOBILE APPS ###

    rx.mobile_and_tablet(
        # MAIN CONTAINER FOR MOBILE
        rx.container(
            rx.heading("What's my IP address?", size="9", margin_top="10vh", align="left"),
            background_color="#f4f5f8",
            padding="50px 1em 100px 1em",
            width="100%"
        ),
        # MINI NAVBAR FOR MOBILE
        rx.container(
            rx.hstack(
                rx.link("IP Address", 
                        href="https://reflex.dev",
                        color="black",
                        background_color="white", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("Global Ping", 
                        href="https://reflex.dev",
                        color="black",
                        background_color="hsla(0,0%,100%,.5)", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                rx.link("Track My Packet", 
                        href="https://reflex.dev",
                        color="black",
                        background_color="hsla(0,0%,100%,.5)", 
                        padding="15px", 
                        border_radius='7px 7px 0px 0px'),
                background_color="#f4f5f8",
            ),
            background_color="#f4f5f8",
            padding_left="1em",
            padding_right="1em"
        ),
        # DISPLAYING IP INFORMATION & LOGIC FOR MOBILE
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
                    margin="4em 1em 0px 1em"
                    ),
                rx.flex(
                    rx.card(
                        rx.vstack(
                            rx.card(
                                rx.tooltip(rx.image(src=f"{protection_status_img}", width="200px", align="center", margin="auto"), content='Image by storyset on Freepik'),
                                align="center",
                                margin="auto",
                                padding="0px",
                                text_align="center"
                            ),
                            rx.container(height="5px"),
                            rx.text(f"{identity_text}", text_align="center", color=f"{vpn_status_color}", weight="bold", size="6"),
                            rx.container(height="5px"),
                            rx.button(f"{button_text}", background_color=f"{vpn_status_color}"),
                            rx.container(height="5px"),
                            rx.divider(size="4"),
                            rx.container(height="5px"),
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
                            align="center"
                        ),
                        border_radius="0px 0px 7px 7px",
                        border=f"2px solid {vpn_status_color}",
                        width="100%",
                        padding="1.5em",
                        spacing="4",
                        margin="0px 1em 0px 1em"
                    ),
                ),
            ),
        ),
        # INFORMATION SECTION TO TEACH OTHERS ON MOBILE
        rx.container(
            rx.vstack(
                rx.container(height="50px"),
                rx.heading("What's an IP address?", size="7"),
                rx.container(height="20px"),
                rx.text("""
                    An IP (Internet Protocol) address serves as a numerical label assigned to each device connected to a computer network
                    that uses the Internet Protocol for communication. It functions much like a home address in the digital realm.
                    """,
                    wrap="wrap", width="100%"),
                rx.container(height="7px"),
                rx.text("""
                    When data is sent over the internet, it gets divided into packets, and each packet contains both the sender's and receiver's 
                    IP addresses. These addresses ensure that the data reaches the correct destination, allowing devices to communicate and share 
                    information across the vast network of interconnected computers that make up the internet. In essence, IP addresses play a 
                    fundamental role in facilitating the routing and delivery of data between different devices on the internet.
                    """, 
                    wrap="wrap", width="100%"),
                rx.image(src="./what_is_an_ip_address.jpg", width="300px", margin="auto", margin_top="15px", padding="10px"),
                margin="1em",
            ),
            rx.container(height="50px"),
            rx.container(
                rx.container(
                    rx.container(height="40px"),
                    rx.heading("Why is my location wrong?", size="7"),
                    rx.container(height="20px"),
                    rx.text("""
                        Your IP address location isn't always your precise location because IP addresses are assigned based on regions, 
                        not exact addresses. Internet Service Providers (ISPs) assign IP addresses to their users within specific geographic areas, 
                        often identified by towns or cities. When websites or services try to determine your location based on your IP address, 
                        they can only get an approximate idea of where you are.

                        This approximation is due to the way IP addresses are distributed. ISPs allocate IP addresses in blocks to different regions, 
                        and many users within the same area may share similar or identical IP addresses. As a result, services can identify the general 
                        region or city associated with an IP address but not the specific address or location of an individual user.
                        Additionally, some users may employ technologies like Virtual Private Networks (VPNs) or proxies, which can further mask 
                        their true location by making it appear as if they are connecting from a different city or country.
                        """, 
                        wrap="wrap", width="100%"),
                    rx.container(height="40px"),
                    background_color="#f4f5f8",
                    margin="1em"
                ),
                background_color="#f4f5f8"
            ),
        ),
        rx.container(height="50px"),
        rx.container(
            rx.heading("What's a VPN?", size="7"),
            rx.container(height="20px"),
            rx.text("""
                A VPN, or Virtual Private Network, is like a secure and private tunnel on the internet. 
                When you use the internet without a VPN, it's a bit like talking on the phone without a private room – people 
                might overhear your conversations. But when you use a VPN, it's like having a secret room where your internet 
                activities are safe from eavesdropping. The VPN encrypts your data, making it unreadable to anyone trying to spy 
                on you. It's useful for protecting your privacy, especially when using public Wi-Fi, and it can also make it seem 
                like your computer is in a different location, which can be handy for accessing content that might be restricted 
                in your school or country.
                """,
                wrap="wrap", width="100%"),
            rx.image(src="./what_is_vpn.jpg", width="300px", margin="auto", margin_top="0px", padding="10px"),
            margin="1em"
            ),
        ),
    )
    
