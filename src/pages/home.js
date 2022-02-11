import React from "react";

import { useGlobal } from "../context";

import Search from "../components/search";
import CocktailList from "../components/cocktailList";

const Home = () => {
  let { loading } = useGlobal();
  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          <Search />
        </div>
        <div className='d-flex justify-content-center'>
          {loading ? (
            <div
              className='spinner-grow'
              role='status'
              style={{ width: "4rem", height: "4rem" }}
            >
              <span className='visually-hidden'>Loading...</span>
            </div>
          ) : (
            <CocktailList />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
