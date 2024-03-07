import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.form_input_state": {"cities": [], "form_data": {}, "numbers": ["1", "2", "3"], "results": ""}, "state.textfield_controlled": {"address": "149.88.25.130", "location": "world", "packetcount": "4", "testcount": "5"}}

export const defaultColorMode = "None"
export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
  state__form_input_state: createContext(null),
  state__textfield_controlled: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const state_name = "state"
export const onLoadInternalEvent = () => [
    Event('state.update_vars_internal', {vars: hydrateClientStorage(clientStorage)}),
    Event('state.on_load_internal')
]

export const initialEvents = () => [
    Event('state.hydrate'),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
  const [state__form_input_state, dispatch_state__form_input_state] = useReducer(applyDelta, initialState["state.form_input_state"])
  const [state__textfield_controlled, dispatch_state__textfield_controlled] = useReducer(applyDelta, initialState["state.textfield_controlled"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
      "state.form_input_state": dispatch_state__form_input_state,
      "state.textfield_controlled": dispatch_state__textfield_controlled,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
    <StateContexts.state__form_input_state.Provider value={ state__form_input_state }>
    <StateContexts.state__textfield_controlled.Provider value={ state__textfield_controlled }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
    </StateContexts.state__textfield_controlled.Provider>
    </StateContexts.state__form_input_state.Provider>
    </StateContexts.state.Provider>
  )
}