import React from 'react';

export default class CarForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id:"",
			type:"",
			price:"",
			year:""
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.mode === "Edit") {
			this.setState({
				_id:nextProps.editableCar._id,
				type:nextProps.editableCar.type,
				price:nextProps.editableCar.price,
				year:nextProps.editableCar.year
			})
		}
	}

	onChange = (event) => {
		if (event.target.name === "type") {
			this.setState({
				type:event.target.value
			})
		}
		if (event.target.name === "price") {
			this.setState({
				price:event.target.value
			})
		}
		if (event.target.name === "year") {
			this.setState({
				year:event.target.value
			})
		}
	}

	submit = (event) => {
		event.preventDefault();
		let newCar = {
			"_id":this.state.id,
			"type":this.state.type,
			"price":this.state.price,
			"year":this.state.year
		}
		if(this.props.mode === "Add") {
			this.props.addCar(newCar);
			this.setState({
				type:"",
				year:0,
				price:0
			})
		}
		if (this.props.mode === "Edit")
		{
			this.props.updateCar(newCar);
		}
		this.setState({
			type:"",
			price:0,
			year:0
		})
	}


	render(){
		return(
			<div>
				<h2>Add new car</h2>
				<form onSubmit={this.submit}>
					<label htmlFor="type">Type</label>
					<input type="text"
							name="type"
							value={this.state.type}
							onChange={this.onChange}/>
					<br/>
					<label htmlFor="price">Price</label>
					<input type="number"
							name="price"
							value={this.state.price}
							onChange={this.onChange}/>
					<br/>
					<label htmlFor="year">Year</label>
					<input type="number"
							name="year"
							value={this.state.year}
							onChange={this.onChange}/>
					<br/>
					<input type="submit"
							name="submit"
							value={this.props.mode}/>
				</form>

			</div>
		)
	}

}