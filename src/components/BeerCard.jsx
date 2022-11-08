import React from 'react';

const BeerCard = ({ beer, setPage, index }) => {
  console.log(index)
  return (
    <article className="column is-one-quarter ">
      <div className="box m-2 fullheight">
        <h2 className='title'>{beer.name}</h2>
        <div className="columns ">
          <div className="column">
            <img src={beer.image_url} alt={beer.name} className="card_image m-2" />
          </div>
          <div className="column">
            <p className=""><span>Tag Line : </span>{beer.tagline}</p>
            <button className="button is-black m-4" onClick={() => setPage({ name: "OneProduct", id: index })}>
              More details
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BeerCard;