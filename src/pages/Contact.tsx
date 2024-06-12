import { Title, MainSection, Information } from '../components/components.ts'

const Contact = () => {
    return (
        <div>
            <header className="h-48 min-h-[250px] relative flex flex-col justify-around align-middle px-16">
                <div
                    className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px]"
                ></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">Contact Us</h1>
                </div>
            </header>
            <main className="flex flex-col">
                <section className="mb-8">
                    <div className="py-8 sm:py-16 md:py-32 lg:py-52 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold mb-4 text-center">Discord Community</h2>
                        <p className="text-center max-w-2xl">
                            Join our vibrant Discord community to connect with like-minded individuals, 
                            share ideas, and collaborate on creative projects. Whether you're a seasoned 
                            creator or just starting out, everyone is welcome! <a className="text-blue-700" target="_blank"
                             href="https://discord.gg/TKBGYmZEQb">Click here</a> to join our Discord server.
                        </p>
                    </div>
                </section>
                <section className="mb-8">
                    <div className="py-8 sm:py-16 md:py-32 lg:py-52 bg-gray-100 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold mb-4 text-center">Location</h2>
                        <p className="text-center max-w-2xl">
                        Our physical headquarters are located at the <a  className="text-blue-700" target="_blank"
                             href="https://mercerxlab.rpi.edu/">Mercer XLab</a>, where creativity thrives 
                            and ideas come to life. Drop by for workshops, meetups, and events, or simply to hang
                             out with fellow members of our creative community. We'd love to see you there!

                            Have a question or need assistance? Feel free to reach out to us via Discord or visit 
                            us in person. We're here to help!
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Contact

/*Our physical headquarters are located at the <a  className="text-blue-700" target="_blank"
                             href="https://mercerxlab.rpi.edu/">Mercer XLab</a>, where creativity thrives 
                            and ideas come to life. Drop by for workshops, meetups, and events, or simply to hang
                             out with fellow members of our creative community. We'd love to see you there!

                            Have a question or need assistance? Feel free to reach out to us via Discord or visit 
                            us in person. We're here to help!*/