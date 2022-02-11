import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, name, alcohol, glass, img }) => {
  return (
    <>
      <div className='col-12 col-md-6 col-lg-4'>
        <div className='card mb-5 shadow-lg'>
          <img
            src={img}
            alt='Drink'
            className='card-img-top bg-image hover-zoom'
          />
          <div className='card-body'>
            <div>
              <h3 className='fw-bold'>{name}</h3>
            </div>
            <p className='fw-bold mb-2'>{glass}</p>
            {alcohol === "Alcoholic" ? null : (
              <p className='fw-lighter text-muted mt-0 mb-1'>{alcohol}</p>
            )}

            <Link to={`/kabab/${id}`} className='btn btn-success mt-0 p-1 py-0'>
              Detalles
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cocktail;
