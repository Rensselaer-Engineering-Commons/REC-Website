import { Link } from "react-router-dom";

import Logo from "../assets/logo-white.png";

const Navigation = () => {
    return (
        <nav className="shadow-xl">
            <div className="flex p-4 gap-24 container mx-auto flex-col lg:flex-row">
                <figure className="max-w-[120px] min-w-[75px]  flex-3">
                    <img className="rounded-md" src={Logo} alt="" />
                </figure>
                <ul className="flex-1 list-style-none flex gap-10 my-auto flex-col lg:flex-row">
                    <Link to="/">
                        <li className="md:px-12 md:py-3 px-5 py-2  hover:bg-stone-200 rounded-md font-medium duration-300">
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="px-12 py-3 hover:bg-stone-200 rounded-md font-medium duration-300">
                            About
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="px-12 py-3 hover:bg-stone-200 rounded-md font-medium duration-300">
                            Contact
                        </li>
                    </Link>
                    <Link to="/projects">
                        <li className="px-12 py-3 hover:bg-stone-200 rounded-md font-medium duration-300">
                            Projects
                        </li>
                    </Link>
                    <Link to="/login" className="md:ml-0 lg:ml-auto">
                        <li className="px-12 py-3 hover:bg-stone-200 rounded-md font-medium duration-300 bg-[#3647a6] text-white">
                            Login
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation