import React from 'react';
class PokemonStats extends React.Component{
	render(){
		return(
			<div style={{fontSize:10}}>
				<p className="text-uppercase text-center" style={{fontSize:12, marginBottom:10,fontWeight:700}}>Stats</p>
				<ul className="list-group list-group-flush">
				    <li className="list-group-item" style={{padding:10}}>
				    	<div className="col-3"><b>HP</b></div>
				    	<div className="col-3 text-right">{this.props.stats[0].base_stat}</div>
				    	<div className="col-3"><b>SPEED</b></div>
				    	<div className="col-3 text-right">{this.props.stats[5].base_stat}</div>
				    </li>
				    <li className="list-group-item" style={{padding:10}}>
				    	<div className="col-3"><b>AT</b></div>
				    	<div className="col-3 text-right">{this.props.stats[1].base_stat}</div>
				    	<div className="col-3"><b>SPEC.AT</b></div>
				    	<div className="col-3 text-right">{this.props.stats[3].base_stat}</div>
				    </li>
				    <li className="list-group-item" style={{padding:10}}>
				    	<div className="col-3"><b>DEF</b></div>
				    	<div className="col-3 text-right">{this.props.stats[2].base_stat}</div>
				    	<div className="col-3"><b>SPEC.DEF</b></div>
				    	<div className="col-3 text-right">{this.props.stats[4].base_stat}</div>
				    </li>
				</ul>
			</div>
		);
	}
}
export default PokemonStats;
PokemonStats.propTypes={
	stats:React.PropTypes.array.isRequired
}