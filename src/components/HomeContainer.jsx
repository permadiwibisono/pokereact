import React from 'react';
import PokemonList from './PokemonList.jsx';
class HomeContainer extends React.Component{
	render(){
		return( <div className="container">
					<PokemonList offset={0} limit={20}/>
				</div>
		);
	}
}
export default HomeContainer;