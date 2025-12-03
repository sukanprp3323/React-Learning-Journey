import "./EvntHandlng.Css"
export const EventProps = () => {

    const HandleWelcomeUser = (user) => {
        alert(`hey, ${user}`)
    }


    const handleHover = (user) => {
        alert(`hey thanks for hovering`)
    }

    return (
        <>
            <WelcomeUser
                onButtonClick={() => HandleWelcomeUser("Sukan")}
                onMousehovering={() => handleHover()}
            />
        </>
    )
}

const WelcomeUser = (props) => {
    const handleGreetings = () => {
        console.log(`hey, User welCome`);
        props.onButtonClick();
    }
    return (
        <>
            <button onClick={props.onButtonClick}>Click Me</button>
            <button onMouseEnter={props.onMousehovering}>Hover</button>
            <button onClick={handleGreetings}>Greetings</button>
        </>
    )
}