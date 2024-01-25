import React from "react"

export default function MessageButton() {
    return (
        <button className="mt-12 w-fit bg-brand-blue hover:bg-blue-600 text-white font-medium text-lg p-3 px-6 rounded-md shadow">
            <div className="flex items-center">
                <span>Ask something now</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-message-circle ml-2"
                >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
            </div>
        </button>
    )
}
