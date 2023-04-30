import { useEffect,useState } from "react";
import React from "react";
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = props => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    //Used to fetch the data on page load
    useEffect(() => {
        const fetchMeals = async () =>{
           const response =  await fetch("https://react-http-9a35f-default-rtdb.firebaseio.com/meals.json");
           if(!response.ok){
            throw new Error("Something went wrong!");
           }
           const responseData = await response.json();
           const loadedMeals = [];
           for(const meal in responseData){
            loadedMeals.push({
                id:meal,
                name: responseData[meal].name,
                description: responseData[meal].description,
                price: responseData[meal].price
            });
           }
           setMeals(loadedMeals);
           setIsLoading(false);
        }
       
        //To catch an error while using async method
        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

        
    },[]);
    if(isLoading){
        return(
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        )
    }
    if(httpError){
        return(
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        )
    }
    const mealsList = meals.map(meals => <MealItem id = {meals.id} key={meals.id} name={meals.name} description={meals.description} price={meals.price} />);
    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );

};

export default AvailableMeals;
