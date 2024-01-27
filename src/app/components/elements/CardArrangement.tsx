import React from "react"
import btg from "../../data/betterThanGoogle.json"
import Card from "./Card"

export default function CardArrangement() {
    return (
        <div className="container mx-auto mb-20">
            <div className="flex">
                {btg.map((reason) => (
                    <Card
                        heading={reason.heading}
                        subHeading={reason.subHeading}
                    />
                ))}
            </div>
        </div>
    )
}
