const Title = (props: { children: React.ReactNode }) => {
    return (
        <h2 className="text-3xl font-bold basis-1/3">{props.children}</h2>
    )
}

const Information = (props: { children: React.ReactNode }) => {
    return (
        <p className="text-xl leading-loose basis-2/3">
            {props.children}
        </p>
    )
}

const MainSection = (props: { children: React.ReactNode }) => {
    return (
        <div className="container flex flex-row lg:flex-row sm:flex-col mx-auto">
            {props.children}
        </div>
    )
}

export { Title, Information, MainSection }