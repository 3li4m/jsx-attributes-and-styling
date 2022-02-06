import React from "react";
import ReactDOM from "react-dom";

/*
 * we can add the class attribute as we do in normal html but
 * it will encounter issues as it renders down to js
 * the proper way to handle it will be to use className
 * the convention in JSX is to name it as if its .JS by camel casing
 */

const randImage = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>

    <img
      className="food-Image"
      alt="Burgers"
      src="https://imagesvc.meredithcorp.io/v3/jumpstartpure/image?url=https://static.onecms.io/wp-content/uploads/sites/19/2005/06/22/429048911_6152425885001_6152427053001-vs.jpg&w=1280&h=720&q=90&c=cc"
    ></img>
    <img
      className="food-Image"
      alt="Pizzas"
      src="https://images-gmi-pmc.edge-generalmills.com/5bafad10-dbc7-4bf7-a44f-f9fb672725d5.jpg"
    ></img>
    <img
      className="food-Image"
      alt="Noodles"
      src="https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Noodles-with-chilli-oil-eggs-6ec34e9.jpg"
    ></img>

    <img alt="random imagery" src={randImage} />
    <img alt="random imagery" src={randImage + "?grayscale"} />
  </div>,
  document.getElementById("root")
);

// js can be inserted as an attribute

// Html elements can be closed with /(self closing tag)
// at the end of the opening tag to close it
// as it does not have any children inside of it
