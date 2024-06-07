import { Outlet } from "react-router-dom";

import { Navigation, Footer } from "../components/components.ts";

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex-1">
                <Outlet />
            </div>
            <div className="my-auto">
                <Footer />
            </div>
        </div>
    )
}

export default Root