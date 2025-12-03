import Styles from "./netflix.module.css"
import styled from "styled-components";

export const SeriesCards = ({ curElem }) => {
    console.log(curElem);
    const { id, name, rating, description, Type, watch_url, img_url } = curElem; // destruturing
    // const ratingStyles = {
    //     color: "red",
    //     fontSize: "1.4rem"
    // }

    const ButtonKaBackGround = styled.button({
        backgroundColor: `${rating >= 8.5 ? "#46f190" : "#f7dc6f"}`,
        color: "black",
        fontWeight: 550
    })

    //   const ButtonKaBackGround = styled.button`
    //     background-color: ${(props)=>
    //      props.rating >= 8.5 ? "#46f190" : "#f7dc6f"};
    //     color: black;
    //     font-weight: 550;
    // `;


    const ratingClass = rating >= 8.5 ? Styles.super_hit : Styles.average;

    return (
        <>
        
        <li className="Cards flex flex-col gap-2  rounded-xl">
            <div>
                <img className="banners" src={img_url} alt={name} width={"20%"} height={"20%"} />
            </div>
            <h2>Name: {name} </h2>
            {/*this css below is in netflix.css also can use multiple classNames*/}
            <h3>
                Rating:
                <span className={`${Styles.rating} ${ratingClass}`}>
                    {rating}
                </span>
            </h3>

            <p className="text-3xl font-bold underline">summary :{description} </p>
            <p>genre: {Type}</p>   {/*dynamic function call*/}
            <a href={watch_url} target="_blank">
                <ButtonKaBackGround
                    onClick={() => alert(`opening ${name}`)}
                    className="Watch_Now"
                    rating = {rating}
                >
                    Watch Now
                </ButtonKaBackGround>
            </a>
        </li>    
        </>
    )
}

