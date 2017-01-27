import React from 'react';
import PokemonList from './PokemonList.jsx';
import Loading from './Loading.jsx';
class HomeContainer extends React.Component{
	constructor(props)
	{
		super(props);
		this.state={
			count:811,
			offset:0,
			limit:20,
			dSource:[],
			dSourceNow:[],
			isFetch:false,
			isLoaded:false
		}
		this.loadDataSource();
		this.handleScroll.bind(this);
		// this.loadMorePokemon.bind(this);
	}
	componentDidMount(){
    	// window.addEventListener('scroll', this.handleScroll.bind(this));
	}
	loadDataSource(){		
		var url='http://pokeapi.salestock.net:8000/api/v2/pokemon?limit='+this.state.count;
		var request = new Request(url);
        fetch(request) 
        .then(response=> {
        	return response.json();
        }).then(json=>{
            this.setState({dSource:json.results,isFetch:true});
           	this.loadDataSourceNow(this.state.dSource,this.state.offset,this.state.limit);
            this.setState({offset:this.state.offset+this.state.limit});
        });
	}
	renderContent(){
		if(this.state.isFetch)
			return (<PokemonList dataSource={this.state.dSourceNow}/>);
		return (
			<Loading loadingText="Preparing pokedex..." classLoading="alert-info"/>
		);
	}
	renderLoading(){
		if(this.state.isFetch&&!this.state.isLoaded)
			return (<Loading loadingText="Loading more pokemon..." classLoading="alert-info"/>);
		if(this.state.dSource.length>0 && this.state.dSourceNow.length<this.state.count&&this.state.isLoaded)
			return (<div><button className="btn btn-danger" onClick={this.loadMorePokemon.bind(this)}>Load More</button></div>)
		return ('');
	}
	loadDataSourceNow(ds,offset,limit)
	{
		var data=[];
		limit=offset+limit>ds.length?ds.length:offset+limit;
		for(var i=offset;i<limit;i++)
		{
			data.push(ds[i]);
		}
		this.setState({dSourceNow:data.length?this.state.dSourceNow.concat(data):this.state.dSourceNow,isLoaded:true});
	}
	loadMorePokemon()
	{
		this.setState({offset:this.state.offset+this.state.limit,isLoaded:false});
        this.loadDataSourceNow(this.state.dSource,this.state.offset,this.state.limit);

	}
	componentWillUnmount(){
    	// window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(event){
		console.log(event.target.activeElement.scrollTop);
		var height=document.getElementById('container').scrollHeight;
		var scrollTop=event.target.activeElement.scrollTop;
		console.log(scrollTop+' '+document.getElementById('container').scrollHeight);
		if(event.pageY>=height-500)
		{
			this.setState({isLoaded:false, offset:this.state.offset+this.state.limit});
		}
	}
	render(){
		return(
			<div id="container" className="container"  style={{padding:15}}> 
				{this.renderContent()}
				{this.renderLoading()}
			</div>
		);
	}
}
export default HomeContainer;