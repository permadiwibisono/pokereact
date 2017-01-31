import React from 'react';
import Container from './src/components/Container.jsx';
import HomeContainer from './src/components/HomeContainer.jsx';
import Pokemon from './src/components/Pokemon/Pokemon.jsx';
import { Router, Route, browserHistory,IndexRoute,hashHistory } from 'react-router'
class App extends React.Component{
	render(){
		return (
			<Router history={hashHistory}>
			    <Route path="/" component={Container}>
			    	<IndexRoute component={HomeContainer}/>		
			    	<Route path="/pokemon/:pokemon" component={Pokemon}/>
			    </Route>
		  	</Router>
		);
	}
}
export default App;