import "./index.css";

interface ContainerProps{
    children: JSX.Element
}

export const Home = ({children}: ContainerProps) => {

    return(
        <section className='container'>
            {children}
        </section>
    )
}