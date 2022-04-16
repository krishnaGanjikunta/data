import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'

const Display = () => {
    const products=useSelector((state)=>state)
    console.log(products)
  return (
    <div>
        <Home />
    </div>
  )
}

export default Display