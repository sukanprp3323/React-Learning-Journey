import seriesData from "../API/seriesData.json"
import { SeriesCards } from "./SeriesCards";

const NetflixSeries = () => {

    return (
        <>
            <ul className="grid grid-three-cols">
                {seriesData.map((curElem) => (
                    <SeriesCards key={curElem.id} curElem={curElem} />
                ))}
            </ul>
        </>
    )
}


export default NetflixSeries; //!default manner export 




