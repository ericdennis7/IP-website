/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { ColorModeContext, EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField, Theme as RadixThemesTheme } from "@radix-ui/themes"
import env from "/env.json"
import { Box } from "@chakra-ui/react"
import NextLink from "next/link"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { DebounceInput } from "react-debounce-input"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import json from "react-syntax-highlighter/dist/cjs/languages/prism/json"
import "@radix-ui/themes/styles.css"
import theme from "/utils/theme.js"
import NextHead from "next/head"



export function Debounceinput_e9ebd55a183a36121b0714beb924d140 () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_bd4f9d2ac46a48b80824bb75cfa2d589 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_location", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Input} name={`location`} onChange={on_change_bd4f9d2ac46a48b80824bb75cfa2d589} value={state__textfield_controlled.location}/>
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

export function Debounceinput_01bae73ab1f5405395158c834f58f96a () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_955c80c0e93bd58cd0c257abd2878546 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_packetcount", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Input} name={`packet_count`} onChange={on_change_955c80c0e93bd58cd0c257abd2878546} value={state__textfield_controlled.packetcount}/>
  )
}

export function Root_6fea90f0b6e9b0677ac477a591858fb9 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_a95e5e934386f6faba482aface9d805b = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_input_state.handle_submit", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    


  return (
    <RadixFormRoot className={`Root`} onSubmit={handleSubmit_a95e5e934386f6faba482aface9d805b}>
  <RadixThemesFlex css={{"width": "100%"}} gap={`2`}>
  <RadixThemesBox css={{"width": "30%"}}>
  <RadixThemesText as={`p`} css={{"required": true}} weight={`medium`}>
  {`Target Address`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <Debounceinput_dacc316642e46aac3c4e9ac4054bee99/>
</RadixThemesBox>
  <RadixThemesBox css={{"width": "25%"}}>
  <RadixThemesText as={`p`} css={{"required": true}} weight={`medium`}>
  {`Location(s)`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <Debounceinput_e9ebd55a183a36121b0714beb924d140/>
</RadixThemesBox>
  <RadixThemesBox css={{"width": "15%"}}>
  <RadixThemesText as={`p`} css={{"required": true}} weight={`medium`}>
  {`Test`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <Debounceinput_d78dd21adca43dc71f2faf0b49183554/>
</RadixThemesBox>
  <RadixThemesBox css={{"width": "15%"}}>
  <RadixThemesText as={`p`} css={{"required": true}} weight={`medium`}>
  {`Packets`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <Debounceinput_01bae73ab1f5405395158c834f58f96a/>
</RadixThemesBox>
  <RadixThemesBox css={{"width": "10%"}}>
  <RadixThemesText as={`p`}>
  {`⠀`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesButton color={`grass`} type={`submit`}>
  {`Run Test`}
</RadixThemesButton>
</RadixThemesBox>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

export function Debounceinput_d78dd21adca43dc71f2faf0b49183554 () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_d89c1939577139e043542b883c5d7e41 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_testcount", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Input} maxLength={`1`} name={`test_count`} onChange={on_change_d89c1939577139e043542b883c5d7e41} value={state__textfield_controlled.testcount}/>
  )
}
SyntaxHighlighter.registerLanguage('json', json)

export function Prismasynclight_bf85af90dfa2a3417ab6c53b57c40ace () {
  const state__form_input_state = useContext(StateContexts.state__form_input_state)
  const [ colorMode, toggleColorMode ] = useContext(ColorModeContext)


  return (
    <SyntaxHighlighter language={`json`} style={isTrue(((colorMode) === ("light"))) ? oneLight : oneDark} wrapLongLines={true} children={state__form_input_state.results}/>
  )
}

export function Debounceinput_dacc316642e46aac3c4e9ac4054bee99 () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_a3c3beffc985c978c0312b32a7f6e256 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_address", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Input} name={`ip_domain`} onChange={on_change_a3c3beffc985c978c0312b32a7f6e256} value={state__textfield_controlled.address}/>
  )
}

export function Container_524cf8c9bf22302e2f1f9768360822e7 () {
  const state__form_input_state = useContext(StateContexts.state__form_input_state)


  return (
    <RadixThemesContainer css={{"backgroundColor": "#f4f5f8"}}>
  {state__form_input_state.cities.map((item, index_26c6b15431cbaea181e95463de0a3c81) => (
  <RadixThemesBox css={{"color": "red"}} key={index_26c6b15431cbaea181e95463de0a3c81}>
  {item}
</RadixThemesBox>
))}
</RadixThemesContainer>
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
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
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
  <Root_6fea90f0b6e9b0677ac477a591858fb9/>
  <Prismasynclight_bf85af90dfa2a3417ab6c53b57c40ace/>
  <Container_524cf8c9bf22302e2f1f9768360822e7/>
</RadixThemesContainer>
</RadixThemesFlex>
</Box>
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
