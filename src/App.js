import {Component} from 'react'

import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {
    isFeedbackGiven: false,
  }

  handleFeedback = id => {
    if (id === 2) {
      this.setState({isFeedbackGiven: true})
    }
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="out-container">
        <div className="inside-container">
          {isFeedbackGiven ? (
            <>
              <img
                src={resources.loveEmojiUrl}
                className="emoji-love"
                alt="love emoji"
              />
              <h1 className="para-2">Thank You</h1>
              <p className="heading">
                We will use your feedback to improve our customer support
                performance
              </p>
            </>
          ) : (
            <>
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul className="order-container">
                {resources.emojis.map(eachItem => (
                  <Feedback
                    key={eachItem.id}
                    resources={eachItem}
                    handleFeedback={this.handleFeedback}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default App
