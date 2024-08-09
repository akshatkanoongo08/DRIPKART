import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { homedata } from '../../Redux/action/GetProduct.action';
import "../../components/Cards/CardCont.css"
import Card from 'antd/es/card/Card';
import Cards from './Card';
const CardCont = () => {
    const {isLoading,data: data , error}=useSelector((state)=>state.home)
    console.log("ppppppp",data)

   
   
    const dispatch=useDispatch();
    // setdata(restro)
   
    useEffect(()=>{

        dispatch(homedata())

    },[dispatch])

    console.log(data)

  return (
    <>
          <h1 className='top-rated-title'> Top Rated Products</h1>

          <div style={{display:"flex",alignContent:"center",justifyContent:"space-around", flexWrap:"wrap" }} > 
   {

        // <Cards data={i}/>
        // console.log("iiiiiii",i)
       <Cards data={data}/>

  }
</div>
    </>
  )
}

export default CardCont