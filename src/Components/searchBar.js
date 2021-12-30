import React, { useEffect, useState, useCallback } from 'react';
import Showcard from './ShowCard.js/showCard';

const Searchbar = (props) => {
    const [enteredName, setEnteredName] = useState('')
    const [enteredNameTouched, setEnternNameTouched] = useState(false)
    const [formIsValid, setFormIsValid] = useState(false)

    const [dex, setDex] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
  
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
      const fetchMoviesHandler = useCallback(async (url) => {
        setIsLoading(true)
        setError(null)
        try{
         const responce = await fetch(`${url}`)
         if (!responce.ok){
           throw new Error('Somthing went wrong!')
         }
         const data = await responce.json()
       
          console.log(data)
    
        }
        catch(error){
         setError(error.message)
        }
        setIsLoading(false)
      },[]);
      
      const formSubmissionHandeler = event => {
        event.preventDefault()
        setEnternNameTouched(true)
    
        if (!enteredName){
          return;
        }
        
        console.log(enteredName)
        const url = `https://pokeapi.co/api/v2/pokemon/${enteredName}`
        console.log(url)
        
        fetchMoviesHandler(url)
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
      </div>
      
    </form>

    );
}

export default Searchbar;
