"use client"

import { createContext, useContext, useReducer } from "react"
import { Action, ActionTypes, IGlobalContext, State } from "./storeInterface"

// Reducer for global state

const initialState = {
    askSomething: "",
    creatorName: "Elon Musk",
}

const reducer = (state: State, action: Action): State => {
    const { type, payload } = action

    switch (type) {
        case ActionTypes.SET_ASK_SOMETHING:
            return {
                ...state,
                askSomething: payload?.askSomething || state.askSomething,
            }

        case ActionTypes.SET_CREATOR:
            return {
                ...state,
                creatorName: payload?.creatorName || state.creatorName,
            }

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
