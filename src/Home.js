import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Home = () => {
    const products=useSelector((state)=>state)
    const fetchproducts=async()=>{
        const responce=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log("Err" ,err)
        })
        console.log(responce)
    }

    useEffect(()=>{
        fetchproducts()
    },[])
    console.log(products)
  return (
    <div>
        <div class="card" style="width: 18rem;">
       <img class="card-img-top" src="" alt="Card image cap" />
       <div class="card-body">
       <h5 class="card-title">Card title</h5>
       <p class="card-text"></p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>
    </div>
    
  )
}

export default Home