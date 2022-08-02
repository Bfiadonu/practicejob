import React, { useState, useContext, useEffect } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [cocktail, setCocktail] = useState('')

    const fetchDrinks = async () => {
   
        try {
          const response = await fetch(`${url}`)
          const data = await response.json()
          const {drinks} =data ;
          console.log(data);
          if (drinks) {
            const newCocktail = drinks.map((item) => {
              const {
                idDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
              } = item
    
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass,
              }
            })
            setCocktail(newCocktail);
          }
          
        }catch (error) {
          console.log(error)
          
        }
      }
  
      
      return (
        <AppContext.Provider
          value={{ cocktail }}
        >
          {children}
        </AppContext.Provider>
      )
    }
    // make sure use
    export const useGlobalContext = () => {
      return useContext(AppContext)
    }
    
    export { AppContext, AppProvider }
