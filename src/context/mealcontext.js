import React,{createContext, useEffect,useState} from 'react';

export const MealContextApi = createContext();

const MealContextApiProvider = (props) => {
    const[Meals,setMeals] = useState([]);

    async function getMealApi(){
       const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
       const result =  await response.json();

       setMeals(result.meals)
        
        

    }
    useEffect(()=>{
        getMealApi();
    },[setMeals])
   
    return ( 
    <MealContextApi.Provider value={{Meals,setMeals,getMealApi}}>{props.children}</MealContextApi.Provider>
     );
}
 
export default MealContextApiProvider;