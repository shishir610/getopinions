export interface State {
    askSomething: string
    creatorName: string
}

export enum ActionTypes {
    "SET_ASK_SOMETHING",
    "SET_CREATOR",
}

export interface Payload {
    creatorName?: string
    askSomething?: string
}

export interface Action {
    type: ActionTypes
    payload: Payload
}

export interface IGlobalContext {
    state: State
    dispatch: React.Dispatch<Action>
}
