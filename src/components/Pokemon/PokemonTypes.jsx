import React from 'react';
import PokemonListItemTipe from '../PokemonLists/PokemonListItemTipe.jsx';
class PokemonTypes extends React.Component{
	render(){
		return(
			<div style={{fontSize:11}}>
				<p className="text-uppercase text-center" style={{fontSize:12, marginBottom:10,fontWeight:700}}>Types</p>
				<ul className="list-group list-group-flush">
					<li className="list-group-item"> 
					{this.props.types.map(
						(t,key)=>{return <PokemonListItemTipe tipe={t.type.name} key={key}/>})}
					</li>
				    
				</ul>
			</div>
		);
	}
}
export default PokemonTypes;
PokemonTypes.propTypes={
	types:React.PropTypes.array.isRequired
}