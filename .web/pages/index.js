/** @jsxImportSource @emotion/react */


import { Fragment, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, isTrue } from "/utils/state"
import { WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { Button as RadixThemesButton, Card as RadixThemesCard, Container as RadixThemesContainer, Dialog as RadixThemesDialog, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Separator as RadixThemesSeparator, Strong as RadixThemesStrong, Text as RadixThemesText, Tooltip as RadixThemesTooltip } from "@radix-ui/themes"
import env from "/env.json"
import NextLink from "next/link"
import { Box } from "@chakra-ui/react"
import NextHead from "next/head"



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
  <Fragment>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "padding": "50px 1em 100px 1em"}}>
  <RadixThemesHeading align={`left`} css={{"marginTop": "10vh"}} size={`9`}>
  {`What's my IP address? 📫`}
</RadixThemesHeading>
</RadixThemesContainer>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8"}}>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#f4f5f8"}} direction={`row`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"color": "black", "backgroundColor": "white", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/`} passHref={true}>
  {`IP Address`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/globalping`} passHref={true}>
  {`Global Ping`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/internetstats`} passHref={true}>
  {`Internet Stats`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesFlex align={`center`} css={{"height": "50vh", "margin": "1em", "border": "none", "inset": "0", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesContainer css={{"border": "none", "inset": "0"}}>
  <RadixThemesContainer css={{"color": "white", "textAlign": "center", "textWrap": "wrap", "borderRadius": "7px 7px 0px 0px", "border": "none", "backgroundColor": "#218c74", "inset": "0", "padding": ".7em"}}>
  <RadixThemesStrong>
  {`You are protected!`}
</RadixThemesStrong>
</RadixThemesContainer>
  <RadixThemesFlex align={`start`} css={{"width": "100%", "borderRadius": "7px", "boxShadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} direction={`row`} gap={`2`}>
  <RadixThemesFlex css={{"width": "100%"}} justify={`between`} wrap={`wrap`}>
  <RadixThemesCard css={{"borderRadius": "0px 0px 0px 7px", "border": "2px solid #218c74", "width": "40%", "padding": "1.5em", "spacing": "4"}}>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <RadixThemesCard css={{"align": "center", "margin": "auto", "padding": "0px"}}>
  <RadixThemesTooltip content={`Image by storyset on Freepik`}>
  <img align={`center`} css={{"width": "200px"}} src={`./protection.jpg`}/>
</RadixThemesTooltip>
</RadixThemesCard>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} css={{"textAlign": "center", "color": "#218c74"}} size={`6`} weight={`bold`}>
  {`Identity is Hidden`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard css={{"borderRadius": "0px 0px 7px 0px", "border": "2px solid #218c74", "borderLeft": "none", "width": "60%", "padding": "1.5em", "spacing": "2"}}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesText as={`p`} size={`3`} weight={`light`}>
  {`IP Address:`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`} weight={`bold`}>
  {`37.19.221.245`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} size={`3`} weight={`light`}>
  {`City, Region:`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`} weight={`bold`}>
  {`Houston, Texas`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} size={`3`} weight={`light`}>
  {`Country, Continent:`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`} weight={`bold`}>
  {`United States, North America`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} size={`3`} weight={`light`}>
  {`Internet Service Provider (org):`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`} weight={`bold`}>
  {`Datacamp Limited (Cdnext HOU)`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesContainer>
</RadixThemesFlex>
  <RadixThemesContainer css={{"height": "30px"}}/>
  <RadixThemesContainer css={{"margin": "1em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesHeading size={`7`}>
  {`What's an IP address?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "88%"}}>
  {`
                    An IP (Internet Protocol) address serves as a numerical label assigned to each device connected to a computer network
                    that uses the Internet Protocol for communication. It functions much like a home address in the digital realm.
                    `}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "7px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "88%"}}>
  {`
                    When data is sent over the internet, it gets divided into packets, and each packet contains both the sender's and receiver's 
                    IP addresses. These addresses ensure that the data reaches the correct destination, allowing devices to communicate and share 
                    information across the vast network of interconnected computers that make up the internet. In essence, IP addresses play a 
                    fundamental role in facilitating the routing and delivery of data between different devices on the internet.
                    `}
</RadixThemesText>
</RadixThemesFlex>
  <img css={{"width": "300px", "margin": "auto", "marginTop": "0px", "padding": "10px"}} src={`./what_is_an_ip_address.jpg`}/>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesContainer css={{"height": "50px"}}/>
  <RadixThemesContainer css={{"height": "auto", "backgroundColor": "#f4f5f8", "marginTop": "30px", "marginBottom": "70px", "padding": "1em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesContainer css={{"width": "20px"}}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesContainer css={{"height": "30px"}}/>
  <RadixThemesHeading size={`7`}>
  {`Why is my location wrong?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                        Your IP address location isn't always your precise location because IP addresses are assigned based on regions, 
                        not exact addresses. Internet Service Providers (ISPs) assign IP addresses to their users within specific geographic areas, 
                        often identified by towns or cities. When websites or services try to determine your location based on your IP address, 
                        they can only get an approximate idea of where you are.

                        This approximation is due to the way IP addresses are distributed. ISPs allocate IP addresses in blocks to different regions, 
                        and many users within the same area may share similar or identical IP addresses. As a result, services can identify the general 
                        region or city associated with an IP address but not the specific address or location of an individual user.
                        Additionally, some users may employ technologies like Virtual Private Networks (VPNs) or proxies, which can further mask 
                        their true location by making it appear as if they are connecting from a different city or country.
                        `}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "30px"}}/>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesContainer css={{"margin": "1em"}}>
  <RadixThemesFlex align={`start`} direction={`row`} gap={`2`}>
  <RadixThemesContainer css={{"height": "30px"}}/>
  <img css={{"width": "300px", "margin": "auto", "marginTop": "0px", "padding": "10px"}} src={`./what_is_vpn.jpg`}/>
  <RadixThemesContainer css={{"width": "55px"}}/>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesContainer css={{"height": "30px"}}/>
  <RadixThemesHeading size={`7`}>
  {`What's a VPN?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                    A VPN, or Virtual Private Network, is like a secure and private tunnel on the internet. 
                    When you use the internet without a VPN, it's a bit like talking on the phone without a private room – people 
                    might overhear your conversations. But when you use a VPN, it's like having a secret room where your internet 
                    activities are safe from eavesdropping. The VPN encrypts your data, making it unreadable to anyone trying to spy 
                    on you. It's useful for protecting your privacy, especially when using public Wi-Fi, and it can also make it seem 
                    like your computer is in a different location, which can be handy for accessing content that might be restricted 
                    in your school or country.
                    `}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesContainer css={{"width": "20px"}}/>
</RadixThemesFlex>
</RadixThemesContainer>
</Box>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "padding": "50px 1em 100px 1em", "width": "100%"}}>
  <RadixThemesHeading align={`left`} css={{"marginTop": "10vh"}} size={`9`}>
  {`What's my IP address?`}
</RadixThemesHeading>
</RadixThemesContainer>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "paddingLeft": "1em", "paddingRight": "1em"}}>
  <RadixThemesFlex align={`start`} css={{"backgroundColor": "#f4f5f8"}} direction={`row`} gap={`2`}>
  <RadixThemesLink asChild={true} css={{"color": "black", "backgroundColor": "white", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/`} passHref={true}>
  {`IP Address`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/globalping`} passHref={true}>
  {`Global Ping`}
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"color": "rgba(34,46,58,.5)", "backgroundColor": "hsla(0,0%,100%,.5)", "padding": "15px", "borderRadius": "7px 7px 0px 0px"}}>
  <NextLink href={`/tracepacket`} passHref={true}>
  {`Track My Packet`}
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <RadixThemesContainer>
  <RadixThemesContainer css={{"color": "white", "textAlign": "center", "textWrap": "wrap", "borderRadius": "7px 7px 0px 0px", "border": "none", "backgroundColor": "#218c74", "inset": "0", "padding": ".7em", "margin": "4em 1em 0px 1em"}}>
  <RadixThemesStrong>
  {`You are protected!`}
</RadixThemesStrong>
</RadixThemesContainer>
  <RadixThemesFlex>
  <RadixThemesCard css={{"borderRadius": "0px 0px 7px 7px", "border": "2px solid #218c74", "width": "100%", "padding": "1.5em", "spacing": "4", "margin": "0px 1em 0px 1em"}}>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <RadixThemesCard css={{"align": "center", "margin": "auto", "padding": "0px", "textAlign": "center"}}>
  <RadixThemesTooltip content={`Image by storyset on Freepik`}>
  <img align={`center`} css={{"width": "200px", "margin": "auto"}} src={`./protection.jpg`}/>
</RadixThemesTooltip>
</RadixThemesCard>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} css={{"textAlign": "center", "color": "#218c74"}} size={`6`} weight={`bold`}>
  {`Identity is Hidden`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesButton css={{"backgroundColor": "#218c74"}}>
  {`Perform a Global Ping Test`}
</RadixThemesButton>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesSeparator size={`4`}/>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} size={`3`} weight={`light`}>
  {`IP Address:`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`} weight={`bold`}>
  {`37.19.221.245`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} size={`3`} weight={`light`}>
  {`City, Region:`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`} weight={`bold`}>
  {`Houston, Texas`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} size={`3`} weight={`light`}>
  {`Country, Continent:`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`} weight={`bold`}>
  {`United States, North America`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
  <RadixThemesText as={`p`} size={`3`} weight={`light`}>
  {`Internet Service Provider (org):`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`} weight={`bold`}>
  {`Datacamp Limited (Cdnext HOU)`}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "5px"}}/>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesFlex>
</RadixThemesContainer>
</RadixThemesFlex>
  <RadixThemesContainer>
  <RadixThemesFlex align={`start`} css={{"margin": "1em"}} direction={`column`} gap={`2`}>
  <RadixThemesContainer css={{"height": "50px"}}/>
  <RadixThemesHeading size={`7`}>
  {`What's an IP address?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                    An IP (Internet Protocol) address serves as a numerical label assigned to each device connected to a computer network
                    that uses the Internet Protocol for communication. It functions much like a home address in the digital realm.
                    `}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "7px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                    When data is sent over the internet, it gets divided into packets, and each packet contains both the sender's and receiver's 
                    IP addresses. These addresses ensure that the data reaches the correct destination, allowing devices to communicate and share 
                    information across the vast network of interconnected computers that make up the internet. In essence, IP addresses play a 
                    fundamental role in facilitating the routing and delivery of data between different devices on the internet.
                    `}
</RadixThemesText>
  <img css={{"width": "300px", "margin": "auto", "marginTop": "15px", "padding": "10px"}} src={`./what_is_an_ip_address.jpg`}/>
</RadixThemesFlex>
  <RadixThemesContainer css={{"height": "50px"}}/>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8"}}>
  <RadixThemesContainer css={{"backgroundColor": "#f4f5f8", "margin": "1em"}}>
  <RadixThemesContainer css={{"height": "40px"}}/>
  <RadixThemesHeading size={`7`}>
  {`Why is my location wrong?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                        Your IP address location isn't always your precise location because IP addresses are assigned based on regions, 
                        not exact addresses. Internet Service Providers (ISPs) assign IP addresses to their users within specific geographic areas, 
                        often identified by towns or cities. When websites or services try to determine your location based on your IP address, 
                        they can only get an approximate idea of where you are.

                        This approximation is due to the way IP addresses are distributed. ISPs allocate IP addresses in blocks to different regions, 
                        and many users within the same area may share similar or identical IP addresses. As a result, services can identify the general 
                        region or city associated with an IP address but not the specific address or location of an individual user.
                        Additionally, some users may employ technologies like Virtual Private Networks (VPNs) or proxies, which can further mask 
                        their true location by making it appear as if they are connecting from a different city or country.
                        `}
</RadixThemesText>
  <RadixThemesContainer css={{"height": "40px"}}/>
</RadixThemesContainer>
</RadixThemesContainer>
</RadixThemesContainer>
  <RadixThemesContainer css={{"height": "50px"}}/>
  <RadixThemesContainer css={{"margin": "1em"}}>
  <RadixThemesHeading size={`7`}>
  {`What's a VPN?`}
</RadixThemesHeading>
  <RadixThemesContainer css={{"height": "20px"}}/>
  <RadixThemesText as={`p`} css={{"wrap": "wrap", "width": "100%"}}>
  {`
                A VPN, or Virtual Private Network, is like a secure and private tunnel on the internet. 
                When you use the internet without a VPN, it's a bit like talking on the phone without a private room – people 
                might overhear your conversations. But when you use a VPN, it's like having a secret room where your internet 
                activities are safe from eavesdropping. The VPN encrypts your data, making it unreadable to anyone trying to spy 
                on you. It's useful for protecting your privacy, especially when using public Wi-Fi, and it can also make it seem 
                like your computer is in a different location, which can be handy for accessing content that might be restricted 
                in your school or country.
                `}
</RadixThemesText>
  <img css={{"width": "300px", "margin": "auto", "marginTop": "0px", "padding": "10px"}} src={`./what_is_vpn.jpg`}/>
</RadixThemesContainer>
</Box>
</Fragment>
</Fragment>
  <NextHead>
  <title>
  {`My IP Address`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
