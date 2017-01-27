import React from 'react';
class PokemonListItemTipe extends React.Component{
	render(){
		const style={
			pokeType:{
				marginRight:10,
				marginBottom:10,
			},
			normal:{
				backgroundColor:'#6D6D4E'
			},
			fighting:{
				backgroundColor:'#7D1F1A'
			},
			flying:{
				backgroundColor:'#6D5E9C'
			},
			poison:{
				backgroundColor:'#682A68'
			},
			ground:{
				backgroundColor:'#927D44'
			},
			rock:{
				backgroundColor:'#786824'
			},
			bug:{
				backgroundColor:'#6D7815'
			},
			ghost:{
				backgroundColor:'#493963'
			},
			steel:{
				backgroundColor:'#787887'
			},
			fire:{
				backgroundColor:'#9C531F'
			},
			water:{
				backgroundColor:'#445E9C'
			},
			grass:{
				backgroundColor:'#4E8234'
			},
			electric:{
				backgroundColor:'#A1871F'
			},
			psy:{
				backgroundColor:'#A13959'
			},
			ice:{
				backgroundColor:'#638D8D'
			},
			dragon:{
				backgroundColor:'#4924A1'
			},
			fairy:{
				backgroundColor:'#9B6470'
			},
			dark:{
				backgroundColor:'#49392F'
			},
			shadow:{
				backgroundColor:'#A292BC'
			},

		}
		// let getClass={pokeType,this.props.tipe};
		// console.log(style);
		return(
			<span className="badge badge-default text-right" style={Object.assign(style[this.props.tipe],style.pokeType)}>{this.props.tipe}</span>
		);
	}
}
export default PokemonListItemTipe;