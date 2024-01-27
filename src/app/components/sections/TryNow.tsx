import React from "react"

export default function TryNow() {
    return (
        <div className="container mx-auto mb-20">
            <p className="text-zinc-800 text-4xl font-semibold tracking-tighter text-center">
                Try now
            </p>
            <div className="flex mx-20 mt-14 border border-gray-200 rounded-md shadow-sm">
                <div className="flex-1 p-6 border-r-2 flex justify-between">
                    <div className="flex items-center">
                        <p className="text-gray-700 text-xl mr-2 font-semibold tracking-tighter text-center">
                            @naval
                        </p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-twitter"
                            color="#3f3f46"
                        >
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-plus"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                    </svg>
                </div>
                <div className="flex-[2] p-6">
                    <p className="text-gray-700 text-xl mr-2 font-normal tracking-tighter">
                        Chat here
                    </p>
                </div>
            </div>
        </div>
    )
}
