import React from 'react';
import NavbarItem from './NavbarItem.jsx';
class Navbar extends React.Component{
	constructor(props)
	{
		super(props);
		console.log(props);
		this.state={
			'item':[{
				title:'Home',
				link:'#',
				active:true,
			},
			{
				title:'About',
				link:'#',
				active:false,
			}]
		}
	}
	render(){
	      var itemList=this.state.item.map((item,key)=>
	      	<NavbarItem title={item.title} active={item.active} link={item.link} key={key}/>
	      );
		return(
			<nav className="navbar navbar-toggleable-md navbar-light bg-faded">
			  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <a className="navbar-brand" href="#">{this.props.brandName}</a>

			  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			    <ul className="navbar-nav mr-auto">
			    	{itemList}
			    </ul>
			  </div>
			</nav>
			);

	}
}
Navbar.defaultProps = {
   brandName:'Navbar'
}
export default Navbar;