import React from "react";
import "./index.css";

interface CardProps {
    firstLineCard: string;
    title: string;
    describe: string;
    children: JSX.Element;
}

export const Card = ({firstLineCard , title, describe, children} : CardProps) => {

    return (
        <div className="card_container">
            <div className="card_form">
                <h2 className="card_title">
                    {firstLineCard}
                    <br />
                    <span className="card_title_type">
                        {title}
                    </span>
                </h2>
                <h3 className="card_title_describe">
                    {describe}
                </h3>
                <>
                    {children}
                </>
            </div>
        </div>
    )
}