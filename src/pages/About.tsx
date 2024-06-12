import { Title, MainSection, Information } from '../components/components.ts'

const About = () => {
    return (
        <div>
            <header className="h-48 min-h-[250px] relative flex flex-col justify-around align-middle">
                <div
                    className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"

                ></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">About Us</h1>
                </div>
            </header>
            <section className="mb-8">
                    <div className="py-8 sm:py-16 md:py-32 lg:py-52 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold mb-4 text-center">Who are we?</h2>
                        <p className="text-center max-w-2xl">
                        The Rensselaer Engineering Commons is a community of students, faculty, and staff dedicated to
                            creating a welcoming and inclusive environment for all. We believe that diversity and inclusion
                            are essential to the success of our community and our mission. We are committed to fostering a
                            culture of respect, empathy, and understanding, and to providing resources and support to help
                            all members of our community thrive.
                        </p>
                    </div>
                </section>
        </div>
    )
}

export default About