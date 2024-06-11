import { MainSection, Title, Information } from "../components/components.ts"

import Project from "../components/ProjectCard.tsx"

let projects = [
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
        name: "Giant Bridge",
        description: "Nulla pharetra diam sit amet nisl suscipit adipiscing. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Maecenas pharetra convallis posuere morbi. Viverra adipiscing at in tellus. Euismod lacinia at quis risus sed vulputate. Orci phasellus egestas tellus rutrum tellus. Venenatis urna cursus eget nunc. Pellentesque habitant morbi tristique senectus et netus. Dolor morbi non arcu risus quis varius quam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elementum nisi quis eleifend quam. Pellentesque habitant morbi tristique senectus et netus. Maecenas pharetra convallis posuere morbi leo urna.",
        link: "https://example.com",
        image: "https://assets.editorial.aetnd.com/uploads/2015/02/topic-golden-gate-bridge-gettyimages-177770941.jpg",
        department: "CIVIL",
        date: "06/07/24"
    },
    {
        name: "Lean Manufacturing for Airplanes",
        description: "Nulla pharetra diam sit amet nisl suscipit adipiscing. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Maecenas pharetra convallis posuere morbi. Viverra adipiscing at in tellus. Euismod lacinia at quis risus sed vulputate. Orci phasellus egestas tellus rutrum tellus. Venenatis urna cursus eget nunc. Pellentesque habitant morbi tristique senectus et netus. Dolor morbi non arcu risus quis varius quam. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Elementum nisi quis eleifend quam. Pellentesque habitant morbi tristique senectus et netus. Maecenas pharetra convallis posuere morbi leo urna.",
        link: "https://example.com",
        image: "https://www.travelandleisure.com/thmb/h97kSvljd2QYH2nUy3Y9ZNgO_pw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/plane-data-BUSYROUTES1217-f4f84b08d47f4951b11c148cee2c3dea.jpg",
        department: "IME",
        date: "06/07/24"
    }
]

const Home = () => {
    return (
        <div>
            <header className="h-96 min-h-[600px] relative flex flex-col justify-around align-middle">
                <div
                    className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px]"
                ></div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold text-white">Rensselaer Engineering Commons</h1>
                    <p className="text-white text-lg">Lets create together</p>
                </div>
            </header>
            <main className="flex flex-col">
                <div className="py-52">
                    <MainSection>
                        <Title>Our Mission</Title>
                        <Information>
                            Our mission is to inspire creativity through the power of simplicity. 
                            By embracing minimalist design, user-centric innovation, and a collaborative DIY spirit, 
                            we aim to create cool stuff that not only delights but also solves real-world problems. 
                            We believe in the transformative power of iterative improvement, cross-disciplinary inspiration, 
                            and sustainable solutions. Our mission is to embrace imperfection, foster collaboration, 
                            and make a positive impact on the world through our creative endeavors. Join us as we embark on a 
                            journey to create cool sh*t that inspires, innovates, and leaves a lasting legacy of creativity.
                        </Information>
                    </MainSection>
                </div>
                <div className="py-52 relative">
                    <div
                        className="absolute inset-0 -z-10 h-full w-full bg-[#3647a6] bg-[linear-gradient(to_right,#1a2d99_1px,transparent_1px),linear-gradient(to_bottom,#1a2d99_1px,transparent_1px)] bg-[size:40px_40px]"
                    ></div>
                    <MainSection>
                        <Title><span className="text-white">Featured Projects</span></Title>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            {projects.map((project) => (
                                <Project
                                    name={project.name}
                                    description={project.description}
                                    link={project.link}
                                    image={project.image}
                                    department={project.department}
                                    date={project.date}
                                />
                            ))}
                        </div>

                    </MainSection>

                </div>
            </main>
        </div>
    )
}

export default Home