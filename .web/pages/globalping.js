/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { FrownIcon as LucideFrownIcon, LaughIcon as LucideLaughIcon, MehIcon as LucideMehIcon, PlayIcon as LucidePlayIcon, SmileIcon as LucideSmileIcon } from "lucide-react"
import { SkeletonText, Stack } from "@chakra-ui/react"
import { Grid as DataTableGrid } from "gridjs-react"
import "gridjs/dist/theme/mermaid.css"
import NextHead from "next/head"



export function Fragment_c09a057d3472d07e60865af30bcab077 () {
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <Fragment>
  {isTrue(state__form_input_state.show_data) ? (
  <Fragment>
  <DataTableGrid columns={state__form_input_state.ping_results.columns} data={state__form_input_state.ping_results.data} pagination={true} resizable={true} search={true} sort={true}/>
</Fragment>
) : (
  <Fragment>
  {isTrue(state__form_input_state.show_initial) ? (
  <Fragment>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "borderRadius": "7px", "marginTop": "20px", "width": "100%"}}>
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

export function Button_48412b45faf25c1425d475a08ca21e9a () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_click_347c0269d48fabdaf2e9480e861a7972 = useCallback((_e) => addEvents([Event("state.form_input_state.handle_submit", {})], (_e), {}), [addEvents, Event])

  return (
    <RadixThemesButton onClick={on_click_347c0269d48fabdaf2e9480e861a7972} size={`3`}>
  <LucidePlayIcon css={{"color": "var(--current-color)"}}/>
  {`Run Globalping Test!`}
</RadixThemesButton>
  )
}

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
  <RadixThemesContainer css={{"height": "10px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`Every test contains 3 packets and the results are displayed in milliseconds (ms).`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <Button_48412b45faf25c1425d475a08ca21e9a/>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <Fragment_e1d8101aef680242d1bb09a07fe00379/>
  <Fragment_c09a057d3472d07e60865af30bcab077/>
  <RadixThemesContainer css={{"height": "40px"}}/>
  <RadixThemesContainer css={{"background": "#f4f5f8", "borderRadius": "7px", "padding": "1em", "wrap": "wrap"}}>
  <RadixThemesHeading>
  {`What is ping?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`Ping is a measure of the round-trip time it takes for a data packet to travel from the source to the destination and back again. The "good" or acceptable ping range can vary depending on the specific use case and requirements. Here are general categories for ping ranges:`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "10px"}}/>
  <RadixThemesFlex css={{"direction": "column", "listStylePosition": "outside", "listStyleType": "none"}} direction={`column`}>
  <RadixThemesContainer css={{"height": "7px"}}/>
  <li>
  <LucideLaughIcon css={{"color": "purple", "display": "inline"}}>
  {`laugh`}
</LucideLaughIcon>
  {` Low Ping (0-30 ms)`}
</li>
  <RadixThemesContainer css={{"height": "7px"}}/>
  <li>
  <LucideSmileIcon css={{"color": "green", "display": "inline"}}>
  {`smile`}
</LucideSmileIcon>
  {` Medium Ping (30-100 ms)`}
</li>
  <RadixThemesContainer css={{"height": "7px"}}/>
  <li>
  <LucideMehIcon css={{"color": "orange", "display": "inline"}}>
  {`meh`}
</LucideMehIcon>
  {` High Ping (100-200 ms)`}
</li>
  <RadixThemesContainer css={{"height": "7px"}}/>
  <li>
  <LucideFrownIcon css={{"color": "red", "display": "inline"}}>
  {`frown`}
</LucideFrownIcon>
  {` Very High Ping (200+ ms)`}
</li>
</RadixThemesFlex>
</RadixThemesContainer>
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
