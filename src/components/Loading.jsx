import React from 'react';
class Loading extends React.Component{

	render(){
		var className="alert text-center "+this.props.classLoading;
		return(
				<div className={className} style={{padding:10}}>
					<strong>{this.props.loadingText}</strong>
				</div>
		);		
	}
}
export default Loading;