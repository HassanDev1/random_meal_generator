import React, { useContext,useState} from 'react';
import {Button} from '@material-ui/core';
import { MealContextApi } from '../../context/mealcontext';
import RecipeReviewCard from '../../component/recipe_car';


const Home = () => {
    const{Meals,getMealApi} =  useContext(MealContextApi);
    const[category,setcategory]=useState('');
    const[name,setname]=useState('');
    const[instruction,setinstruction]=useState('');
    const[image,setImage] = useState('');
    const[display,setDisplay] = useState(false);

    const handleClick=()=>{
       Meals.map(meal=>{
           setcategory(meal.strCategory);
           setinstruction(meal.strInstructions);
           setname(meal.strMeal);
           setImage(meal.strMealThumb);
           setDisplay(true)
          return getMealApi();
        
       })
       
    } 
    console.log(Meals)
   
    return (<div>
        <h3>Feeling Hungry and don't know what to eat</h3>
        <Button variant="contained" color="primary"
        onClick={handleClick}>Click here</Button>
        <div style={{display:'flex',
        justifyContent:'center',
    alignContent:'center'}}>
            {display&&
            <RecipeReviewCard image={image} category={category} name={name} instruction={instruction}/>
            }
    

        </div>

    </div>  );
}
 
export default Home;