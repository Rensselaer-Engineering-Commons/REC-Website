import { Outlet } from "react-router-dom";

import { Navigation, Footer } from "../components/components.ts";

const Root = () => {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div >
    )
}

export default Root