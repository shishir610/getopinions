import React from "react"
import btg from "../../data/betterThanGoogle.json"
import ReasonCard from "./ReasonCard"

export default function ReasonsCardArrangement() {
    return (
        <div className="container mx-auto mb-20">
            <div className="flex">
                {btg.map((reason) => (
                    <ReasonCard
                        key={reason.heading}
                        heading={reason.heading}
                        subHeading={reason.subHeading}
                    />
                ))}
            </div>
        </div>
    )
}
