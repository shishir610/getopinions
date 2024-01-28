import React from "react"
import EmailForm from "../elements/EmailForm"

export default function Hero() {
    return (
        <div className="py-16 w-100 flex flex-col items-center">
            <p className="text-zinc-800 text-7xl font-semibold tracking-tighter text-center">
                Get real <span className="gradient-text">opinions</span> from{" "}
                <br />
                <span className="gradient-text">creators</span> you can trust
            </p>
            <p className="text-zinc-700 text-xl mt-8 font-light tracking-tighter text-center">
                Ever wanted a very specific opinion from that Tweep?
            </p>
            <div className="mt-12">
                <EmailForm />
            </div>
        </div>
    )
}
