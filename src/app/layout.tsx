import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GlobalContextProvider } from "./Context/store"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "GetOpinions",
    description: "Get opinions that matter",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    )
}
