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
		var url='http://www.pokeapi.co/api/v2/pokemon?limit='+this.state.limit+'&offset='+this.state.offset;
		var request = new Request(url, {
			headers: new Headers({
				'Access-Control-Allow-Origin': '*'
			})
		});
        fetch(request) 
        .then(result=> {
        	console.log(result.json());
            this.setState({pokemons:result.results.json()});
        });
	}
	render(){
		return (
			<table className="table table-responsive table-hover">
				<thead>
					<tr>
						<td>Id</td>
						<td>Name</td>
					</tr>
				</thead>
				<tbody>
					{this.state.pokemons.map((pokemon,key)=>{
											 <PokemonListItem pokemonObj={pokemon} key={key}/>
										})
					}
				</tbody>
			</table>
			);
	}
}
PokemonList.defaultProps={
	limit:20,
	offset:0,
}
export default PokemonList;