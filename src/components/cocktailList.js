import React from "react";
import Cocktail from "./cocktail";
import { useGlobal } from "../context";

const CocktailList = () => {
  let { data } = useGlobal();// traemos la data del context para mostrar una lista de bebidas
  return (
    <>
      <div className='row'>
        {data.map((item) => {
          return <Cocktail key={item.id} {...item} />;
          // recorremos la data y mostramos la lista de bebidas de acuerdo a un diseno
        })}
      </div>
    </>
  );
};

export default CocktailList;
