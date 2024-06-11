import { Title, MainSection, Information } from '../components/components.ts'

const About = () => {
    return (
        <div>
            <header className="h-48 min-h-[250px] relative flex flex-col justify-around align-middle">
                <div
                    className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px]"
                ></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">About Us</h1>
                </div>
            </header>
            <main className="flex flex-col">
                <div className="py-52">
                    <MainSection>
                        <Title>Who are we?</Title>
                        <Information>
                            The Rensselaer Engineering Commons is a community of students, faculty, and staff dedicated to
                            creating a welcoming and inclusive environment for all. We believe that diversity and inclusion
                            are essential to the success of our community and our mission. We are committed to fostering a
                            culture of respect, empathy, and understanding, and to providing resources and support to help
                            all members of our community thrive.
                        </Information>
                    </MainSection>
                </div>
            </main>
        </div>
    )
}

export default About