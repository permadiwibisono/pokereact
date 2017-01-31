import React from 'react';
import PokemonBasicProfiles from './PokemonBasicProfiles.jsx';
import PokemonStats from './PokemonStats.jsx';
import PokemonAbilities from './PokemonAbilities.jsx';
import PokemonTypes from './PokemonTypes.jsx';
import LoadingGede from './LoadingGede.jsx';
class Pokemon extends React.Component{
	constructor(props){
		super(props);
		this.state={
			pokemon:{},
			loaded:false
		}
	}
	componentDidMount(){
		var url='http://pokeapi.salestock.net:8000/api/v2/pokemon/'+this.props.params.pokemon;
		var request = new Request(url);
	    fetch(request) 
	    .then(response=> {
	    	return response.json();
	    }).then(json=>{
	        this.setState({pokemon:json,loaded:true});        
	    });	
	}
	renderContent(){
		if(!this.state.loaded)
		{
			return ( <LoadingGede title="Loading profile of your pokemon...."/>);
		}
		else
		{
			return(
				<div>
					<h2><b>#{this.state.pokemon.id}</b></h2>
					<div className="card-title" style={{paddingBottom:15}}>
						<h3 className="text-center text-uppercase" style={{paddingBottom:10}}>{this.state.pokemon.name}</h3>
						<PokemonBasicProfiles weight={this.state.pokemon.weight/10} height={this.state.pokemon.height/10} base_experience={this.state.pokemon.base_experience}/>
					</div>
					<div className="row">
						<div className="col-md-6">
							<img src={this.state.pokemon.sprites.front_default} style={{width:"100%"}}/>
						</div>
						<div className="col-md-6">
							<PokemonTypes types={this.state.pokemon.types}/>
							<PokemonStats stats={this.state.pokemon.stats}/>
							<PokemonAbilities abilities={this.state.pokemon.abilities}/>
							
						</div>
					</div>					
				</div>
			);
		}
	}
	render(){
		return(
			<div className="container">
				<div className="offset-md-3 col-sm-6">
					<div className="card" style={{minHeight:550, marginTop:20,marginBottom:20, borderRadius:0}}>
						<div className="card-block">
							{this.renderContent()}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Pokemon;