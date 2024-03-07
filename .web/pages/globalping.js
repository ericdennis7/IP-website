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

export function Root_48364b956041341eb62b48da1c916616 () {
  const [addEvents, connectError] = useContext(EventLoopContext);
  
    const handleSubmit_2feda58b96cba0d4da1279470ea8d98e = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("state.form_input_state.handle_submit", {form_data:form_data})])

        if (false) {
            $form.reset()
        }
    })
    


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

export function Debounceinput_d78dd21adca43dc71f2faf0b49183554 () {
  const state__textfield_controlled = useContext(StateContexts.state__textfield_controlled)
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_d89c1939577139e043542b883c5d7e41 = useCallback((_e0) => addEvents([Event("state.textfield_controlled.set_testcount", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <DebounceInput debounceTimeout={300} element={RadixThemesTextField.Input} maxLength={`1`} name={`test_count`} onChange={on_change_d89c1939577139e043542b883c5d7e41} value={state__textfield_controlled.testcount}/>
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
  <Plot data={[{"customdata": [[103.148, 103.343, 103.22, "EU", "Western Europe", "DE", "Ansbach"], [132.834, 133.211, 132.983, "AS", "Eastern Europe", "RU", "Moscow"], [13.536, 13.558, 13.548, "NA", "Northern America", "CA", "Toronto"], [60.493, 60.855, 60.658, "NA", "Northern America", "US", "Los Angeles"], [150.205, 150.495, 150.382, "AS", "Eastern Asia", "JP", "Osaka"], [99.068, 99.152, 99.097, "EU", "Western Europe", "DE", "Frankfurt"], [1.814, 2.121, 1.955, "NA", "Northern America", "US", "New York"], [124.528, 125.166, 124.788, "EU", "Southern Europe", "IT", "Palermo"], [193.047, 193.553, 193.221, "AS", "Eastern Asia", "JP", "Osaka"], [47.725, 47.779, 47.751, "NA", "Northern America", "US", "San Jose"], [36.67, 43.186, 39.699, "NA", "Northern America", "US", "Madison"], [126.854, 126.916, 126.89, "EU", "Eastern Europe", "RO", "Bucharest"], [95.248, 95.595, 95.383, "EU", "Western Europe", "DE", "Frankfurt"], [103.19, 103.413, 103.267, "EU", "Western Europe", "DE", "Falkenstein"], [97.96, 98.087, 98.007, "EU", "Western Europe", "NL", "Doetinchem"], [10.747, 10.892, 10.823, "NA", "Northern America", "CA", "Toronto"], [229.623, 231.125, 230.127, "AS", "South-eastern Asia", "ID", "Jakarta"], [100.742, 100.869, 100.82, "EU", "Western Europe", "DE", "Frankfurt"], [102.908, 103.134, 103.022, "EU", "Western Europe", "DE", "Frankfurt"], [259.449, 260.108, 259.718, "AF", "Eastern Africa", "KE", "Nairobi"], [30.48, 31.065, 30.706, "NA", "Northern America", "US", "Miami"], [227.937, 228.049, 227.979, "AS", "Eastern Asia", "CN", "Shanghai"], [142.197, 143.246, 142.554, "SA", "South America", "BR", "Rio de Janeiro"], [0.515, 0.556, 0.538, "NA", "Northern America", "US", "Chicago"], [233.495, 233.596, 233.542, "AS", "South-eastern Asia", "MY", "Kuala Lumpur"], [98.951, 99.117, 99.06, "EU", "Western Europe", "DE", "Darmstadt"], [270.396, 270.74, 270.566, "OC", "Australia and New Zealand", "AU", "Melbourne"], [161.597, 161.797, 161.708, "AS", "Eastern Europe", "RU", "Moscow"], [136.687, 136.783, 136.724, "AS", "Eastern Europe", "RU", "Moscow"], [98.247, 98.329, 98.286, "EU", "Western Europe", "NL", "Amsterdam"], [240.852, 240.889, 240.872, "AF", "Southern Africa", "ZA", "Johannesburg"], [127.173, 127.204, 127.19, "SA", "South America", "CL", "Santiago"], [103.189, 104.397, 103.601, "EU", "Western Europe", "DE", "Falkenstein"], [19.173, 19.3, 19.237, "NA", "Northern America", "US", "New York"], [21.621, 22.419, 21.907, "NA", "Northern America", "US", "Omaha"], [91.596, 91.709, 91.641, "EU", "Northern Europe", "GB", "Manchester"], [249.347, 249.866, 249.52, "OC", "Australia and New Zealand", "AU", "Melbourne"], [21.524, 22.659, 21.905, "NA", "Northern America", "CA", "Montreal"], [192.302, 192.443, 192.354, "NA", "Northern America", "US", "Sacramento"], [93.955, 93.99, 93.967, "EU", "Western Europe", "FR", "Paris"], [103.174, 103.44, 103.273, "EU", "Western Europe", "DE", "Falkenstein"], [92.638, 92.772, 92.707, "EU", "Western Europe", "NL", "Ede"], [56.94, 68.682, 60.86, "NA", "Northern America", "US", "Los Angeles"], [20.359, 20.395, 20.381, "NA", "Northern America", "US", "Dallas"], [174.181, 175.212, 174.528, "AS", "Eastern Asia", "TW", "Taichung"], [242.201, 242.274, 242.23, "AS", "Southern Asia", "IN", "Mumbai"], [91.248, 91.419, 91.342, "EU", "Western Europe", "FR", "Paris"], [101.892, 102.245, 102.045, "EU", "Western Europe", "DE", "Falkenstein"], [102.439, 102.606, 102.514, "EU", "Western Europe", "NL", "Amsterdam"], [152.316, 152.501, 152.413, "AS", "Eastern Europe", "RU", "Moscow"], [97.739, 97.796, 97.761, "EU", "Western Europe", "DE", "Frankfurt"], [131.588, 131.691, 131.653, "EU", "Eastern Europe", "MD", "Chisinau"], [117.79, 117.837, 117.807, "EU", "Eastern Europe", "CZ", "Prague"], [120.052, 120.079, 120.063, "EU", "Southern Europe", "RS", "Belgrade"], [145.529, 148.093, 146.834, "SA", "South America", "BR", "Sao Paulo"], [91.812, 92.026, 91.904, "EU", "Northern Europe", "GB", "London"], [118.482, 118.719, 118.57, "EU", "Northern Europe", "FI", "Helsinki"], [160.649, 164.65, 162.001, "EU", "Western Asia", "CY", "Limassol"], [11.984, 12.974, 12.346, "NA", "Northern America", "CA", "Toronto"], [121.372, 121.457, 121.421, "EU", "Western Europe", "NL", "Amsterdam"], [20.503, 20.534, 20.517, "NA", "Northern America", "US", "Ashburn"], [133.398, 133.786, 133.532, "EU", "Eastern Europe", "RO", "Iasi"], [106.481, 106.674, 106.567, "EU", "Western Europe", "NL", "Amsterdam"], [87.473, 87.565, 87.515, "EU", "Northern Europe", "GB", "London"], [99.431, 99.731, 99.573, "EU", "Western Europe", "DE", "Frankfurt"], [17.729, 18.754, 18.1, "NA", "Northern America", "US", "Secaucus"], [134.866, 134.903, 134.886, "AS", "Eastern Europe", "RU", "Moscow"], [121.794, 130.882, 124.846, "EU", "Northern Europe", "DK", "Copenhagen"], [116.646, 117.524, 116.965, "EU", "Southern Europe", "IT", "Monza"], [150.482, 150.745, 150.646, "AS", "Eastern Europe", "RU", "Moscow"], [94.268, 94.3, 94.279, "EU", "Western Europe", "FR", "Paris"], [185.819, 185.852, 185.833, "OC", "Australia and New Zealand", "AU", "Brisbane"], [171.683, 171.949, 171.78, "OC", "Australia and New Zealand", "AU", "Sydney"], [96.255, 96.35, 96.306, "EU", "Western Europe", "NL", "Amsterdam"], [56.317, 56.431, 56.37, "NA", "Northern America", "US", "Los Angeles"], [70.998, 71.149, 71.076, "NA", "Northern America", "CA", "Victoria"], [92.623, 92.681, 92.645, "EU", "Western Europe", "NL", "Amsterdam"], [155.234, 155.317, 155.272, "AS", "Western Asia", "GE", "Sokhumi"], [154.149, 154.159, 154.154, "AS", "Eastern Asia", "JP", "Osaka"], [18.27, 18.642, 18.443, "NA", "Northern America", "US", "New York"], [127.427, 127.925, 127.65, "EU", "Northern Europe", "NO", "Hamar"], [110.791, 110.866, 110.82, "EU", "Southern Europe", "IT", "Milan"], [87.436, 92.213, 89.053, "EU", "Northern Europe", "GB", "London"], [119.99, 120.096, 120.037, "EU", "Southern Europe", "RS", "Belgrade"], [193.714, 194.438, 193.964, "OC", "Australia and New Zealand", "AU", "Sydney"], [103.286, 103.32, 103.303, "EU", "Western Europe", "DE", "Falkenstein"], [125.532, 125.792, 125.689, "EU", "Northern Europe", "DK", "Roskilde"], [147.019, 147.157, 147.07, "AS", "Western Asia", "IL", "Tel Aviv"], [190.404, 190.443, 190.426, "OC", "Australia and New Zealand", "AU", "Sydney"], [46.113, 46.179, 46.147, "NA", "Central America", "MX", "Queretaro"], [56.646, 57.365, 56.909, "NA", "Northern America", "US", "Los Angeles"], [119.574, 127.766, 123.802, "EU", "Western Europe", "DE", "Hamburg"], [139.715, 139.735, 139.723, "EU", "Northern Europe", "FI", "Helsinki"], [150.888, 151.262, 151.115, "SA", "South America", "BR", "Sao Paulo"], [109.721, 109.758, 109.743, "EU", "Eastern Europe", "PL", "Warsaw"], [54.992, 55.024, 55.007, "NA", "Northern America", "US", "San Jose"], [141.731, 142.853, 142.193, "SA", "South America", "BR", "Campos dos Goytacazes"], [118.551, 122.072, 119.774, "EU", "Northern Europe", "FI", "Helsinki"], [113.157, 113.193, 113.171, "EU", "Eastern Europe", "PL", "Warsaw"], [18.477, 19.108, 18.689, "NA", "Northern America", "US", "Washington"]], "geo": "geo", "hovertemplate": "<b>%{hovertext}</b><br><br>Latitude=%{lat}<br>Longitude=%{lon}<br>Min=%{customdata[0]}<br>Max=%{customdata[1]}<br>Avg=%{marker.color}<br>Continent=%{customdata[3]}<br>Region=%{customdata[4]}<br>Country=%{customdata[5]}<br>City=%{customdata[6]}<extra></extra>", "hovertext": ["DE", "RU", "CA", "US", "JP", "DE", "US", "IT", "JP", "US", "US", "RO", "DE", "DE", "NL", "CA", "ID", "DE", "DE", "KE", "US", "CN", "BR", "US", "MY", "DE", "AU", "RU", "RU", "NL", "ZA", "CL", "DE", "US", "US", "GB", "AU", "CA", "US", "FR", "DE", "NL", "US", "US", "TW", "IN", "FR", "DE", "NL", "RU", "DE", "MD", "CZ", "RS", "BR", "GB", "FI", "CY", "CA", "NL", "US", "RO", "NL", "GB", "DE", "US", "RU", "DK", "IT", "RU", "FR", "AU", "AU", "NL", "US", "CA", "NL", "GE", "JP", "US", "NO", "IT", "GB", "RS", "AU", "DE", "DK", "IL", "AU", "MX", "US", "DE", "FI", "BR", "PL", "US", "BR", "FI", "PL", "US"], "lat": [49.1166, 55.7522, 43.6513, 34.052571, 34.8436, 50.1155, 40.65468, 38.1166, 34.6938, 37.2329, 41.2795, 44.4323, 50.1155, 50.4779, 51.965, 43.7064, -6.2146, 50.1112, 50.02, -1.2833, 25.7743, 31.2222, -22.9064, 41.85, 3.1073, 49.8875, -37.8374, 55.7522, 55.7522, 52.374, -26.1222, -33.4569, 50.4779, 40.8257, 41.2619, 53.5, -37.814, 45.5005, 38.58157, 48.9167, 50.4779, 52.0333, 34.0522, 32.8152, 24.1469, 19.0728, 48.8534, 50.4779, 52.374, 55.7522, 50.1025, 47.0056, 50.088, 44.804, -23.5475, 51.5085, 60.1695, 34.6841, 43.7064, 52.3808, 39.0437, 47.1667, 52.374, 51.5085, 50.1112, 40.7895, 55.7522, 55.6759, 45.706, 55.7522, 48.782, -27.4679, -33.8678, 52.374, 34.0522, 48.432976, 52.374, 43.007, 34.6809, 40.7143, 60.7945, 45.3161, 51.5085, 44.804, -33.9092, 50.4779, 55.7175, 32.0871, -33.9092, 20.5618, 34.0294, 53.5507, 60.1695, -23.5475, 52.2298, 37.3394, -21.7523, 60.1695, 52.2298, 38.8951], "legendgroup": "", "lon": [10.7597, 37.6156, -79.3756, -118.243907, 135.5084, 8.6842, -74.005722, 13.3636, 135.5011, -121.7875, -72.5984, 26.1063, 8.6842, 12.3713, 6.2889, -79.3986, 106.8451, 8.6831, 8.6961, 36.8167, -80.1937, 121.4581, -43.1822, -87.65, 101.6067, 8.6446, 144.9282, 37.6156, 37.6156, 4.8897, 28.2056, -70.6483, 12.3713, -73.6982, -95.8608, -2.35, 144.9633, -73.5684, -121.4944, 2.3833, 12.3713, 5.6583, -118.2437, -96.8703, 120.6839, 72.8826, 2.3488, 12.3713, 4.8897, 37.6156, 8.6299, 28.8575, 14.4208, 20.4651, -46.6361, -0.1257, 24.9354, 33.0379, -79.3986, 4.6368, -77.4875, 27.6, 4.8897, -0.1257, 8.6831, -74.0565, 37.6156, 12.5655, 9.5905, 37.6156, 2.1939, 153.0281, 151.2073, 4.8897, -118.2437, -123.369703, 4.8897, 40.9893, 135.5258, -74.006, 11.068, 9.2036, -0.1257, 20.4651, 151.194, 12.3713, 11.7128, 34.8875, 151.194, -100.2452, -118.2871, 9.993, 24.9354, -46.6361, 21.0118, -121.895, -41.3304, 24.9354, 21.0118, -77.0364], "marker": {"color": [103.22, 132.983, 13.548, 60.658, 150.382, 99.097, 1.955, 124.788, 193.221, 47.751, 39.699, 126.89, 95.383, 103.267, 98.007, 10.823, 230.127, 100.82, 103.022, 259.718, 30.706, 227.979, 142.554, 0.538, 233.542, 99.06, 270.566, 161.708, 136.724, 98.286, 240.872, 127.19, 103.601, 19.237, 21.907, 91.641, 249.52, 21.905, 192.354, 93.967, 103.273, 92.707, 60.86, 20.381, 174.528, 242.23, 91.342, 102.045, 102.514, 152.413, 97.761, 131.653, 117.807, 120.063, 146.834, 91.904, 118.57, 162.001, 12.346, 121.421, 20.517, 133.532, 106.567, 87.515, 99.573, 18.1, 134.886, 124.846, 116.965, 150.646, 94.279, 185.833, 171.78, 96.306, 56.37, 71.076, 92.645, 155.272, 154.154, 18.443, 127.65, 110.82, 89.053, 120.037, 193.964, 103.303, 125.689, 147.07, 190.426, 46.147, 56.909, 123.802, 139.723, 151.115, 109.743, 55.007, 142.193, 119.774, 113.171, 18.689], "coloraxis": "coloraxis", "symbol": "circle", "line": {"color": "#FFF", "width": 1}, "opacity": 0.7, "size": 13}, "mode": "markers", "name": "", "showlegend": false, "type": "scattergeo"}, {"lat": [39.0395], "lon": [-77.4918], "marker": {"color": "gold", "line": {"color": "#FFF", "width": 1}, "size": 15, "symbol": "star"}, "showlegend": false, "text": "Server Location: Virginia, USA", "type": "scattergeo"}]} height={`1000px`} layout={{"width": "1200", "height": "800"}} useResizeHandler={true} width={`100%`}/>
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
