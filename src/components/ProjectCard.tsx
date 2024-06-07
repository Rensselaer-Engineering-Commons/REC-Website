import { faBolt, faComputer, faAtom, faListCheck, faGear, faBridge, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type ProjectCardProps = {
    name: string;
    description: string;
    link: string;
    image: string;
    department: string;
    date: string;
};

let symbols: { [key: string]: IconDefinition } = {
    "ECSE": faBolt,
    "CIVIL": faBridge,
    "CHEM": faAtom,
    "IME": faListCheck,
    "MANE": faGear,
    "CS": faComputer
}

const Project = (props: ProjectCardProps) => {
    return (
        <div className="bg-white max-w-[500px] min-w-[200px] overflow-hidden rounded-md shadow-xl flex flex-col">
            <figure className=''>
                <img src={props.image} alt="" />
            </figure>
            <div className="p-5">
                <h1 className="text-3xl font-semibold mb-4">{props.name}</h1>
                <div className="flex justify-between italic my-5">
                    <p>{props.date}</p>
                    <p title={props.department}>
                        <FontAwesomeIcon icon={symbols[props.department]} /> {props.department}
                    </p>
                </div>
                <p className="text-md line-clamp-3">{props.description}</p>
            </div>
            <div className="text-blue-600 font-semibold mb-5 ml-5 mt-auto">
                <a href={props.link}>Learn More...</a>
            </div>

        </div>
    )
}

export default Project