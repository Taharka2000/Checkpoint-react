import React from "react";
import produit from "./Product";
import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import Image from "./Image";
function App() {
  const hello = 'dsff'
  return (
    <>
      <div className="container mx-auto p-4 ">
        <div className="rounded bg-white max-w-lg shadow-lg p-6 p mx-auto flex flex-col">
          <div className="flex flex-row justify-around ">
            <Image image={produit.image} />
            <div className="pt-32">
              <button className="bg-black rounded-full text-white p-1 hover:bg-sky-700">Acheter</button>
            </div>
          </div>
          <Name name={produit.name} />
          <Description description={produit.description} />
          <Price price={produit.price} />
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold">
            Bonjour {hello ? hello : "La"}
          </p>
        {hello && <img className="h-1/5 w-1/3" src={produit.image} alt="" /> }
        </div>
      </div>
    </>
  )
}

export default App;