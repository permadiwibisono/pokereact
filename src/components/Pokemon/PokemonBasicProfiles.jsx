import React from 'react';
class PokemonBasicProfiles extends React.Component{
	render(){
		return(			
			<div className="col-12">
				<p className="text-uppercase text-center" style={{fontSize:12, marginBottom:10,fontWeight:700}}>Basic Profiles</p>
				<div className="row">
					<div className="col-4" style={{minHeight:50}}>
						<p className="text-uppercase text-center" style={{fontSize:12, marginBottom:5}}>Weight</p>
						<p className="text-center">{this.props.weight}kg</p>
					</div>
					<div className="col-4" style={{minHeight:50}}>
						<p className="text-uppercase text-center" style={{fontSize:12, marginBottom:5}}>Height</p>
						<p className="text-center">{this.props.height}m</p>
					</div>
					<div className="col-4" style={{minHeight:50}}>
						<p className="text-uppercase text-center" style={{fontSize:12, marginBottom:5}}>Base Experience</p>
						<p className="text-center">{this.props.base_experience}</p>
					</div>
				</div>					
			</div>
		);
	}
}
export default PokemonBasicProfiles;
PokemonBasicProfiles.propTypes={
	weight:React.PropTypes.number.isRequired,
	height:React.PropTypes.number.isRequired,
	base_experience:React.PropTypes.number.isRequired
}