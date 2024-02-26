import { useGlobalContext } from "./store"
import { Payload } from "./storeInterface"

export const askSomethingHelper = (payload: Payload): string => {
    const { state } = useGlobalContext()
    return payload?.askSomething !== undefined
        ? payload.askSomething
        : state.askSomething
}

export const creatorNameHelper = (payload: Payload): string => {
    const { state } = useGlobalContext()
    return payload?.creatorName || state.creatorName
}
