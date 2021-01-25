import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import './ChatScreen.css';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [message, setMessages] = useState([
        {
            name: "Ellen",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1iAHV9T8tgnq1DYyWt1TQ5uYdQPTuYBvqA&usqp=CAU",
            message: "Whats up <3"
        },
        {
            name: "Ellen",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1iAHV9T8tgnq1DYyWt1TQ5uYdQPTuYBvqA&usqp=CAU",
            message: "Hows it going!"
        },
        {
            message: "yo!"
        }
    ]);

    const handleSend = (e) => {
        e.preventDefault();

        setMessages([...message, { message: input}]);
        setInput("");
    };

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCH WITH ELLEN ON 10/08/2160</p>
            {message.map((message) => (
                message.name ? (
                    <div className="chatScreen__message"> 
                        <Avatar 
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>  
                ) : (
                    <div className="chatScreen__message"> 
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>  
                )
            ))}

            <form className="chatScreen__input">
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="chatScreen__inputField" 
                    placeholder="Type a message..."
                    type="text" 
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputBtn">Send</button>
            </form>
                   

        </div>
    );
};

export default ChatScreen;
   