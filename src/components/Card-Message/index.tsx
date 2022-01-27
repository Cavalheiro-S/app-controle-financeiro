interface MessageProps{
    classComponent:string
}

export const MessageCard = ({classComponent}: MessageProps) => {

    return (
        <div className={`message ${classComponent !== undefined ? classComponent : ""}`}>
            <span className="message__welcome">Bem vindo(a)</span>
            <span className="message__username">Lucas Cavalheiro</span>
        </div>
    )
}