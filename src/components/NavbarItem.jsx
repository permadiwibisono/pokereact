import React from 'react';
class NavbarItem extends React.Component{
	render()
	{
		var className='nav-item'+(this.props.active?' active':'');
		return(
			<li className={className}>
		        <a className="nav-link" href={this.props.link}>{this.props.title}</a>
		    </li>
		);
	}
}
export default NavbarItem;