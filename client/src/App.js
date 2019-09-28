import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard'
import Navbar from './components/Navbar'
import 'semantic-ui-css/semantic.min.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

componentDidMount() {
  fetch('http://localhost:5000/api/players')
  .then(res => res.json())
  .then(res => this.setState({ players: res }))  
  .catch(err => console.log(err))
}


render() {
  return (
    <div className="App">
     <h1>Women's World Cup</h1>  
     <Navbar />     
      { this.state.players.map(player => (
       <PlayerCard className='Player' player={player} key={player.id}  /> 
     ))}
    </div>
  )
}
 ;
}
export default App;