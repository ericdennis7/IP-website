# Eric Dennis
# Started: Feb 29th, 2024

### IMPORTS ###

import trio
import reflex as rx

from .navbar import navbar
from .ip_address import ip_address_page
from .globalping import globalping_page


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

### CLASSES ###

### THE HOME PAGE / IP ADDRESS PAGE

def ip_page():
    return rx.fragment(
        navbar(),
        ip_address_page()
    )

### THE GLOBALPING PAGE ###

def global_ping_page():
    return rx.fragment(
        navbar(),
        globalping_page()
    )
    
### CREATING THE APP ###

app = rx.App(theme=rx.theme(accent_color="blue"), style=style)
app.add_page(ip_page, route="/")
app.add_page(global_ping_page, route="/globalping")
