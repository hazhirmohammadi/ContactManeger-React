/*
* NOTE Higher Order Component
* */

const ColorFull = WrappedComponent => {
    const colors = [
        "success",
        "warning",
        "danger",
        "info",
        "primary",
        "dark",
        "light"
    ]

    let randomColors = colors[Math.floor(Math.random() * 6)];
    let className = `bg-${randomColors}`
    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}/>
            </div>
        )
    }
}
export default ColorFull;