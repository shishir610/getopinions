import React from "react"

interface Props {
    heading: string
    subHeading: string
}

export default function ReasonCard({ heading, subHeading }: Props) {
    return (
        <a
            href="#"
            className="block flex-1 mx-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 shadow-xl"
        >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">
                {heading}
            </h5>
            <p className="font-normal text-gray-500">{subHeading}</p>
        </a>
    )
}
