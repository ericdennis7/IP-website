/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Container as RadixThemesContainer, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import dynamic from "next/dynamic"
import { Bar as RechartsBar, Funnel as RechartsFunnel, LabelList as RechartsLabelList, Legend as RechartsLegend, Pie as RechartsPie, ResponsiveContainer as RechartsResponsiveContainer, Tooltip as RechartsTooltip, XAxis as RechartsXAxis, YAxis as RechartsYAxis } from "recharts"
import NextHead from "next/head"

const RechartsPieChart = dynamic(() => import('recharts').then((mod) => mod.PieChart), { ssr: false });
const RechartsFunnelChart = dynamic(() => import('recharts').then((mod) => mod.FunnelChart), { ssr: false });
const RechartsBarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });


export function Fragment_966c0378eb9d65bdfb5286644be9b831 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  const state = useContext(StateContexts.state)


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


export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <div css={{"position": "fixed", "width": "100vw", "height": "0"}}>
  <Fragment_966c0378eb9d65bdfb5286644be9b831/>
</div>
  <Fragment_ac0b06893fc1b15016f3e0532508036d/>
</Fragment>
  <Fragment>
  <RadixThemesFlex align={`center`} css={{"position": "fixed", "top": "0px", "backgroundColor": "white", "padding": "1em", "height": "4em", "width": "100%", "zIndex": "5", "borderBottom": "0.1px solid #eae7ec"}} direction={`row`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesHeading css={{"fontSize": "2em"}}>
  {`🌎 MyGlobalPing`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesFlex align={`center`} direction={`row`} gap={`5`}>
  <RadixThemesLink asChild={true} color={`blue`} css={{"variant": "soft", "radius": "medium"}}>
  <NextLink href={`https://www.linkedin.com/in/ericdennis7/`} passHref={true}>
  {`LinkedIn`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
  <Fragment css={{"marginBottom": "100px"}}>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "padding": "50px 1em 100px 1em"}}>
  <RadixThemesHeading align={`left`} css={{"marginTop": "10vh"}} size={`9`}>
  {`Internet Statistics (2024) 📈`}
</RadixThemesHeading>
</RadixThemesContainer>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "paddingLeft": "1em", "paddingRight": "1em"}}>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#f4f5f8"}} direction={`row`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/`} passHref={true}>
  {`IP Address`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/globalping`} passHref={true}>
  {`Global Ping`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "black", "backgroundColor": "white", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/internetstats`} passHref={true}>
  {`Internet Stats`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesContainer css={{"height": "50px"}}/>
  <RadixThemesContainer css={{"padding": "1em"}}>
  <RadixThemesText as={`p`} css={{"marginBottom": "20px"}}>
  {`All information below is in percent (%) and from https://www.w3schools.com/browsers/`}
</RadixThemesText>
  <RadixThemesFlex align={`center`} wrap={`wrap`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`7`}>
  {`What's an OS and what are the top OS's?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                        An operating system (OS) is a software that manages computer hardware and provides common services for computer programs. 
                        It acts as an intermediary between computer hardware and the applications that run on it. The OS handles tasks 
                        such as managing memory, controlling peripheral devices, facilitating communication between software applications, 
                        and providing a user interface. Popular examples of operating systems include Microsoft Windows, macOS, Linux, and Android.
                        As of 2024, the top operating systems are:
                        `}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesContainer css={{"align": "center", "margin": "auto"}}>
  <RechartsFunnelChart css={{"marginTop": "50px"}} height={250} width={350}>
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
  <RadixThemesFlex align={`center`} wrap={`wrap`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`7`}>
  {`What's a web browser and what's the top browsers?`}
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
                        on the Internet. As of 2024, the top browsers are:
                        `}
</RadixThemesText>
</RadixThemesFlex>
  <RechartsResponsiveContainer height={275} width={`100%`}>
  <RechartsPieChart height={`100%`} width={`100%`}>
  <RechartsPie cx={`50%`} cy={`50%`} data={[{"value": 68.8, "name": "Chrome", "fill": "green"}, {"value": 14.9, "name": "Safari", "fill": "red"}, {"value": 4.2, "name": "Internet Explorer/Edge", "fill": "blue"}, {"value": 3.3, "name": "Firefox", "fill": "orange"}, {"value": 1.3, "name": "Other", "fill": "purple"}]} dataKey={`value`} fill={`#8884d8`} label={true} nameKey={`name`}/>
  <RechartsTooltip/>
  <RechartsLegend/>
</RechartsPieChart>
</RechartsResponsiveContainer>
  <RadixThemesContainer css={{"height": "7px"}}/>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesContainer css={{"height": "50px"}}/>
  <RadixThemesContainer css={{"padding": "1em"}}>
  <RadixThemesFlex align={`center`} wrap={`wrap`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`7`}>
  {`What are the top screen sizes?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`                        
                        Screen resolution refers to the number of pixels that a display can show horizontally and vertically. It is typically 
                        represented as the width x height in pixels. For example, a screen resolution of 1920 x 1080 means the display has 1920 
                        pixels in width and 1080 pixels in height. Screen resolution is an important factor in determining the clarity and 
                        detail of images and text on a display. Higher resolutions generally result in sharper and more detailed visuals.
                        `}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RechartsResponsiveContainer height={275} width={`100%`}>
  <RechartsBarChart css={{"marginTop": "20px"}} data={[{"value": 47.2, "name": "Other High", "fill": "#40739e"}, {"value": 18.4, "name": "1920x1080", "fill": "#44bd32"}, {"value": 18.2, "name": "1366x768", "fill": "#e1b12c"}, {"value": 1.1, "name": "1280x1024", "fill": "#8c7ae6"}, {"value": 1.0, "name": "1280x800", "fill": "#c23616"}, {"value": 0.7, "name": "1024x768", "fill": "#718093"}, {"value": 0.7, "name": "Other Lower", "fill": "##2f3640"}]} height={`100%`} width={`100%`}>
  <RechartsBar dataKey={`value`} fill={`#8884d8`} stroke={`#8884d8`}/>
  <RechartsXAxis dataKey={`name`}/>
  <RechartsYAxis/>
</RechartsBarChart>
</RechartsResponsiveContainer>
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
