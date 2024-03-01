import reflex as rx

def navbar():
    return rx.hstack(
        rx.hstack(
            rx.image(src="/favicon.ico", width="2em"),
            rx.heading("App", font_size="2em"),
        ),
        rx.spacer(),
        rx.hstack(
            rx.link("LinkedIn", color_scheme="blue", variant="soft", radius="medium", href="https://www.linkedin.com/in/ericdennis7/"),
            rx.link("Donate", color_scheme="grass", variant="soft", radius="medium", href="https://www.linkedin.com/in/ericdennis7/"),
            rx.menu.root(
                rx.menu.trigger(
                    rx.button("Menu", background_color="black", color="white", variant="soft", radius="medium"),
                ),
                rx.menu.content(
                    rx.menu.item("item 1"),
                    rx.menu.item("Item 2"),
                    rx.menu.item("Item 3"),
                ),
            ),
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