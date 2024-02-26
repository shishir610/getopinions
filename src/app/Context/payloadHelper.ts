import { useGlobalContext } from "./store"
import { Payload } from "./storeInterface"

export const useAskSomethingHelper = (payload: Payload): string => {
    const { state } = useGlobalContext()
    return payload?.askSomething !== undefined
        ? payload.askSomething
        : state.askSomething
}

export const useCreatorNameHelper = (payload: Payload): string => {
    const { state } = useGlobalContext()
    return payload?.creatorName || state.creatorName
}
