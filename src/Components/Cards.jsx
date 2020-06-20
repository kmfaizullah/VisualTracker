import React from 'react';
import {Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

//fetching data 
//this is cards code
//I used here material material-ui/core
//it visualize the last data and date in grids

const Cards =({data: {income,profit,cost,lastUpdate}})=>{
	//checking if data is missing or not
	if(!income){
		return 'Loading...';
	}
	
	//definging cards, grids and showing the result
	return (
		
		<div className = {styles.container}>
			<Grid container spacing = {3} justify = "center">

				<Grid item component = {Card} xs ={12} md={3} className = {cx (styles.card, styles.income)}>
					<CardContent>
						<Typography color = "textPrimary" gutterBottom> Income</Typography>

						<Typography varaint = "h3"> 

							<CountUp
								start = {0}
								end = {income.value}
								duration ={2.5}
								separator = ","

							/>
						 </Typography>

						<Typography color = "textPrimary" gutterBottom> {new Date(lastUpdate).toDateString()}</Typography>

						<Typography varaint = "body2"> Annual Income of this Company </Typography>

					</CardContent>
				</Grid>

				<Grid item component = {Card} xs ={12} md={3} className = {cx (styles.card, styles.profit)}>
					<CardContent>
						<Typography color = "textPrimary" gutterBottom> Profit </Typography>

						<Typography varaint = "h3"> 	<CountUp
								start = {0}
								end = {profit.value}
								duration ={2.5}
								separator = ","

							/>
						 </Typography>

						<Typography color = "textPrimary" gutterBottom> {new Date(lastUpdate).toDateString()}</Typography>

						<Typography varaint = "body2"> Anual Profit of this Company </Typography>

					</CardContent>
				</Grid>

				<Grid item component = {Card} xs ={12} md={3} className = {cx (styles.card, styles.cost)}>
					<CardContent>
						<Typography color = "textPrimary" gutterBottom> Cost </Typography>

						<Typography varaint = "h3"> 
							<CountUp
								start = {0}
								end = {cost.value}
								duration ={2.5}
								separator = ","

							/>
						 </Typography>

						<Typography color = "textPrimary" gutterBottom> {new Date(lastUpdate).toDateString()}</Typography>

						<Typography varaint = "body2"> Annual cost of this company </Typography>

					</CardContent>
				</Grid>

			</Grid>

		</div>

	);
}

export default Cards;