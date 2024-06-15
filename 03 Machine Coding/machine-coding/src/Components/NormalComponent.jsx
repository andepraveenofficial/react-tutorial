const NormalComponent = () => {
    return (
        <div>NormalComponent</div>
    )
}

export const HigherOrderComponent = (Component) => {
    // eslint-disable-next-line react/display-name
    return () => (
        <div style={{ color: "red" }}>
            <Component />
        </div>
    );
}

export default NormalComponent;
