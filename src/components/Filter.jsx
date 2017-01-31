import React from 'react';

class Filter extends React.Component{
	render(){
		return (

			<form className="form-horizontal">
				<div className="form-group row">
					<label className="offset-6 col-md-3 col-control-label text-right" style={{paddingTop:10}}>Tipe Pokemon</label>
					<div className="col-md-3">
						<select className="form-control text-capitalize" onChange={this.props.onTipePokemonFilterChange}>
							{this.props.filters.map((f,key) => {return (<option key={key} value={f.value}>{f.text.toUpperCase()}</option> );})}
						</select>
					</div>
				</div>
			</form>

		);		
	}
}
export default Filter;
Filter.propTypes={
	filters:React.PropTypes.array.isRequired,
	onTipePokemonFilterChange:React.PropTypes.func.isRequired
}