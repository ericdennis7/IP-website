/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { EventLoopContext, StateContexts } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue } from "/utils/state"
import { Box as RadixThemesBox, Button as RadixThemesButton, Container as RadixThemesContainer, Dialog as RadixThemesDialog, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Link as RadixThemesLink, Text as RadixThemesText, TextField as RadixThemesTextField } from "@radix-ui/themes"
import env from "/env.json"
import { Box } from "@chakra-ui/react"
import NextLink from "next/link"
import { Root as RadixFormRoot } from "@radix-ui/react-form"
import { DebounceInput } from "react-debounce-input"
import dynamic from "next/dynamic"
import NextHead from "next/head"

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });


export function Debounceinput_01bae73ab1f5405395158c834f58f96a () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_955c80c0e93bd58cd0c257abd2878546 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_packetcount", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Input} name={`packet_count`} onChange={on_change_955c80c0e93bd58cd0c257abd2878546} value={state__textfield_controlled.packetcount}/>
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

export function Debounceinput_d78dd21adca43dc71f2faf0b49183554 () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_d89c1939577139e043542b883c5d7e41 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_testcount", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Input} maxLength={`1`} name={`test_count`} onChange={on_change_d89c1939577139e043542b883c5d7e41} value={state__textfield_controlled.testcount}/>
  )
}

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

export function Root_48364b956041341eb62b48da1c916616 () {
  
    const handleSubmit_2feda58b96cba0d4da1279470ea8d98e = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_input_state.handle_submit", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    
  const [addEvents, connectError] = useContext(EventLoopContext);


  return (
    <RadixFormRoot className={`Root`} onSubmit={handleSubmit_2feda58b96cba0d4da1279470ea8d98e}>
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
  <Root_48364b956041341eb62b48da1c916616/>
  <Plot data={[{"customdata": [[109.776, 110.704, 110.133, "EU", "Eastern Europe", "PL", "Warsaw"], [102.337, 103.058, 102.618, "EU", "Southern Europe", "ES", "Madrid"], [101.96, 102.327, 102.108, "EU", "Western Europe", "DE", "Falkenstein"], [48.701, 48.729, 48.718, "NA", "Northern America", "US", "Los Angeles"], [142.372, 142.62, 142.48, "AS", "Eastern Europe", "RU", "Saint Petersburg"], [108.932, 110.646, 109.705, "EU", "Western Europe", "DE", "Hamburg"], [187.861, 188.057, 187.931, "AS", "Eastern Europe", "RU", "Novosibirsk"], [138.385, 138.394, 138.388, "EU", "Eastern Europe", "BG", "Sofia"], [54.331, 58.349, 55.801, "NA", "Northern America", "US", "Palm Bay"], [46.878, 47.242, 47.057, "NA", "Northern America", "US", "San Jose"], [132.433, 132.957, 132.629, "SA", "South America", "BR", "Sao Paulo"], [195.002, 195.998, 195.409, "AS", "Eastern Asia", "HK", "Hong Kong"], [110.344, 110.403, 110.376, "EU", "Southern Europe", "ES", "Madrid"], [152.093, 152.141, 152.113, "AS", "Eastern Asia", "JP", "Tokyo"], [224.982, 225.231, 225.127, "AS", "South-eastern Asia", "SG", "Singapore"], [0.428, 0.574, 0.51, "NA", "Northern America", "US", "Chicago"], [52.439, 52.497, 52.463, "NA", "Northern America", "US", "Spokane"], [144.059, 144.167, 144.122, "SA", "South America", "BR", "Sao Paulo"], [191.767, 191.866, 191.811, "AS", "Western Asia", "BH", "Manama"], [229.473, 229.518, 229.503, "AS", "South-eastern Asia", "SG", "Singapore"], [87.754, 87.791, 87.767, "EU", "Northern Europe", "GB", "London"], [231.24, 231.939, 231.473, "AS", "Eastern Asia", "CN", "Chongqing"], [23.347, 23.429, 23.384, "NA", "Northern America", "US", "Dallas"], [59.491, 59.704, 59.628, "NA", "Northern America", "US", "Springdale"], [115.857, 116.201, 116.003, "EU", "Southern Europe", "PT", "Braga"], [135.468, 136.031, 135.693, "EU", "Eastern Europe", "PL", "Krakow"], [133.915, 133.987, 133.95, "SA", "South America", "BR", "Sao Paulo"], [15.788, 15.876, 15.827, "NA", "Northern America", "US", "Atlanta"], [21.488, 21.516, 21.505, "NA", "Northern America", "US", "Dallas"], [147.269, 171.213, 155.295, "SA", "South America", "BR", "Guapore"], [147.729, 147.86, 147.807, "AS", "Western Asia", "IL", "Tel Aviv"], [103.593, 104.283, 103.879, "EU", "Western Europe", "DE", "Falkenstein"], [171.437, 175.666, 172.846, "SA", "South America", "AR", "Cordoba"], [168.037, 168.204, 168.105, "AS", "Western Asia", "GE", "Sokhumi"], [99.655, 99.693, 99.674, "EU", "Western Europe", "DE", "Frankfurt"], [142.803, 142.881, 142.839, "AS", "Eastern Asia", "JP", "Chiba"], [111.809, 113.485, 112.378, "SA", "South America", "BR", "Recife"], [98.033, 98.136, 98.069, "EU", "Northern Europe", "GB", "London"], [92.686, 94.484, 93.751, "EU", "Northern Europe", "GB", "Reading"], [94.648, 95.08, 94.836, "EU", "Western Europe", "BE", "Brussels"], [49.235, 63.499, 53.993, "NA", "Northern America", "US", "Santa Clara"], [123.055, 124.163, 123.425, "EU", "Eastern Europe", "BG", "Sofia"], [153.702, 153.788, 153.745, "SA", "South America", "BR", "Frederico Westphalen"], [21.508, 21.566, 21.532, "NA", "Northern America", "US", "Dallas"], [267.248, 267.319, 267.292, "AS", "Southern Asia", "IN", "Bengaluru"], [35.31, 41.259, 37.37, "NA", "Northern America", "US", "Madison"], [95.091, 95.962, 95.422, "EU", "Western Europe", "DE", "Frankfurt"], [145.407, 145.889, 145.59, "AS", "Eastern Europe", "RU", "Moscow"], [127.083, 127.197, 127.13, "EU", "Northern Europe", "EE", "Tallinn"], [230.61, 230.903, 230.712, "AS", "South-eastern Asia", "ID", "Jakarta"], [123.352, 123.438, 123.404, "EU", "Northern Europe", "SE", "Stockholm"], [276.414, 276.523, 276.451, "AS", "Southern Asia", "IN", "Mumbai"], [104.069, 105.054, 104.49, "EU", "Western Europe", "NL", "Zwolle"], [81.989, 81.996, 81.992, "EU", "Northern Europe", "GB", "London"], [101.125, 101.213, 101.167, "EU", "Western Europe", "DE", "Frankfurt"], [99.924, 100.689, 100.179, "EU", "Western Europe", "NL", "Zwolle"], [198.728, 198.849, 198.788, "OC", "Australia and New Zealand", "AU", "Sydney"], [124.749, 124.777, 124.759, "EU", "Eastern Europe", "PL", "Warsaw"], [191.76, 191.842, 191.79, "AS", "Eastern Asia", "HK", "Hong Kong"], [87.459, 87.964, 87.691, "EU", "Northern Europe", "GB", "London"], [136.465, 136.561, 136.525, "AS", "Western Asia", "TR", "Istanbul"], [150.252, 168.536, 156.394, "AS", "Eastern Europe", "RU", "Chelyabinsk"], [146.52, 146.719, 146.622, "AS", "Western Asia", "IL", "Tel Aviv"], [70.328, 70.438, 70.365, "NA", "Northern America", "US", "San Jose"], [94.214, 94.414, 94.298, "EU", "Western Europe", "NL", "Amsterdam"], [26.296, 26.61, 26.425, "NA", "Northern America", "US", "Austin"], [22.384, 22.407, 22.397, "NA", "Northern America", "US", "Allentown"], [160.713, 161.094, 160.867, "EU", "Western Asia", "CY", "Limassol"], [49.641, 49.804, 49.703, "NA", "Northern America", "US", "Los Angeles"], [110.697, 110.936, 110.8, "EU", "Southern Europe", "IT", "Milan"], [150.395, 150.576, 150.455, "AS", "Eastern Asia", "JP", "Osaka"], [103.171, 104.08, 103.477, "EU", "Western Europe", "DE", "Falkenstein"], [86.087, 86.161, 86.134, "EU", "Northern Europe", "GB", "Southampton"], [98.557, 99.5, 98.879, "EU", "Western Europe", "DE", "Frankfurt"], [136.364, 136.415, 136.389, "AS", "Western Asia", "TR", "Izmir"], [95.944, 96.215, 96.106, "EU", "Western Europe", "NL", "Amsterdam"], [107.536, 107.55, 107.544, "EU", "Southern Europe", "ES", "Madrid"], [12.429, 13.249, 12.754, "NA", "Northern America", "US", "Kansas City"], [100.283, 100.377, 100.34, "EU", "Western Europe", "DE", "Frankfurt"], [128.32, 128.481, 128.412, "EU", "Northern Europe", "EE", "Tallinn"], [42.343, 42.387, 42.368, "NA", "Northern America", "CA", "Winnipeg"], [145.092, 145.245, 145.168, "AS", "Eastern Europe", "RU", "Moscow"], [121.973, 122.281, 122.098, "EU", "Northern Europe", "NO", "Oslo"], [143.357, 143.438, 143.385, "AS", "Western Asia", "TR", "Istanbul"], [105.053, 105.185, 105.109, "EU", "Western Europe", "DE", "Munich"], [235.708, 235.785, 235.742, "AS", "Eastern Asia", "CN", "Beijing"], [147.103, 147.16, 147.14, "EU", "Northern Europe", "LV", "Riga"], [16.766, 16.879, 16.82, "NA", "Northern America", "CA", "Montreal"], [144.59, 144.724, 144.654, "AS", "Eastern Asia", "JP", "Tokyo"], [83.587, 83.639, 83.618, "EU", "Northern Europe", "GB", "London"], [100.851, 100.963, 100.893, "EU", "Western Europe", "DE", "Frankfurt"], [117.803, 117.865, 117.834, "EU", "Eastern Europe", "CZ", "Prague"], [109.951, 133.649, 124.26, "EU", "Northern Europe", "GB", "London"], [214.698, 214.999, 214.869, "AS", "Central Asia", "KZ", "Almaty"], [97.923, 98.032, 97.977, "EU", "Western Europe", "NL", "Zwolle"], [42.17, 42.262, 42.201, "NA", "Northern America", "US", "Los Angeles"], [52.352, 52.448, 52.389, "NA", "Northern America", "US", "Spokane"], [123.012, 123.163, 123.074, "EU", "Southern Europe", "RS", "Belgrade"], [294.326, 294.447, 294.372, "AS", "Eastern Europe", "RU", "Moscow"], [130.559, 131.047, 130.81, "SA", "South America", "BR", "Sao Paulo"]], "geo": "geo", "hovertemplate": "<b>%{hovertext}</b><br><br>Latitude=%{lat}<br>Longitude=%{lon}<br>Min=%{customdata[0]}<br>Max=%{customdata[1]}<br>Avg=%{marker.color}<br>Continent=%{customdata[3]}<br>Region=%{customdata[4]}<br>Country=%{customdata[5]}<br>City=%{customdata[6]}<extra></extra>", "hovertext": ["PL", "ES", "DE", "US", "RU", "DE", "RU", "BG", "US", "US", "BR", "HK", "ES", "JP", "SG", "US", "US", "BR", "BH", "SG", "GB", "CN", "US", "US", "PT", "PL", "BR", "US", "US", "BR", "IL", "DE", "AR", "GE", "DE", "JP", "BR", "GB", "GB", "BE", "US", "BG", "BR", "US", "IN", "US", "DE", "RU", "EE", "ID", "SE", "IN", "NL", "GB", "DE", "NL", "AU", "PL", "HK", "GB", "TR", "RU", "IL", "US", "NL", "US", "US", "CY", "US", "IT", "JP", "DE", "GB", "DE", "TR", "NL", "ES", "US", "DE", "EE", "CA", "RU", "NO", "TR", "DE", "CN", "LV", "CA", "JP", "GB", "DE", "CZ", "GB", "KZ", "NL", "US", "US", "RS", "RU", "BR"], "lat": [52.2298, 40.4165, 50.4779, 34.0522, 59.9386, 53.5507, 55.0415, 42.6975, 27.9694, 37.3394, -23.5475, 22.2783, 40.4133, 35.617, 1.2897, 41.8672, 47.6759, -23.6939, 26.215373, 1.2897, 51.5085, 29.56026, 32.7831, 36.37285, 41.358, 50.0614, -23.5475, 33.7865, 32.7781, -28.7839, 32.0809, 50.4779, -31.4135, 43.007, 50.1025, 35.8089, -8.0539, 51.5085, 51.4037, 50.85085, 37.3924, 42.6975, -27.35917, 32.7831, 13.0986, 41.2795, 50.1924, 55.7522, 59.437, -6.2146, 59.25, 19.0931, 52.555, 51.5085, 50.1155, 52.6848, -33.8678, 52.2298, 22.28552, 51.5085, 41.0309, 55.154, 32.0809, 37.3394, 52.374, 30.2672, 40.6366, 34.6841, 33.9631, 45.3161, 34.6938, 50.4779, 50.8516, 50.1155, 38.41273, 52.505, 40.5316, 39.1661, 50.1112, 59.437, 49.8844, 55.7522, 59.9127, 41.0138, 48.1374, 39.9075, 56.946, 45.50884, 35.609, 51.5085, 50.1257, 50.088, 51.5085, 43.25, 52.6958, 34.0522, 47.6759, 44.804, 55.7522, -23.5475], "legendgroup": "", "lon": [21.0118, -3.7026, 12.3713, -118.2437, 30.3141, 9.993, 82.9346, 23.3241, -80.6473, -121.895, -46.6361, 114.1747, -3.6939, 139.7486, 103.8501, -87.6259, -117.1182, -46.565, 50.583262, 103.8501, -0.1257, 106.55771, -96.8067, -94.20882, -8.2327, 19.9366, -46.6361, -84.4454, -96.8054, -51.61, 34.7806, 12.3713, -64.181, 40.9893, 8.6299, 140.1185, -34.8811, -0.1257, -1.2605, 4.34878, -121.9623, 23.3241, -53.39444, -96.8067, 77.6612, -72.5984, 8.6753, 37.6156, 24.7535, 106.8451, 18.1167, 72.9049, 5.9111, -0.1257, 8.6842, 6.1811, 151.2073, 21.0118, 114.15769, -0.1257, 28.9894, 61.4291, 34.7806, -121.895, 4.8897, -97.7431, -75.4405, 33.0379, -118.3941, 9.2036, 135.5011, 12.3713, -1.1793, 8.6842, 27.13838, 4.9597, -3.6475, -94.464, 8.6831, 24.7535, -97.147, 37.6156, 10.7461, 28.9497, 11.5755, 116.3972, 24.1059, -73.58781, 139.7302, -0.1257, 8.6414, 14.4208, -0.1257, 76.9167, 6.1944, -118.2437, -117.1182, 20.4651, 37.6156, -46.6361], "marker": {"color": [110.133, 102.618, 102.108, 48.718, 142.48, 109.705, 187.931, 138.388, 55.801, 47.057, 132.629, 195.409, 110.376, 152.113, 225.127, 0.51, 52.463, 144.122, 191.811, 229.503, 87.767, 231.473, 23.384, 59.628, 116.003, 135.693, 133.95, 15.827, 21.505, 155.295, 147.807, 103.879, 172.846, 168.105, 99.674, 142.839, 112.378, 98.069, 93.751, 94.836, 53.993, 123.425, 153.745, 21.532, 267.292, 37.37, 95.422, 145.59, 127.13, 230.712, 123.404, 276.451, 104.49, 81.992, 101.167, 100.179, 198.788, 124.759, 191.79, 87.691, 136.525, 156.394, 146.622, 70.365, 94.298, 26.425, 22.397, 160.867, 49.703, 110.8, 150.455, 103.477, 86.134, 98.879, 136.389, 96.106, 107.544, 12.754, 100.34, 128.412, 42.368, 145.168, 122.098, 143.385, 105.109, 235.742, 147.14, 16.82, 144.654, 83.618, 100.893, 117.834, 124.26, 214.869, 97.977, 42.201, 52.389, 123.074, 294.372, 130.81], "coloraxis": "coloraxis", "symbol": "circle", "line": {"color": "#FFF", "width": 1}, "opacity": 0.7, "size": 13}, "mode": "markers", "name": "", "showlegend": false, "type": "scattergeo"}, {"lat": [39.0395], "lon": [-77.4918], "marker": {"color": "gold", "line": {"color": "#FFF", "width": 1}, "size": 15, "symbol": "star"}, "showlegend": false, "text": "Server Location: Virginia, USA", "type": "scattergeo"}]} layout={{"width": "1200", "height": "800", "color_continuous_scale": "['#65DD91', '#F3CF64', '#DA3B3A']"}} useResizeHandler={true}/>
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
