"use client"

import { createContext, useContext, useReducer } from "react"
import { Action, ActionTypes, IGlobalContext, State } from "./storeInterface"

// Reducer for global state

const initialState = {
    askSomething: localStorage.getItem("askSomething") || "",
    creatorName: localStorage.getItem("creatorName") || "Elon Musk",
}

const reducer = (state: State, action: Action): State => {
    const { type, payload } = action

    switch (type) {
        case ActionTypes.SET_ASK_SOMETHING:
            if (payload?.askSomething !== undefined) {
                // localStorage.setItem("askSomething", payload.askSomething)
                return {
                    ...state,
                    askSomething: payload.askSomething,
                }
            }
            return state

        case ActionTypes.SET_CREATOR:
            if (payload?.creatorName) {
                // localStorage.setItem("creatorName", payload.creatorName)
                return {
                    ...state,
                    creatorName: payload.creatorName,
                }
            }
            return state

        default:
            return state
    }
}

// Global context for global state

const GlobalContext = createContext<IGlobalContext>({
    state: initialState,
    dispatch: () => {},
})

export const GlobalContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext)
