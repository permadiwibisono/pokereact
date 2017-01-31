import React from 'react';
class LoadingGede extends React.Component{
	render()
	{
		return(
			<div>
				<img src="/src/img/Pokeball.PNG" style={{width:'100%',opacity:'0.2'}}/>
				<p className="text-center" style={{margin:15}}><b>{this.props.title}</b></p>				
			</div>
		);
	}
}
export default LoadingGede;