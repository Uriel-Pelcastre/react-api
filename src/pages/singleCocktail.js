import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  let [loading, setLoading] = useState(true);
  let [data, setData] = useState([]);
  let { id } = useParams();

  console.log(data);

  let fetchData = useCallback(async () => {
    try {
      let res = await fetch(`${url}${id}`);
      let resJson = await res.json();
      let { drinks } = resJson;
      console.log(drinks);
      if (drinks) {
        const newArray = drinks.map((drink) => {
          let {
            idDrink,
            strDrink,
            strAlcoholic,
            strGlass,
            strDrinkThumb,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = drink;
          let ingredient = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          return {
            id: idDrink,
            name: strDrink,
            alcohol: strAlcoholic,
            glass: strGlass,
            img: strDrinkThumb,
            ingredient,
          };
        });
        setData(newArray);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setData([]);
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [id, fetchData]);

  return (
    <main className='container'>
      {data.length < 1
        ? "No match"
        : data.map((item) => {
            let { id, name, img, alcohol, glass, ingredient } = item;
            const width = { width: "400px", marginLift: "50px" };
            const color = { backgroundColor: "green", color: "white" };
            return (
              <React.Fragment key={id}>
                <div className='d-flex justify-content-center'>
                  <div>
                    <div className='mb-5'>
                      <Link to='/' className='btn btn-success px-3 lead'>
                        B a c k H o m e
                      </Link>
                    </div>
                    <div className='mt-5'>
                      <h3 className='mt-0 fw-bold position-relative top-50 start-50 translate-middle text-center'>
                        {name}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className='row mt-4'>
                  <div className='col-12 col-lg-5 mb-5 ms-0 p-0'>
                    <img
                      style={width}
                      src={img}
                      alt={name}
                      className='rounded position-relative translate-middle top-50 start-50'
                    />
                  </div>
                  <div className='col-12 col-lg-7 d-flex align-items-center me-0 p-0'>
                    <div>
                      <p className='fw-bold'>
                        <span
                          className='px-2 py-1 rounded me-2 fw-bold'
                          style={color}
                        >
                          Name :
                        </span>
                        {name}
                      </p>
                      <p className='fw-bold'>
                        <span
                          className='px-2 py-1 rounded me-2 fw-bold'
                          style={color}
                        >
                          Alcohol :{" "}
                        </span>{" "}
                        {alcohol}
                      </p>
                      <p className='fw-bold'>
                        <span
                          className='px-2 py-1 rounded me-2 fw-bold'
                          style={color}
                        >
                          Glass :{" "}
                        </span>{" "}
                        {glass}
                      </p>
                      <p className='fw-bold'>
                        <span
                          className='px-2 py-1 rounded me-2 fw-bold'
                          style={color}
                        >
                          Ingredient :{" "}
                        </span>
                        {ingredient.map((item) => {
                          return item ? (
                            <span style={{ margin: "10px" }} key={id++}>
                              {item}
                            </span>
                          ) : null;
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </main>
  );
};

export default SingleCocktail;
