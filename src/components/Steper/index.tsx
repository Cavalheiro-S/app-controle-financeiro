
export const Steper = () => {

    return (
        <div className="steper">
            <div className={`steper__step steper__step--active`}>
                <span className="steper__number">
                    <span className="number__background">
                        {1}
                    </span>
                </span>
                <div className="steper__text">
                    <span className="steper__name">
                        {"Informações Pessoais"}
                    </span>
                    <span className="steper__description">
                        {"Lorem Ipsum"}
                    </span>
                </div>
            </div>
            <div className={`steper__step steper__step`}>
                <span className="steper__number">
                    <span className="number__background">
                        {1}
                    </span>
                </span>
                <div className="steper__text">
                    <span className="steper__name">
                        {"Informações Pessoais"}
                    </span>
                    <span className="steper__description">
                        {"Lorem Ipsum"}
                    </span>
                </div>
            </div>
        </div>
    )
}