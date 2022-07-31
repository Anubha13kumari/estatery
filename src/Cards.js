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
      location: "New York,USA",
      noOfBathroom: "2 bathrooms",
      noOfBeds: "3 beds",
      area: "5*7 m2",
      property: "Bunglow",
      date: ["January","04","2022"],
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
      property: "House",
      date: ["February","04","2022"],
    },
    {
      imageUrl:
        "https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/16:9/w_2560%2Cc_limit/ghaziabad-uttar-pradesh-homes-photos-1366x768.jpg",
      price: 600,
      title: "Paul",
      location: "New York,USA",
      noOfBathroom: "1 bathroom",
      noOfBeds: "2 beds",
      area: "4*3 m2",
      property: "Flat",
      date: ["Mon","04","2022"],
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
      date: ["Mon","04","2022"],
    },
    {
      imageUrl:
        "https://img.onmanorama.com/content/dam/mm/en/lifestyle/decor/images/2021/4/4/tiruvalla-nri-home-c.jpg",
      price: 1800,
      title: "Hibert",
      location: "California,USA",
      noOfBathroom: "4 bathrooms",
      noOfBeds: "6 beds",
      area: "12*15 m2",
      property: "Flat",
      date: ["Mon","04","2022"],
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
      date: ["Sun","13","2022"],
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtPPbztZJ5wnmscxpz6l1hAh7Z3O9xoDFPPQ&usqp=CAU",
      price: 3000,
      title: "William",
      location: "Texas,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "5 beds",
      area: "10*7 m2 ",
      property: "Flat",
      date: ["Mon","04","2022"],
    },
    {
      imageUrl:
        "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/41438/41438-b580.jpg",
      price: 4000,
      title: "William",
      location: "New York,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "4 beds",
      area: "11*9 m2 ",
      property: "House",
      date: ["Sat","10","2022"],
    },
    {
      imageUrl:
        "https://cdn.houseplansservices.com/product/63moi3e6vg5mbb8rmk0jcug42k/w620x413.jpg?v=18",
      price: 7000,
      title: "William",
      location: "California,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "6 beds",
      area: "11*8 m2 ",
      property: "House",
      date: ["Mon","02","2022"],
    },
    {
      imageUrl:
        "https://images.adsttc.com/media/images/629f/3517/c372/5201/650f/1c7f/large_jpg/hyde-park-house-robeson-architects_1.jpg?1654601149",
      price: 8000,
      title: "William",
      location: "New York,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "7 beds",
      area: "13*8 m2 ",
      property: "Bunglow",
      date: ["Thur","08","2022"],
    },
    {
      imageUrl:
        "https://images.familyhomeplans.com/cdn-cgi/image/fit=scale-down,quality=85/plans/44207/44207-b580.jpg",
      price: 6500,
      title: "William",
      location: "Texas,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "6 beds",
      area: "12*7 m2 ",
      property: "Bunglow",
      date: ["Wed","01","2022"],
    },
    {
      imageUrl:
        "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/2/7/3/BP_HHMTN310_Bolden_home-exterior_AFTER_0132.jpg.rend.hgtvcom.966.644.suffix/1549585070420.jpeg",
      price: 4800,
      title: "William",
      location: "New York,USA",
      noOfBathroom: "3 bathrooms",
      noOfBeds: "4 beds",
      area: "10*5 m2 ",
      property: "House",
      date: ["Tue","06","2022"],
    },
  ];
  const [filterData, setFilterData] = useState(data);

  return (
    <div className="cards__body">
      <Header
        setFilterData={setFilterData}
        filterData={filterData}
        data={data}
      />
      <div className="cards__container">
        {filterData.map((item) => (
          <article className="cards__card">
            <div className="cards__div">
              <img className="cards__img" src={item.imageUrl} alt=""></img>
              <h3 className="cards__price">
                ${item.price}
                <small>/month</small>
              </h3>
              <div className="cards__heart">
                <BsSuitHeart className="card__icon" />
              </div>
              <div className="cards__quantity">
                <small>{item.property}</small>
                <div className="cards__title">
                  <h3>{item.title}</h3>
                </div>
                <div className="cards__location">
                  <small>{item.location}</small>
                </div>
              </div>
            </div>
            <div className="cards__detail">
              <MdOutlineBed className="card__icon" /> {item.noOfBeds}{" "}
              <BiBath className="card__icon" />
              {item.noOfBathroom} <TbSquareRotated className="card__icon" />
              {item.area}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Cards;
