import React, { useEffect, useState } from 'react';
import RestrauntCard from '../components/Restrauntcard'; 
import RestrauntList from "../utils/mock_data";


const Body = () => {

    
    const [restaurants, setRestaurants] = useState([]);
    useEffect(()=>{
        fatchdata();

    },[]);
    const fatchdata=async()=>{
        const data=await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json =await data.json();
        console.log(json);
        setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    

    // const handleFilter = () => {
    //     let filteredRestaurants = RestrauntList.filter(restaurant => restaurant.info.avgRating > 4);
    //     setRestaurants(filteredRestaurants);
    // };

    return (
        <div className='body'>
           
            <div>
                <button className='filter_btn' onClick={()=>{
                    let filteredRestaurants = RestrauntList.filter(restaurant => restaurant.info.avgRating > 4);
        setRestaurants(filteredRestaurants);
                }}>Filter</button>
                <input type='inputdata'>user input </input>
                <button className='submit' onClick={()=>{
                    let Usersubmit=RestrauntList.filter()
                }}>Submit</button>

            </div>
            <div className='Cards'>

                {restaurants.map((restaurant)=> {
                    return<RestrauntCard key={restaurant.info.id} {...restaurant.info}></RestrauntCard>
                    
                                            
                })}
            </div>
        </div>
    );
};

export default Body;


// import React, { useEffect, useState } from 'react';
// import RestrauntCard from '../components/Restrauntcard'; 
// import RestrauntList from "../utils/mock_data";

// const Body = () => {
//     const [restaurants, setRestaurants] = useState([]);
//     const [inputValue, setInputValue] = useState('');

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const data = await fetch(
//             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.95250&lng=75.71050&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//         );
//         const json = await data.json();
//         setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     }

//     const handleFilter = () => {
//         let filteredRestaurants = RestrauntList.filter(restaurant => restaurant.info.avgRating > 4);
//         setRestaurants(filteredRestaurants);
//     };

//     const handleSubmit = () => {
//         const filteredRestaurant = RestrauntList.filter(restaurant => restaurant.info.name.toLowerCase() === inputValue.toLowerCase());
//         setRestaurants(filteredRestaurant);
//     };

//     return (
//         <div className='body'>
//             <div>
//                 <button className='filter_btn' onClick={handleFilter}>Filter</button>
//                 <input 
//                     type='text' 
//                     value={inputValue} 
//                     onChange={(e) => setInputValue(e.target.value)} 
//                     placeholder="Enter restaurant name" 
//                 />
//                 <button className='submit' onClick={handleSubmit}>Submit</button>
//             </div>
//             <div className='Cards'>
//                 {restaurants.map((restaurant) => (
//                     <RestrauntCard key={restaurant.info.id} {...restaurant.info}></RestrauntCard>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Body;
