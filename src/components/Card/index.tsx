interface CardProps {
    firstLineCard: string;
    title: string;
    describe: string;
    children: JSX.Element;
}

export const Card = ({ firstLineCard, title, describe, children }: CardProps) => {

    return (

        <div className="card">
            <h2 className="card__title">
                {firstLineCard}
                <br/>
                <span className="card__type">
                    {title}
                </span>
            </h2>
            <h3 className="card__describe">
                {describe}
            </h3>
            <>
                {children}
            </>
        </div>
    )
}