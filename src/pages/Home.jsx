import React from "react";
import Giftcard from "../components/cards/Giftcard";
import { cardData } from "../data/data";

const Home = () => {
  return (
    <>
      <div className="flex home">
        <div className="pt-20 pb-24 pr-80 pl-10 pb-6 top">
          <div className="pr-20 pl-20">
            <h1 className="text-yellow-500 mb-4">Lorem ipsum dolor sit ame</h1>
            <p className="text-sm text-white pr-80">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="pr-20 pl-20 pt-10 relative text-gray-600">
            <input
              className="border-2 border-gray-300 bg-white h-8 px-5 pr-16 rounded-full text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
            />
            {/* <button
              type="submit"
              className=" absolute right-10 top-0 mt-5 mr-4 "
            >
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                style={{ enableBackground: "new 0 0 56.966 56.966" }}
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
      <div className=" pl-20 pr-20 pt-16 pb-16">
        <p style={{ color: "#333365" }} className="font-bold text-2xl">
          POPULAR GIFT CARDS
        </p>
        <hr
          style={{ width: "5%", borderRadius: "100px", borderWidth: "1.5px" }}
        />
      </div>
      <div className="flex flex-wrap pl-24 pr-20">
        {cardData.map((card, index) => (
          <Giftcard
            key={index}
            image={card.image}
            title={card.title}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
