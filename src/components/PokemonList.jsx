import React from 'react';
import PokemonListItem from './PokemonListItem.jsx';
class PokemonList extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			pokemons:[]
		}
	}
	componentDidMount(){
		// var url='http://pokeapi.salestock.net:8000/api/v2/pokemon?limit='+this.state.limit+'&offset='+this.state.offset;
		// var request = new Request(url);
  //       fetch(request) 
  //       .then(response=> {
  //       	return response.json();
  //       }).then(json=>{
  //           this.setState({pokemons:json.results});        
  //       });
	}
	renderItem(pokemon, key){
		return <PokemonListItem pokemonObj={pokemon} key={key}/>
	}
	render(){
		return (
			<div>
				<div className="row">
				{
					this.props.dataSource.map(this.renderItem.bind(this))
				}
				</div>
			</div>
			);
	}
}
export default PokemonList;