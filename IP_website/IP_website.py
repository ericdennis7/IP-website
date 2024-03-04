# Eric Dennis
# Started: Feb 29th, 2024

### IMPORTS ###

import trio
import reflex as rx

from .navbar import navbar
from .ip_address import ip_address_page


### CREATING GLOBAL STYLES USING CSS ###

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

class State(rx.State):
    is_loading: bool = False

async def perform_task():
    # Simulate a task that takes some time
    await trio.sleep(3)

### THE HOME PAGE / IP ADDRESS PAGE

def ip_page():
    return rx.fragment(
        navbar(),
        ip_address_page()
    )

def global_ping_page():
    return rx.fragment(
        navbar()
    )
    

### CREATING THE APP ###

app = rx.App(theme=rx.theme(accent_color="blue"), style=style)
app.add_page(ip_page, route="/")
app.add_page(global_ping_page, route="/globalping")
