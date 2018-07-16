import React, { Component } from 'react';
import './App.css';
import PlayerCard from "./PlayerCard";

console.log(Component)

class App extends Component {
	
	constructor(props){
		super(props);
		//creation du variable dans le constructor ?
		this.symbol = ["rock", "paper", "scissors"]
		this.state = {

		}
	}

	//function qui decide de qui sera le gagnant 
	decideWinner = () => {
		//destructuration du state
		const {playerOrange, playerWhite} = this.state;
		//egalité
		if(playerWhite == playerOrange) {
			return "Egalité !"
		}
		//regle shifumi pour playerWhite
		if( (playerWhite==="rock"  && playerOrange==="scissors")||
			(playerWhite==="paper"  && playerOrange==="rock")||
			(playerWhite==="scissors"  && playerOrange==="paper")
		) {
			return "Player White a gagné !"
		}//si cas different = player blue win
		return "Player Orange a gagné"
	}

	//creation d'une function qui attribue au state playerWhite et playerOrange un des 3 element dans le tableau symbol;
	runGames = () => {
		// creation d'une var qui choisi un nombre entre 0 et 2 (0,1,2);
		// const index = Math.floor(Math.random()*3)
		// console.log(this.symbol[index]);
		//initialise une var a 0;
		let counter = 0;
		//function qui active une autre function tout les 100miliseconde
		let myInterval = setInterval(() => {
			//incremente counter toute les 100 mili
			counter++
			//effectue  un setState | Donne un des element du tableau aleatoir du this.symbol aux player dans le state
			this.setState({
				playerWhite : this.symbol[Math.floor(Math.random()*3)],
				playerOrange : this.symbol[Math.floor(Math.random()*3)],
				winner: ""
			})
			// si le var counter monte a 30 je stoppe le myInterval via la function "clearInterval(myInterval)"
			if(counter > 30){
				clearInterval(myInterval)
				//change le winner : avec la function decidewinner qui donne le resultat du shifumi
				this.setState({winner : this.decideWinner()})
			}
			//le temps que qui definie quand doit se relancer la function
		},100)
	}

	render() {
		return (
			<div className="App">
			{/* transmet des props string a PlayerCard */}
				<PlayerCard color="#ecf0f1" symbol={this.state.playerWhite}/>
				<PlayerCard color="#e67e22" symbol={this.state.playerOrange}/>
				<p>
				{this.state.winner}				
				</p>
				<button onClick={this.runGames}>Run Game</button>
			</div>
		);
	}
}

export default App;
