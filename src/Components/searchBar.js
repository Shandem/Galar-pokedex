import React, { useEffect, useState } from 'react';
import Showcard from './ShowCard.js/showCard';

const Searchbar = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnternNameTouched] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)

    const [sprite, setSprite] = useState([])
    const [mon, setMon] = useState([])

  
    const enteredNameIsValid = enteredName.trim() !== ''
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched
    

    useEffect(() =>{
        if (enteredName){
          setFormIsValid(true)
        }else{
          setFormIsValid(false)
        }
      },[enteredNameIsValid])
    
      const nameInputChangeHandeler = event => {
        setEnteredName(event.target.value)
      }
    
      const nameInputBlurHandeler = event => {
        setEnternNameTouched(true)
      }
      
      
    function fetchSearchHandler (enteredName){
      const url = `https://pokeapi.co/api/v2/pokemon/${enteredName}`
      fetch(`${url}`)
        .then(responce => {return responce.json()})
        .then(data => {
          console.log(data)
          
          return setMon(data) 
          
        })
       
       
    }
      
      const formSubmissionHandeler = event => {
        event.preventDefault()
        setEnternNameTouched(true)
    
        if (!enteredName){
          return;
        }
        console.log(enteredName)
        const url = `https://pokeapi.co/api/v2/pokemon/${enteredName}`
        console.log(url)
        fetchSearchHandler(enteredName)
         
        setEnteredName('')
        setEnternNameTouched(false)
      }
      

      const nameInputClasses = enteredNameIsValid 
      ? 'form-control invalid' 
      : 'form-control '

    return (  
        <form onSubmit={formSubmissionHandeler}>

            <div className={nameInputClasses}>
                <label htmlFor='name'>Pokemon's Name</label>
                <input type='text' 
                value={enteredName} 
                id='name' 
                onChange={nameInputChangeHandeler}
                onBlur={nameInputBlurHandeler}
                />
            </div>
            {nameInputIsInvalid && <p className="error-text">Name Must not be empty!</p>}
            <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
        {mon ? <Showcard mon={mon}/> : <p>nothing to show</p>}
      </div>
       
    </form>

    );
}

export default Searchbar;
