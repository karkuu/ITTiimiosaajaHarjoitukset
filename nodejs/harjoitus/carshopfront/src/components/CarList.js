import React from 'react';

export default class CarList extends React.Component {

	onBuyCar = (event) => {
		this.props.buyCar(event.target.name);
	}

	onEditCar = (event) => {
		this.props.editCar(event.target.id);
	}


	render() {
		let tempView = {};

		if (this.props.carList.length === 0) {
			tempView = <p>Nothing to show.</p>
		}
		else {
			tempView = this.props.carList.map((car) => 
				<tr key={car._id}>
					<td>{car.type}</td>
					<td>{car.price}</td>
					<td>{car.year}</td>
					<td><button name={car._id}
								onClick={this.onBuyCar}>Buy</button></td>
					<td><button name={car._id}
								onClick={this.onEditCar}>Edit</button></td>
				</tr>
			)
		}


		return (
			<div>
				<center>
					<table>
						<head>
							<tr>
								<td>Type</td>
								<td>Price</td>
								<td>Year</td>
								<td>Buy</td>
								<td>Edit</td>
							</tr>
						</head>
						<tbody>
							{tempView}
						</tbody>
					</table>
				</center>
			</div>
		)
	}

}