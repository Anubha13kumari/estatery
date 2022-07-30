import React, { useState } from "react";
import "./Cards.css";
import { BsSuitHeart } from "react-icons/bs";
import { MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { TbSquareRotated } from "react-icons/tb";
import Header from "./Header";

function Cards() {
  const data = [
    {
      imageUrl:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: " 2,400",
      title: "Palm Harbour ",
      location:
        "New York,USA",
      noOfBathroom: "2 bathrooms",
      noOfBeds: "3 beds",
      area: "5*7 m2",
      property: "Bunglow",
    },
    {
      imageUrl:
        "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/08/download-23.jpg",
      price: 5000,
      title: "Albert gue",
      location: "Texas,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "4 beds",
      area: "9*6 m2",
      property: "Bunglow",
    },
    {
      imageUrl:
        "https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/16:9/w_2560%2Cc_limit/ghaziabad-uttar-pradesh-homes-photos-1366x768.jpg",
      price: 1800,
      title: "Paul",
      location: "New York,USA",
      noOfBathroom: "1 bathroom",
      noOfBeds: "2 beds",
      area: "4*3 m2",
      property: "Bunglow",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBFAcoYUKdmY1Zkr67auyU4KYNJfI9SRONDHkWmHVCOSDoKuyYfY74CkRiEDhRE_lUMdo&usqp=CAU",
      price: 3000,
      title: "Robert",
      location: "California,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "5 beds",
      area: "9*8 m2",
      property: "House",
    },
    {
      imageUrl:
        "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2021/4/4/tiruvalla-nri-home-c.jpg",
      price: 4500,
      title: "Hibert",
      location: "California,USA",
      noOfBathroom: "4 bathrooms",
      noOfBeds: "6 beds",
      area: "12*15 m2",
      property: "Flat",
    },
    {
      imageUrl:
        "https://2.bp.blogspot.com/-z_OXnm2lnR8/W7X_MZy96TI/AAAAAAABO9k/di_jCEarBOMiXAhexS8cKd1e7qpg2Vk6gCLcBGAs/s1920/flat-contemporary-residence.jpg",
      price: 8000,
      title: "Oliver",
      location: "Texas,USA",
      noOfBathroom: "6 bathrooms",
      noOfBeds: "7 beds",
      area: "25*18 m2",
      property: "Bunglow",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPPbztZJ5wnmscxpz6l1hAh7Z3O9xoDFPPQ&usqp=CAU",
      price: 3500,
      title: "William",
      location: "Texas,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "5 beds",
      area: "10*7 m2 ",
      property: "Flat",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPPbztZJ5wnmscxpz6l1hAh7Z3O9xoDFPPQ&usqp=CAU",
      price: 3500,
      title: "William",
      location: "New York,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "5 beds",
      area: "10*7 m2 ",
      property: "House",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPPbztZJ5wnmscxpz6l1hAh7Z3O9xoDFPPQ&usqp=CAU",
      price: 3500,
      title: "William",
      location: "California,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "5 beds",
      area: "10*7 m2 ",
      property: "House",
    },
  ];
  const [filterData, setFilterData] = useState(data);

  return (
    <div className="cards__body">
      <Header setFilterData={setFilterData} filterData={filterData} data={data}/>
      <div className="cards__container">
        {filterData.map((item) => (
          <article className="cards__card">
            <div className="stathome__div">
              <img className="stathome__img" src={item.imageUrl} alt=""></img>
              <h5 className="stathome__info">${item.price}<small>/per month</small></h5>
              
              <div className="cards__heart">
                <BsSuitHeart className="card__icon" />
              </div>
            </div>
            <div className="stathome__quantity">
            <small>{item.property}</small>
              <h3>{item.title}</h3>
            <small>{item.location}</small>
            </div>
            
            <div>
              <div>
                <MdOutlineBed className="card__icon" /> {item.noOfBeds} <BiBath className="card__icon" />
                {item.noOfBathroom} <TbSquareRotated className="card__icon" />
                {item.area}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Cards;
