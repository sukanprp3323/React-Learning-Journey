import styles from "./EventPropagate.module.css"

export const EventPropagation = () => {
    const handleGrandParent = (event) => {
        console.log("Grand Parent Clicked");
        // event.stopPropagation()
    }

    const handleParentClick = (event) => {
        console.log("Parent Clicked");
        // event.stopPropagation()
    }

    const handleChildClick = (event) => {
        console.log(event);
        console.log("Child Cllcked");
        event.stopPropagation()
    }


    return (
        <>
            <section>
                <div className={styles["g-div"]} onClickCapture={handleGrandParent}>
                    <div className={styles["p-div"]} onClickCapture={handleParentClick}>
                        <button className={styles["c-div"]} onClickCapture={handleChildClick}>
                            Child Div
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}