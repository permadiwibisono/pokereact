import React from 'react';
import PokemonList from './PokemonLists/PokemonList.jsx';
import Loading from './Loading.jsx';
import Filter from './Filter.jsx';
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
			isLoaded:false,
			filter:[]
		}
		this.loadFilter();
		this.loadMorePokemon=this.loadMorePokemon.bind(this);
		this.onTipePokemonFilterChange=this.onTipePokemonFilterChange.bind(this);
	}
	loadFilter()
	{	
		var filter=[{text:'All',value:''}];
		var url='http://pokeapi.salestock.net:8000/api/v2/type';
		var request = new Request(url);
        fetch(request) 
        .then(response=> {
        	return response.json();
        }).then(json=>{
        	json.results.map(j=>filter.push({text:j.name,value:j.url}))
            this.setState({filter:filter});
			this.loadDataSource();
        });		
	}
	loadDataSource(url=''){		
		var filterAll=url==''?true:false;
		if(filterAll)
			url='http://pokeapi.salestock.net:8000/api/v2/pokemon?limit='+this.state.count;
        this.setState({isFetch:false,limit:20,offset:0});
        console.log(this.state);
		var request = new Request(url);
        fetch(request) 
        .then(response=> {
        	return response.json();
        }).then(json=>{
        	var data=filterAll?json.results:json.pokemon.map(j=>{return j.pokemon});
            this.setState({dSource:data,dSourceNow:[],isFetch:true});
            var {dSource,offset,limit}=this.state;
           	this.loadDataSourceNow(dSource,offset,limit);
            this.setState({offset:offset+limit});
        });
	}
	renderContent(){
		if(this.state.isFetch)
			return (<PokemonList dataSource={this.state.dSourceNow} total={this.state.dSource.length} onLoadMorePokemon={this.loadMorePokemon}/>);
		return (
			<Loading loadingText="Preparing your pokedex..." classLoading="alert-info"/>
		);
	}
	renderLoading(){
		if(this.state.isFetch&&!this.state.isLoaded)
			return (<Loading loadingText="Loading more pokemon..." classLoading="alert-info"/>);
	}
	loadDataSourceNow(ds,offset,limit)
	{
		var data=[];
		limit=offset+limit>ds.length?ds.length:offset+limit;
		console.log(offset+' '+limit);
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
	onTipePokemonFilterChange(evt){
		var url=evt.target.value;
		this.loadDataSource(url);
	}
	render(){
		return(
			<div id="container" className="container"  style={{padding:15}}> 
				<Filter filters={this.state.filter} onTipePokemonFilterChange={this.onTipePokemonFilterChange}/>
				{this.renderContent()}
				{this.renderLoading()}
			</div>
		);
	}
}
export default HomeContainer;