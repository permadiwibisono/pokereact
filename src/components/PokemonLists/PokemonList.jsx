import React from 'react';
import PokemonListItem from './PokemonListItem.jsx';
class PokemonList extends React.Component{
	constructor(props)
	{
		super(props);
	}
	renderItem(pokemon, key){
		return <PokemonListItem pokemon={pokemon} key={key}/>
	}
	renderFooter(){
		if(this.props.total>0&& this.props.dataSource.length<this.props.total)
			return(
				<div className="row">
					<div className="col-3 offset-5">
						<button className="btn btn-danger btn-block" onClick={this.props.onLoadMorePokemon}>
							Load More
						</button>
					</div>
				</div>
			);
	}
	render(){
		return (
			<div>
				<div className="row">
				{
					this.props.dataSource.map(this.renderItem.bind(this))
				}
				</div>
				{this.renderFooter()}
			</div>
			);
	}
}
export default PokemonList;
PokemonList.propTypes={
	total:React.PropTypes.number.isRequired,
	dataSource:React.PropTypes.array.isRequired,
	onLoadMorePokemon:React.PropTypes.func.isRequired
}