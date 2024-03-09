/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Button as RadixThemesButton, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Fragment_ac0b06893fc1b15016f3e0532508036d () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(connectErrors.length >= 2) ? (
  <Fragment>
  <RadixThemesDialog.Root css={{"zIndex": 9999}} open={connectErrors.length >= 2}>
  <RadixThemesDialog.Content>
  <RadixThemesDialog.Title>
  {`Connection Error`}
</RadixThemesDialog.Title>
  <RadixThemesText as={`p`}>
  {`Cannot connect to server: `}
  {(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}
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

export function Fragment_e9a05c105aa9215aeba52aeec8fe2e76 () {
  const state = useContext(StateContexts.state)
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  return (
    <Fragment>
  {isTrue(((!state.is_hydrated) || (connectErrors.length > 0))) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "30px", "right": "30px", "animation": `${pulse} 1s infinite`}} size={32}>
  {`wifi_off`}
</LucideWifiOffIcon>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_e9a05c105aa9215aeba52aeec8fe2e76/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={`center`} css={{"position": "fixed", "top": "0px", "backgroundColor": "white", "padding": "1em", "height": "4em", "width": "100%", "zIndex": "5", "borderBottom": "0.1px solid #eae7ec"}} direction={`row`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <img css={{"width": "2em"}} src={`/favicon.ico`}/>
  <RadixThemesHeading css={{"fontSize": "2em"}}>
  {`App`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`5`}>
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
  {`["<Fragment>\n  <RadixThemesContainer css={{\"backgroundColor\": \"#f4f5f8\", \"padding\": \"50px 1em 100px 1em\"}}>\n  <RadixThemesHeading align={\`left\`} css={{\"marginTop\": \"10vh\"}} size={\`9\`}>\n  {\`Track your packet! 🌎\`}\n</RadixThemesHeading>\n</RadixThemesContainer>\n  <RadixThemesContainer css={{\"backgroundColor\": \"#f4f5f8\", \"paddingLeft\": \"1em\", \"paddingRight\": \"1em\"}}>\n  <RadixThemesFlex align={\`start\`} css={{\"backgroundColor\": \"#f4f5f8\"}} direction={\`row\`} gap={\`2\`}>\n  <RadixThemesLink asChild={true} css={{\"color\": \"rgba(34,46,58,.5)\", \"backgroundColor\": \"hsla(0,0%,100%,.5)\", \"padding\": \"15px\", \"borderRadius\": \"7px 7px 0px 0px\"}}>\n  <NextLink href={\`/\`} passHref={true}>\n  {\`My IP Address\`}\n</NextLink>\n</RadixThemesLink>\n  <RadixThemesLink asChild={true} css={{\"color\": \"rgba(34,46,58,.5)\", \"backgroundColor\": \"hsla(0,0%,100%,.5)\", \"padding\": \"15px\", \"borderRadius\": \"7px 7px 0px 0px\"}}>\n  <NextLink href={\`/globalping\`} passHref={true}>\n  {\`My Global Ping\`}\n</NextLink>\n</RadixThemesLink>\n  <RadixThemesLink asChild={true} css={{\"color\": \"black\", \"backgroundColor\": \"white\", \"padding\": \"15px\", \"borderRadius\": \"7px 7px 0px 0px\"}}>\n  <NextLink href={\`/tracepacket\`} passHref={true}>\n  {\`Track My Packet\`}\n</NextLink>\n</RadixThemesLink>\n</RadixThemesFlex>\n</RadixThemesContainer>\n</Fragment>"]`}
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
