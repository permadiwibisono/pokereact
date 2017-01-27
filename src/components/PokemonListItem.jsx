import React from 'react';
import PokemonListItemTipe from './PokemonListItemTipe.jsx'
class PokemonListItem extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			name:this.props.pokemonObj.name,
			url:this.props.pokemonObj.url,
			loaded:false,
			obj:[]
		}
	}
	componentDidMount()
	{
		var request = new Request(this.state.url);
        fetch(request) 
        .then(response=> {
        	return response.json();
        }).then(json=>{
            this.setState({obj:json,loaded:true});        
        });
	}
	loadData(){
		return (
			!this.state.loaded?<li className="list-group-item">Loading... </li>:<li className="list-group-item">
						    	<div className="col-6" style={{padding:0}}><b>H </b> {this.state.obj.height/10} m</div>
						    	<div className="col-6" style={{padding:0}}><b>W </b> {this.state.obj.weight/10} kg</div>
						    </li>
		);
	}
	loadTipePokemon(){
		return (
			!this.state.loaded?'':this.state.obj.types.map((tipe,key)=>{ return <PokemonListItemTipe tipe={tipe.type.name} key={key}/>})
		);		
	}
	loadPokemonSprite(){
		let pokeImg={
			width:'50%',
			margin:'15 auto'
		}
		var pict=!this.state.loaded?'../src/img/Pokeball.PNG':this.state.obj.sprites.front_default;
		return <img className="card-img-top" src={pict} style={pokeImg} alt="Card image cap"/>
	}
	render(){
		// console.log(this.props.pokemonObj);
		let pokeContainer={
			padding:15
		}
		let pokeName={
			textTransform:'capitalize'
		}
		let pokeImg={
			width:'50%',
			margin:'15 auto'
		}
		return (
				<div className="col-md-3" style={pokeContainer}>				
					<div className="card">
					  {this.loadPokemonSprite()}
					  <div className="card-block">
					    <h5 className="card-title" style={pokeName}><b>#{this.state.obj.id}</b> {this.state.name}</h5>
					    <div className="row" style={{margin:0}}>
					  		{this.loadTipePokemon()}
					  	</div>
					    <ul className="list-group list-group-flush">
						    {this.loadData()}
						</ul>
						<div className="card-block">
					    	<a href="#" className="btn btn-primary btn-block">Details</a>							
						</div>
					  </div>
					</div>
				</div>
			);
	}
}
export default PokemonListItem;