export const ProfileCard = (props) => {
    const { name, age, gretting, children } = props
    return (
        <>
            <h2>Name: {name}</h2>
            <h3>Age: {age}</h3>
            <p>gretting: {gretting}</p>
            <div>{children}</div>
        </>
    )
}