import React, {Component} from "react";


//
// function App() {
//     const [count, setCount] = useState(0);
//
//     const increment = () => {
//         setCount(count + 1);
//     }
//
//     const decrement = () => {
//         setCount(count - 1);
//     };
//
//     return (
//         <div className="App">
//             <h1>Welcome to my counter app</h1>
//             <p>The count is:</p>
//             <button onClick={decrement}>-</button>
//             <button onClick={increment}>+</button>
//         </div>
//     );
// }
//
// export default App;


export default class State extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    decrement = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
        }));
    };

    render() {
        return (
            <div>
                <h1>Welcome to my counter app</h1>
                <p>The count is: {this.state.count}</p>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}