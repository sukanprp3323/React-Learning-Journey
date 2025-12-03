import styled from "styled-components";
import "./EvntHandlng.Css"
export const EventHandling = () => {

    // function handleButtonClick() {
    //     alert("Hey I am onClick Event")
    // }

    const Button1 = styled.button({
        backgroundColor: "khaki",
        color: "black",
    })

    const handleButtonClick = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.type);

        alert("onClick event called")
    }

    const handleWelcomeUser = (user) => {
        alert(`Hello ${user}, How Are You`)
    }

    return (
        <>
            <button onClick={handleButtonClick}>Click Event</button> <br />
            {/* {//fat Arrow function} */}
            <button onClick={(event) => handleButtonClick(event)}>Click Event FatArrow Fun</button>

            {/* Inline Event Handler */}
            <button onClick={(e) => console.log(e)}>Inline Event Handler</button>
            <Button1 onClick={() => handleWelcomeUser("Sukan")}>Hello User</Button1>
        </>
    )
}