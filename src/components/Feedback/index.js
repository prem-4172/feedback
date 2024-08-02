// Write your React code here.

import './index.css'

const Feedback = props => {
  const {resources, handleFeedback} = props
  const {name, imageUrl, id} = resources

  return (
    <li>
      <div>
        <button
          type="button"
          className="button-1"
          onClick={() => handleFeedback(id)}
        >
          <img src={imageUrl} className="emoji" alt={name} />
        </button>
        <p className="para">{name}</p>
      </div>
    </li>
  )
}

export default Feedback
