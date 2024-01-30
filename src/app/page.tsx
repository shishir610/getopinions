import Navigation from "./components/sections/Navigation"
import ImagineAskingCreator from "./components/sections/ImagineAskingCreator"
import Hero from "./components/sections/Hero"
import MainContent from "./components/sections/MainContent"
import Supports from "./components/sections/Supports"

export default function Home() {
    return (
        <div className="flex flex-col justify-center">
            <div className="pb-24">
                <Navigation />
                <Hero />
                <ImagineAskingCreator />
                <Supports />
            </div>
            <MainContent />
        </div>
    )
}
