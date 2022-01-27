interface InfoCardProps {
    classComponent?: string;
    stringLogo: string;
    value: number | undefined | null;
    describe: string;
}

export const InfoCard = ({ describe, value, stringLogo, classComponent }: InfoCardProps) => {

    return (

        <div className={`infoCard ${classComponent ? classComponent : ""}`}>
            <div className="infoCard__img">
                <span className="material-icons infoCard__logo">
                    {stringLogo}
                </span>
            </div>
            <span className="infoCard__value">R${` ${value === null || undefined ? 0 : value}`}</span>
            <span className="infoCard__describe">{describe}</span>
        </div>
    )
}