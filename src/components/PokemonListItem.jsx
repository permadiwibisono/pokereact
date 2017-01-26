import React from 'react';
class PokemonListItem extends React.Component{
	render(){
		return (
				<tr>
					<td></td>
					<td>{this.props.pokemonObj.name}</td>
				</tr>
			);
	}
}
export default PokemonListItem;