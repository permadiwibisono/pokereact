import React from 'react';
class PokemonAbilities extends React.Component{
	render(){
		return(
			<div style={{fontSize:10}}>
				<p className="text-uppercase text-center" style={{fontSize:12, marginBottom:10,fontWeight:700}}>Abilities</p>
				<ul className="list-group list-group-flush">
					{this.props.abilities.map(
						(ab,key)=>{return <li key={key} className="list-group-item" style={{padding:"10px 15px"}}><span>{ab.ability.name}</span> {ab.is_hidden?<span className="badge badge-default" style={{marginLeft:15}}>hidden</span>:''}</li>})}
				    
				</ul>
			</div>
		);
	}
}
export default PokemonAbilities;
PokemonAbilities.propTypes={
	abilities:React.PropTypes.array.isRequired
}