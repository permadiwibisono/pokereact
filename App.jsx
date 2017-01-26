import React from 'react';
import Navbar from './src/components/Navbar.jsx';
import HomeContainer from './src/components/HomeContainer.jsx';
class App extends React.Component{
	render(){
		return (
			<div>
				<Navbar brandName="POKEREACT"/>
				<HomeContainer/>
			</div>
		);
	}
}
export default App;