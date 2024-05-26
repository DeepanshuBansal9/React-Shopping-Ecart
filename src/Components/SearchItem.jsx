import React from 'react'
import { useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { items } from './Data';
import Product from './Product';
const SearchItem = ({cart,setCart}) => {
const {term}=useParams();

const [filterData,setFilterData]=useState([]);

useEffect(()=>{
    const filteredData=()=>{
    const data = items.filter((p)=>p.title.toLowerCase().includes(term.toLocaleLowerCase())); 
    // console.log(data);
    setFilterData(data);
    }
    filteredData();
},[term])
  return (
    <div>
   <Product items={filterData}  cart={cart} setCart={setCart}/>
    </div>
  )
}

export default SearchItem