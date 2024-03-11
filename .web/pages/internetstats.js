/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import dynamic from "next/dynamic"
import { Funnel as RechartsFunnel, LabelList as RechartsLabelList, Pie as RechartsPie, ResponsiveContainer as RechartsResponsiveContainer, Tooltip as RechartsTooltip } from "recharts"
import NextHead from "next/head"

const RechartsFunnelChart = dynamic(() => import('recharts').then((mod) => mod.FunnelChart), { ssr: false });
const RechartsPieChart = dynamic(() => import('recharts').then((mod) => mod.PieChart), { ssr: false });


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

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


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
  <Fragment>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "padding": "50px 1em 100px 1em"}}>
  <RadixThemesHeading align={`left`} css={{"marginTop": "10vh"}} size={`9`}>
  {`Get your ping from anywhere! 🌎`}
</RadixThemesHeading>
</RadixThemesContainer>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "paddingLeft": "1em", "paddingRight": "1em"}}>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#f4f5f8"}} direction={`row`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/`} passHref={true}>
  {`My IP Address`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/globalping`} passHref={true}>
  {`My Global Ping`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "black", "backgroundColor": "white", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/internetstats`} passHref={true}>
  {`Track My Packet`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesContainer css={{"height": "50px"}}/>
  <RadixThemesContainer css={{"padding": "1em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`7`}>
  {`What's an OS?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                        An operating system (OS) is a software that manages computer hardware and provides common services for computer programs. 
                        It acts as an intermediary between computer hardware and the applications that run on it. The OS handles tasks 
                        such as managing memory, controlling peripheral devices, facilitating communication between software applications, 
                        and providing a user interface. Popular examples of operating systems include Microsoft Windows, macOS, Linux, and Android.
                        `}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesContainer css={{"height": "7px"}}/>
  <RadixThemesContainer css={{"align": "center", "margin": "auto"}}>
  <RechartsFunnelChart height={250} width={350}>
  <RechartsFunnel data={[{"value": 38.2, "name": "Win10", "fill": "#004fe1"}, {"value": 30.6, "name": "Win11", "fill": "#004fe1"}, {"value": 18.0, "name": "Mobile", "fill": "#81b662"}, {"value": 8.4, "name": "Mac", "fill": "#7e499d"}, {"value": 4.1, "name": "Linux", "fill": "#ffcc33"}, {"value": 1.3, "name": "Win7", "fill": "#004fe1"}, {"value": 0.5, "name": "Win8", "fill": "#004fe1"}]} dataKey={`value`}>
  <RechartsLabelList dataKey={`name`} fill={`#000`} position={`right`} stroke={`none`}/>
  <RechartsLabelList dataKey={`name`} fill={`#000`} position={`right`} stroke={`none`}/>
</RechartsFunnel>
  <RechartsTooltip/>
</RechartsFunnelChart>
</RadixThemesContainer>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesContainer css={{"height": "50px"}}/>
  <RadixThemesContainer css={{"padding": "1em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RechartsResponsiveContainer height={`100%`} minHeight={100} minWidth={200} width={`100%`}>
  <RechartsPieChart height={`100%`} width={`100%`}>
  <RechartsPie cx={`50%`} cy={`50%`} data={[{"value": 68.8, "name": "Chrome", "fill": "#004fe1"}, {"value": 14.9, "name": "Safari", "fill": "#004fe1"}, {"value": 4.2, "name": "Internet Explorer/Edge", "fill": "#81b662"}, {"value": 3.3, "name": "Firefox", "fill": "#7e499d"}, {"value": 1.3, "name": "Other", "fill": "#ffcc33"}]} dataKey={`value`} fill={`#8884d8`} label={true} nameKey={`name`}/>
</RechartsPieChart>
</RechartsResponsiveContainer>
  <RadixThemesFlex align={`start`} css={{"paddingLeft": "20px"}} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`7`}>
  {`What's a web browser?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`                        
                        A web browser is a software application that allows users to access and navigate the World Wide Web (WWW) to view web pages, 
                        download files, and interact with web-based applications. Web browsers interpret and display content written in languages 
                        such as HTML, CSS, and JavaScript, which are used to create websites. 
                        `}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {` 
                        Examples of popular web browsers include Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and Opera. Each browser 
                        may have its unique features, but they all serve the primary purpose of allowing users to interact with and explore content 
                        on the Internet.
                        `}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesContainer css={{"height": "7px"}}/>
</RadixThemesFlex>
</RadixThemesContainer>
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
