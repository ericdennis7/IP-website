/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { SkeletonText, Stack } from "@chakra-ui/react"
import { Grid as DataTableGrid } from "gridjs-react"
import "gridjs/dist/theme/mermaid.css"
import NextHead from "next/head"



export function Fragment_e1d8101aef680242d1bb09a07fe00379 () {
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <Fragment>
  {isTrue(state__form_input_state.loading) ? (
  <Fragment>
  <Stack sx={{"width": "100%"}}>
  <SkeletonText noOfLines={25}/>
</Stack>
</Fragment>
) : (
  <Fragment>
  <RadixThemesContainer css={{"height": "0px"}}/>
</Fragment>
)}
</Fragment>
  )
}

export function Fragment_1762bb90abdb81b879b2a22edbbe01a1 () {
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <RadixThemesDialog.Root open={connectError !== null}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {getBackendURL(env.EVENT).href}
</RadixThemesText>
</RadixThemesDialog.Content>
</RadixThemesDialog.Root>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Fragment_7dcc98a07bb06ecb7f2659a550743607 () {
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <Fragment>
  {isTrue(state__form_input_state.show_data) ? (
  <Fragment>
  <DataTableGrid columns={state__form_input_state.ping_results.columns} data={state__form_input_state.ping_results.data} search={true} sort={true}/>
</Fragment>
) : (
  <Fragment>
  {isTrue(state__form_input_state.show_initial) ? (
  <Fragment>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "borderRadius": "7px", "marginTop": "20px"}}>
  <RadixThemesText as={`p`} css={{"padding": "1em", "textAlign": "center"}}>
  {`Your ping results will be displayed here!`}
</RadixThemesText>
</RadixThemesContainer>
</Fragment>
) : (
  <Fragment>
  <RadixThemesContainer/>
</Fragment>
)}
</Fragment>
)}
</Fragment>
  )
}

export function Button_e1860d1c801ee3ad17ecffb1c05d2aa4 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_347c0269d48fabdaf2e9480e861a7972 = useCallback((_e) => addEvents([Event("state.form_input_state.handle_submit", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton onClick={on_click_347c0269d48fabdaf2e9480e861a7972} size={`3`}>
  {`Run Globalping Test!`}
</RadixThemesButton>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_1762bb90abdb81b879b2a22edbbe01a1/>
  <Fragment>
  <RadixThemesFlex align={`center`} css={{"position": "fixed", "top": "0px", "backgroundColor": "white", "padding": "1em", "height": "4em", "width": "100%", "zIndex": "5", "borderBottom": "0.1px solid #eae7ec", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <img css={{"width": "2em"}} src={`/favicon.ico`}/>
  <RadixThemesHeading css={{"fontSize": "2em"}}>
  {`App`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`center`} css={{"flexDirection": "row"}} gap={`5`}>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger>
  <RadixThemesButton css={{"backgroundColor": "black", "color": "white"}} radius={`medium`} variant={`soft`}>
  {`Menu`}
</RadixThemesButton>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesDropdownMenu.Item>
  {`item 1`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item>
  {`Item 2`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item>
  {`Item 3`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "padding": "50px 1em 100px 1em"}}>
  <RadixThemesHeading align={`left`} css={{"marginTop": "10vh"}} size={`9`}>
  {`Get your ping from anywhere! 🌎`}
</RadixThemesHeading>
</RadixThemesContainer>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "paddingLeft": "1em", "paddingRight": "1em"}}>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#f4f5f8", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/`} passHref={true}>
  {`My IP Address`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "black", "backgroundColor": "white", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/globalping`} passHref={true}>
  {`My Global Ping`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`https://reflex.dev`} passHref={true}>
  {`Track My Packet`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesFlex align={`center`} css={{"margin": "1em", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesContainer css={{"marginTop": "3em", "width": "100%"}}>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesHeading>
  {`How does this work?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                    Using the awesome features of jsDelivr Globalping, this cool web tool will randomly pick 100 spots across 
                    the globe and gather the ping times (in milliseconds) from your current IP address. To get started, just click "Run Globalping Test." 
                    It only takes around 10 seconds to gather and show your results. Feel free to run it again whenever you want!
                    `}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <Button_e1860d1c801ee3ad17ecffb1c05d2aa4/>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <Fragment_e1d8101aef680242d1bb09a07fe00379/>
  <Fragment_7dcc98a07bb06ecb7f2659a550743607/>
</RadixThemesContainer>
</RadixThemesFlex>
</Fragment>
</Fragment>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
