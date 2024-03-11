import reflex as rx

def navbar():
    return rx.hstack(
        rx.hstack(
            rx.heading("🌎 MyGlobalPing", font_size="2em"),
        ),
        rx.spacer(),
        rx.hstack(
            rx.link("LinkedIn", color_scheme="blue", variant="soft", radius="medium", href="https://www.linkedin.com/in/ericdennis7/"),
            spacing="5",
            align="center"
        ),
        position="fixed",
        top="0px",
        background_color="white",
        padding="1em",
        height="4em",
        width="100%",
        z_index="5",
        borderBottom="0.1px solid #eae7ec",
        align="center"
    )