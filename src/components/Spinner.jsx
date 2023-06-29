import spinner from "../assets/drops-400px.gif"

const Spinner = () => {
    return (
        <>
            <img
                src={spinner}
                alt=""
                className="d-block m-auto"
                style={{width: "200px"}}
            />
        </>
    )
}
export default Spinner;