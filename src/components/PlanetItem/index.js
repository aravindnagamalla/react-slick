// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails
  const altName = `planet ${name}`
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={altName} className="image" />
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
