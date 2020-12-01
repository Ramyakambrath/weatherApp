import React ,{Component} from 'react';
import { FormGroup } from 'reactstrap'

const Home = () =>{
    const zipcode=userFormInput('')

return(
 <div>

    <div className='header'>
        <h2>Weather Forcast</h2>
    </div>
    <div className='instructions'>
        <p>Enter a US zipcode below to get the current weather conditions for that area.</p>
    </div>
    <div className='zipcodeInput'>
     <FormGroup>
      <form>
      
      <input type='text' placehoder='Enter Zipcode..' {...zipcode}/>
      <button > Enter</button>
      
      
      </form>
      </FormGroup>

    </div>


 </div>

)

function userFormInput(initialValue){

    const [value,setValue=useState(initialValue)]

    function handleChange(e){

        setValue(e.target.value)
    }
    
    return{
        value,
        onChange:handleChange
    }
   




}

