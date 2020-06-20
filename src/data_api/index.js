import axios from 'axios';
import myData from './grid_data.json';
import grph_data from './graph_data.json';

//functions to fetch data

export const fetchData= async() =>{
	
	try{
		
		const response = myData; // loading json data
		//console.log(response); //checking the data
		
	    return response; // return data 
	}catch (error){

	}

};

//for array we need to map function to map each elements of an array

export const fetchDailyData= async() =>{
	
	try{
		
		const data = grph_data; // loading json data
		//console.log(response); //checking the data
		
	    return data.map(({ cost, profit, reportDate: date }) => ({ cost: cost.total, profit: profit.total, date })); // return data 
	}catch (error){

	}

};