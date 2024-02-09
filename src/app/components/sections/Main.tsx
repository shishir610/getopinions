import React from "react"
import Navigation from "./Navigation"
import EmailForm from "../elements/EmailForm"
import imagine from "../../data/imagine.json"
import AskSomething from "./AskSomething"
import ReasonsCardArrangement from "../elements/ReasonsCardArrangement"

export default function Main() {
    return (
        <div className="flex flex-col justify-center">
            <div className="pb-24">
                <Navigation />
                <div className="py-16 w-100 flex flex-col items-center">
                    <p className="text-zinc-800 text-7xl font-semibold tracking-tighter text-center">
                        Get real <span className="gradient-text">opinions</span>{" "}
                        from <br />
                        <span className="gradient-text">creators</span> you can
                        trust
                    </p>
                    <p className="text-zinc-700 text-xl mt-8 font-light tracking-tighter text-center">
                        Ever wanted a very specific opinion from that Tweep?
                    </p>
                    <div className="mt-12">
                        <EmailForm />
                    </div>
                </div>
                <div className="justify-center">
                    <p className="text-zinc-600 text-2xl decoration-wavy underline font-semibold tracking-tighter text-center italic">
                        What if you could
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="rotating-text text-zinc-600 ml-2 mt-2 text-3xl flex items-center font-semibold tracking-tighter text-center">
                        {imagine.map((im) => {
                            return (
                                <span key={`ask-${im.creator}`}>
                                    Ask {im.creator}: "{im.question}"
                                </span>
                            )
                        })}
                        <span>
                            Ask {imagine[0].creator}: "{imagine[0].question}"
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <AskSomething bgColor="bg-gray-100/45" />
            </div>
            <div>
                <p className="text-zinc-700 text-4xl py-20 font-semibold tracking-tighter text-center">
                    Why not just Google it?
                </p>
                <ReasonsCardArrangement />
            </div>
        </div>
    )
}
