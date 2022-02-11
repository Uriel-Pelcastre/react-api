import React, { useRef, useEffect } from "react";
import { useGlobal } from "../context";
import Navbar from "./navbar";

const Search = () => {
  let { setSearchTerm } = useGlobal();// traemos los parametros para la busqueda

  let reference = useRef();// usamos useRef para modificar el estado

  useEffect(() => {
    reference.current.focus();//renderizamos el dom
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);//cambiamos el valor del estado mediante un componente de busqueda
  };
  return (
    <>
     <div>
     <Navbar/>
     </div>
     <br/>
      <div className='card w-50 text-center m-5 shadow'>
        <div className='card-body'>
          <form>
            <div className='mb-3 '>
              <label
                htmlFor='inputText'
                className='form-label fw-bold text-success d-flex justify-content-start'
              >
               Busca una Bebida
              </label>
              <input
                ref={reference}
                type='text'
                className='form-control'
                placeholder='Search for ...'
                id='inputText'
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Search;
