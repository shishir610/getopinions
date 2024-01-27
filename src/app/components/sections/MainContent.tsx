import React from "react"
import CardArrangement from "../elements/CardArrangement"
import TryNow from "./TryNow"

export default function MainContent() {
    return (
        <div>
            <p className="text-zinc-800 text-4xl py-20 font-semibold tracking-tighter text-center">
                Why do I care about what they said?
            </p>
            <CardArrangement />
            <TryNow />
        </div>
    )
}
