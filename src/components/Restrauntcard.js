
import React from "react";
import { CDN_Url } from "../utils/Common";

const Restrauntcard = ({ name, cloudinaryImageId, avgRating, cuisines }) => {
    // console.log(props);
    return (
        <div className="restrauntcard">
            <img src={CDN_Url+ cloudinaryImageId} alt={cloudinaryImageId}  className="restaurant-image"/>
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating} Stars</h4>
        </div>
    );
};

export default Restrauntcard;


