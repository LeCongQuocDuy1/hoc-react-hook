export const Planet = ({ props }) => {
    return props.isGasPlanet ? <h1>{props.name}</h1> : ""
}