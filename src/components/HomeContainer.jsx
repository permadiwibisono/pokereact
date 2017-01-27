import React from 'react';
import PokemonList from './PokemonList.jsx';
class HomeContainer extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			count:811,
			offset:0,
			limit:20
		}
	}
	componentDidMount(){
		this._div.scrollTop = 0;
    	window.addEventListener('scroll', this.handleScroll.bind(this));
	}
	componentWillUnmount(){
    	window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(event){
		// console.log(this._div);
	}
	render(){
		return(
			<div ref={(ref) => this._div = ref}> 
				<PokemonList offset={this.state.offset} limit={this.state.limit}/>
			</div>
		);
	}
}
export default HomeContainer;