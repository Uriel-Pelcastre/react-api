import React from "react";
import { useEffect, useContext, useState, useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

let AppContext = React.createContext();

const AppProvider = ({ children }) => {
  let [data, setData] = useState([]); //iniciamos la data basia
  let [loading, setLoading] = useState(true);//iniciamos el loading en true
  let [searchTerm, setSearchTerm] = useState("a");//el estado en el buscador lo inicimos con la letra a

  const fetchData = useCallback(async () => {//utilizamos useCallback para memorizar la funcion
    try {
      setLoading(true);
      let response = await fetch(`${url}${searchTerm}`);//utilizamos un fetch para la informacion de la url y cambimos el valor de la letra (a)
      let resJson = await response.json();//damos un formato de json

      let { drinks } = resJson;
      if (drinks) {//validamos que la busqueda sea solo de bebidas
        let newCoc = drinks
          .filter((item) => {// hacemos ul filter de los items cuando la condicion se cumpla
            if (item.strAlcoholic === "Non Alcoholic") {//obtenemos los items de acuerdo a la propiedad strAlcoholic que procede de la api para mostrarlos
              return false;//si retorna falso se salta al siguiente
            }
            return true;
          })
          .map((item) => {//con el punto map recorremos todos los items encontrados de acuerdo a la condicion
            let {
              idDrink,
              strDrink,
              strAlcoholic,
              strGlass,               
              strDrinkThumb,
              strIngredient,
            } = item;
            return {
              id: idDrink,
              name: strDrink,
              alcohol: strAlcoholic,
              glass: strGlass,
              img: strDrinkThumb,
              ingredient: strIngredient,
            };
          });
        setData(newCoc);// actualizamos la data 
      } else {
        setData([]); // en caso de que la busqueda no arroje nada la data regresa bacia
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => { // con el useEffect regresamos la data con sus nuevos valores
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider value={{ loading, searchTerm, setSearchTerm, data }}>
      {children} 
    </AppContext.Provider>
  // ); consumimos la informacion del useContext
  );
};

export const useGlobal = () => {
  return useContext(AppContext);
};

export { AppProvider };


