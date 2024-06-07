import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-black text-white py-10 px-0">
            <div className="container mx-auto">
                <div className="my-10">
                    <h1 className="text-3xl font-bold">Rensselaer Engineering Commons</h1>
                    <div className="mt-10 flex lg:gap-52 gap-10 sm:flex-col md:flex-row flex-row">
                        <div>
                            <h3 className="text-xl">Links</h3>
                            <div className="flex flex-col mt-5 gap-4">
                                <Link to="/">
                                    Home
                                </Link>
                                <Link to="/about">
                                    About
                                </Link>
                                <Link to="/contact">
                                    Contact
                                </Link>
                                <Link to="/projects">
                                    Projects
                                </Link>
                                <Link to="/login">
                                    Login
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl">Contact</h3>
                            <div className="flex flex-col mt-5 gap-4">
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl">Social Media</h3>
                            <div className="flex flex-col mt-5 gap-4">
                                <a href="https://discord.gg/TKBGYmZEQb" target="_blank">
                                    <figure className="max-w-32">
                                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg" alt="" />
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="md:ml-auto mt-auto">
                            <a href="https://github.com/Rensselaer-Engineering-Commons/REC-Website" className="underline">©REC 2024</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer