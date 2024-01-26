import React from "react"
import BetterThanGoogle from "./BetterThanGoogle"

export default function MainContent() {
    return (
        <div>
            <p className="text-zinc-800 text-5xl py-20 font-semibold tracking-tighter text-center">
                Why would I use this when I could
                <br />
                just Google or ChatGPT instead?
            </p>
            <BetterThanGoogle />
        </div>
    )
}
