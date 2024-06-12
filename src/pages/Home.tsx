import { MainSection, Title, Information } from "../components/components.ts";
import Project from "../components/ProjectCard.tsx";
import React from 'react';

const projects = [
    {
        name: "Line Follower Robot",
        description: "Nulla pharetra diam sit amet nisl suscipit adipiscing. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Maecenas pharetra convallis posuere morbi. Viverra adipiscing at in tellus. Euismod lacinia at quis risus sed vulputate. Orci phasellus egestas tellus rutrum tellus. Venenatis urna cursus eget nunc. Pellentesque habitant morbi tristique senectus et netus. Dolor morbi non arcu risus quis varius quam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elementum nisi quis eleifend quam. Pellentesque habitant morbi tristique senectus et netus. Maecenas pharetra convallis posuere morbi leo urna.",
        link: "https://example.com",
        image: "https://www.sciencebuddies.org/CrPeYL-5kIqQRIUYTGRY1m_XRYw=/560x315/-/https/i.ytimg.com/vi/-cilOho6l3Q/maxresdefault.jpg",
        department: "ECSE",
        date: "06/07/24"
    },
    {
        name: "Rube Goldberg Machine",
        description: "Nulla pharetra diam sit amet nisl suscipit adipiscing. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Maecenas pharetra convallis posuere morbi. Viverra adipiscing at in tellus. Euismod lacinia at quis risus sed vulputate. Orci phasellus egestas tellus rutrum tellus. Venenatis urna cursus eget nunc. Pellentesque habitant morbi tristique senectus et netus. Dolor morbi non arcu risus quis varius quam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elementum nisi quis eleifend quam. Pellentesque habitant morbi tristique senectus et netus. Maecenas pharetra convallis posuere morbi leo urna.",
        link: "https://example.com",
        image: "https://scoutlife.org/wp-content/uploads/2018/04/rubegoldberg.jpg",
        department: "MANE",
        date: "06/07/24"
    },
    {
        name: "Giant Water Rocket",
        description: "Nulla pharetra diam sit amet nisl suscipit adipiscing. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Maecenas pharetra convallis posuere morbi. Viverra adipiscing at in tellus. Euismod lacinia at quis risus sed vulputate. Orci phasellus egestas tellus rutrum tellus. Venenatis urna cursus eget nunc. Pellentesque habitant morbi tristique senectus et netus. Dolor morbi non arcu risus quis varius quam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elementum nisi quis eleifend quam. Pellentesque habitant morbi tristique senectus et netus. Maecenas pharetra convallis posuere morbi leo urna.",
        link: "https://example.com",
        image: "https://scoutlife.org/wp-content/uploads/2018/04/rubegoldberg.jpg",
        department: "MANE",
        date: "06/07/24"
    }
];

const Home = () => {
    return (
        <div className="container mx-auto ">
            
            <header className="h-48 min-h-[250px] relative flex flex-col justify-around ">
                <div
                    className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px]"
                ></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">Rensselaer Engineering Commons</h1>
                </div>
            </header>

                <section className="mb-8">
                    <div className="py-8 sm:py-16 md:py-32 lg:py-52 flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
                        <p className="text-center max-w-2xl">
                            Our mission is to inspire creativity through the power of simplicity.
                            By embracing minimalist design, user-centric innovation, and a collaborative DIY spirit,
                            we aim to create cool stuff that not only delights but also solves real-world problems.
                            We believe in the transformative power of iterative improvement, cross-disciplinary inspiration,
                            and sustainable solutions. Our mission is to embrace imperfection, foster collaboration,
                            and make a positive impact on the world through our creative endeavors. Join us as we embark on a
                            journey to create cool sh*t that inspires, innovates, and leaves a lasting legacy of creativity.
                        </p>
                    </div>
                </section>
                <section className="mb-8">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">Projects</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                        {projects.map((project, index) => (
                            <Project key={index} {...project} />
                        ))}
                    </div>
                </section>
          
        </div>
    );
}

export default Home;
