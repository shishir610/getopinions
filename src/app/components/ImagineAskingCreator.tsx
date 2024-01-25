import React, { Fragment } from "react"
import imagine from "../data/imagine.json"
import "./ImagineAskingCreator.css"

export default function ImagineAskingCreator() {
    return (
        <Fragment>
            <div className="flex justify-center">
                <p className="text-zinc-800 text-4xl font-semibold tracking-tighter text-center">
                    Imagine asking
                </p>
                <div className="rotating-text text-zinc-800 ml-2 text-4xl font-semibold tracking-tighter">
                    {imagine.map((im) => {
                        return <span>{im.creator}</span>
                    })}
                    <span>{imagine[0].creator}</span>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="rotating-text text-zinc-800 ml-2 text-4xl -mt-8 font-semibold tracking-tighter text-center">
                    {imagine.map((im) => {
                        return <span>"{im.question}"</span>
                    })}
                    <span>"{imagine[0].question}"</span>
                </div>
            </div>
        </Fragment>
    )
}
