import {db} from '../firebase';
import React,{useState,useEffect} from 'react';
export default function Farm  ()  {
   
const [farms,setFarms]=useState([])
  const fetchFarms=async()=>{
    const response=db.collection('Farms1');
    const data=await response.get();
    data.docs.forEach(item=>{
     setFarms([...farms,item.data()])
    })
  }
  useEffect(() => {
    fetchFarms();
  }, [])
  return (
    <div className="App">
      {
        farms && farms.map(farm=>{
          return(
            <div className="blog-container">
              <h4>{farm.Temperature}</h4>
              <h4>{farm.Humidity}</h4>
              <h4>{farm.Water_level}</h4>
              <h4>{farm.Water_temp}</h4>
              <h4>{farm.pH}</h4>
              <h4>{farm.EC}</h4>
            </div>
          )
        })
      }
    </div>
  );
}
