import React from 'react';
import Navbar from './Navbar.jsx';
class Container extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<Navbar brandName="POKEREACT"/>
	  			{this.props.children}				
			</div>
		);
	}
}
export default Container;