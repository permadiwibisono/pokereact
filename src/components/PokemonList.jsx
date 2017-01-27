import React from 'react';
import PokemonListItem from './PokemonListItem.jsx';
class PokemonList extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			limit:this.props.limit,
			offset:this.props.offset,
			pokemons:[]
		}
	}
	componentDidMount(){
		var url='http://pokeapi.salestock.net:8000/api/v2/pokemon?limit='+this.state.limit+'&offset='+this.state.offset;
		var request = new Request(url);
        fetch(request) 
        .then(response=> {
        	return response.json();
        }).then(json=>{
            this.setState({pokemons:json.results});        
        });
	}
	renderItem(pokemon, key){
		return <PokemonListItem pokemonObj={pokemon} key={key}/>
	}
	render(){
		return (
			<div className="container" style={{padding:15}}>
				<div className="row">
				{
					this.state.pokemons.map(this.renderItem.bind(this))
				}
				</div>
			</div>
			);
	}
}
PokemonList.defaultProps={
	limit:20,
	offset:0,
}
export default PokemonList;