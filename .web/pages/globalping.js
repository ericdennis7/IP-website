/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading } from "@radix-ui/themes"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
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
  {`["<Fragment>\n  <Box sx={{\"display\": [\"none\", \"none\", \"none\", \"block\"]}}>\n  <RadixThemesContainer css={{\"backgroundColor\": \"#f4f5f8\", \"padding\": \"50px 1em 100px 1em\"}}>\n  <RadixThemesHeading align={\`left\`} css={{\"marginTop\": \"10vh\"}} size={\`9\`}>\n  {\`Get your ping from anywhere!\`}\n</RadixThemesHeading>\n</RadixThemesContainer>\n  <RadixThemesContainer css={{\"backgroundColor\": \"#f4f5f8\"}}>\n  <RadixThemesFlex align={\`start\`} css={{\"backgroundColor\": \"#f4f5f8\"}} gap={\`2\`}>\n  <RadixThemesLink asChild={true} css={{\"color\": \"rgba(34,46,58,.5)\", \"backgroundColor\": \"white\", \"padding\": \"15px\", \"borderRadius\": \"7px 7px 0px 0px\"}}>\n  <NextLink href={\`/\`} passHref={true}>\n  {\`My IP Address\`}\n</NextLink>\n</RadixThemesLink>\n  <RadixThemesLink asChild={true} css={{\"color\": \"black\", \"backgroundColor\": \"hsla(0,0%,100%,.5)\", \"padding\": \"15px\", \"borderRadius\": \"7px 7px 0px 0px\"}}>\n  <NextLink href={\`/globalping\`} passHref={true}>\n  {\`My Global Ping\`}\n</NextLink>\n</RadixThemesLink>\n  <RadixThemesLink asChild={true} css={{\"color\": \"rgba(34,46,58,.5)\", \"backgroundColor\": \"hsla(0,0%,100%,.5)\", \"padding\": \"15px\", \"borderRadius\": \"7px 7px 0px 0px\"}}>\n  <NextLink href={\`https://reflex.dev\`} passHref={true}>\n  {\`Track My Packet\`}\n</NextLink>\n</RadixThemesLink>\n</RadixThemesFlex>\n</RadixThemesContainer>\n</Box>\n</Fragment>"]`}
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
