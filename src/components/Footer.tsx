import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black text-white py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
            <div className="container mx-auto">
                <div className="my-10">
                    <h1 className="text-3xl font-bold">Rensselaer Engineering Commons</h1>
                    <div className="mt-10 flex lg:gap-52 gap-10 sm:flex-col md:flex-row flex-row">
                        <div>
                            <h3 className="text-xl">Links</h3>
                            <div className="flex flex-col mt-5 gap-4">
                                <Link to="/" aria-label="Home">
                                    Home
                                </Link>
                                <Link to="/about" aria-label="About">
                                    About
                                </Link>
                                <Link to="/contact" aria-label="Contact">
                                    Contact
                                </Link>
                                <Link to="/projects" aria-label="Projects">
                                    Projects
                                </Link>
                                <Link to="/login" aria-label="Login">
                                    Login
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl">Contact</h3>
                            <div className="flex flex-col mt-5 gap-4">
                                <p>Email: info@rpi.edu</p>
                                <p>Phone: (123) 456-7890</p>
                                <p>Address: 110 8th St, Troy, NY 12180</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl">Social Media</h3>
                            <div className="flex flex-col mt-5 gap-4">
                                <a href="https://discord.gg/TKBGYmZEQb" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                                    <figure className="max-w-32">
                                        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0b5493894cf60b300587_full_logo_white_RGB.svg" alt="Discord Logo" />
                                    </figure>
                                </a>
                            </div>
                        </div>
                        <div className="md:ml-auto mt-auto">
                            <a href="https://github.com/Rensselaer-Engineering-Commons/REC-Website" className="underline" aria-label="GitHub Repository">© REC 2024</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer