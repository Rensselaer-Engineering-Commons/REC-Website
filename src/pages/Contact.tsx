import { Title, MainSection, Information } from '../components/components.ts'

const Contact = () => {
    return (
        <div>
            <header className="h-48 min-h-[250px] relative flex flex-col justify-around align-middle">
                <div
                    className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px]"
                ></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">Contact Us</h1>
                </div>
            </header>
            <main className="flex flex-col">
                <div className="pt-52 py-44">
                    <MainSection>
                        <Title>Discord Community</Title>
                        <Information>

                            Join our vibrant Discord community to connect with like-minded individuals, 
                            share ideas, and collaborate on creative projects. Whether you're a seasoned 
                            creator or just starting out, everyone is welcome! <a className="text-blue-700" target="_blank"
                             href="https://discord.gg/TKBGYmZEQb">Click here</a> to join our Discord server.
                        </Information>
                    </MainSection>
                </div>
                <div className="py-52 bg-gray-100">
                    <MainSection>
                        <Title>
                                Location
                        </Title>
                        <Information>
                            Our physical headquarters are located at the <a  className="text-blue-700" target="_blank"
                             href="https://mercerxlab.rpi.edu/">Mercer XLab</a>, where creativity thrives 
                            and ideas come to life. Drop by for workshops, meetups, and events, or simply to hang
                             out with fellow members of our creative community. We'd love to see you there!

                            Have a question or need assistance? Feel free to reach out to us via Discord or visit 
                            us in person. We're here to help!
                        </Information>
                    </MainSection>
                </div>
            </main>
        </div>
    )
}

export default Contact