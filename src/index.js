import React from 'react'; //calling react from node_modules
import ReactDOM from 'react-dom'; //calling react-dom from node_modules

//components to be included inside of parent/index
import Header from './components/header'


const App = () =>{
    return (
        <div className="newElement">
            <Header/>
        </div>) 
    // behind the scenes, react is doing these commandsReact.createElement('h1',{className:'title'},React.createElement('div'));

} // instatiating header component and assigning css class

ReactDOM.render(<App/>, document.querySelector('#root')) //injecting component into dom markup by id