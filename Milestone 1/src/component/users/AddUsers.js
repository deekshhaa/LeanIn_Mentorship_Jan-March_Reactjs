import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";



const AddUser=(props) => {
    const [enteredUser,setEnteredUser] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    // returns an array [0]=element,[1]=function only which can update value of [0].

         const userChangeHandler = (event) => {
        setEnteredUser(event.target.value);
    }
         const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }
   
          const addDataHandler = (event) => {
        event.preventDefault();
        if(enteredUser.trim().length === 0 || setEnteredAge.trim().length === 0){
            alert("Please enter valid input");
            return;
        }
        if(+enteredAge < 0 || +enteredAge>110){
            alert("Please eneter valid age");
            return;
        }
        props.onAdduser(enteredUser,enteredAge)
        setEnteredAge('');
        setEnteredUser('');
        
    }
   return (
       <Card>
           <form onSubmit={addDataHandler}>
               <label htmlFor="username">Username</label>
               <input id="username" type="text" onChange={userChangeHandler} value={enteredUser}></input>
               <label htmlFor="age">Age</label>
               <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
         <Button type="submit">Submit</Button>  

           </form>
       </Card>
   );
    
 };
    
export default AddUser;





