// Write your code here
import './index.css'

const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <div className="item">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </div>
  )
}
export default DestinationItem
