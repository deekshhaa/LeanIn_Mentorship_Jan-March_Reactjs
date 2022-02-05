input Button from "./Button";
input Card from "../UI/Card";
input { useState } from "react";

const AddUSers =()=>{
const[enteredUser,setEnteredUSer] = useState('');
const[enteredAge,setEnteredAge] = useState('');

// useState = returns ana array[0] = element[1] = a function nly which can update the value of [0]
// non-empty inputs, age>1
 const addDataHandler=(event)=>
 {
     event.preventDefault();
     if(enteredUser.trim().length===0||enteredAge.trim().length===0){
         return;
     }
     if(+enteredAge<0){
         return;
     }
     console.log(enteredAge,enteredUSer);
    setEnteredAge('');
    setEnteredUSer('');

 }

const userChangeHandler=(event)=>{
setEnteredUSer(event.target.value);
console.log(enteredAge,enteredser);
}

const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
}
return(
    <Card>
        <form onSubmit={addDataHandler}>
             <label htmlFor="UserName"> </label>
             <input id="username" type = "text" onChange={useChangeHandler} value={enteredUser}></input>
             <label htmlFor="Age">Age</label>
             <input id="Age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
             <Button type="submit"> Submit data</Button>

        </form>
    </Card>
)


}

export default AddUSers;





