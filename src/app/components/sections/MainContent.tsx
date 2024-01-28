import React from "react"
import CardArrangement from "../elements/CardArrangement"
import AskSomething from "./AskSomething"

export default function MainContent() {
    return (
        <div>
            <AskSomething />
            <p className="text-zinc-600 text-4xl py-20 font-semibold tracking-tighter text-center">
                Why not just Google it?
            </p>
            <CardArrangement />
        </div>
    )
}
