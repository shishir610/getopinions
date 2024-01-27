import React, { Fragment } from "react"
import imagine from "../../data/imagine.json"
import "./ImagineAskingCreator.css"

export default function ImagineAskingCreator() {
    return (
        <Fragment>
            <div className="justify-center">
                <p className="text-zinc-600 text-2xl decoration-wavy underline font-semibold tracking-tighter text-center italic">
                    What if you could
                </p>
            </div>
            <div className="flex justify-center">
                <div className="rotating-text text-zinc-600 ml-2 mt-2 text-3xl flex items-center font-semibold tracking-tighter text-center">
                    {imagine.map((im) => {
                        return (
                            <span>
                                Ask {im.creator}: "{im.question}"
                            </span>
                        )
                    })}
                    <span>
                        Ask {imagine[0].creator}: "{imagine[0].question}"
                    </span>
                </div>
            </div>
        </Fragment>
    )
}
