import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Chatbar from './Chatbar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.sendMsg = this.sendMsg.bind(this);
    this.state = {  
      currentUser: {name: "Bob"},
        messages: [
          { id: 1,
            username: "Bob",
            content: "Has anyone seen my marbles?",
          },
          { id: 2,
            username: "Anonymous",
            content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
          }
        ]
      }
    } //end of constructor

    componentDidMount() {
      console.log("componentDidMount <App />");
      setTimeout(() => {
        console.log("Simulating incoming message");
        // Add a new message to the list of messages in the data store
        const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
        const messages = this.state.messages.concat(newMessage)
        // Update the state of the app component.
        // Calling setState will trigger a call to render() in App and all child components.
        this.setState({messages: messages})
      }, 3000);
    }



    sendMsg(event) {
      if(event.keyCode === 13) {
        console.log("key pressed", event.target.value);
        event.preventDefault();
        const newMessage = {id: 0, username: this.state.currentUser.name, content: event.target.value}
        const messages = this.state.messages.concat(newMessage)
        this.setState({messages: messages});
      }
    }


  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        </nav>
        <MessageList 
        messages={this.state.messages}
        />
        <Chatbar 
          currentUser={this.state.currentUser.name}
          sendMsg={this.sendMsg} 
         />
      </div>
    );
  }
}
export default App;
