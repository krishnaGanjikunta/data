export const setProducts=(products)=>async dispatch=>{
 dispatch({
     type:SET_PRODUCTS,
     payload:products
 })
}
export const selectedProduct=(product)=>{
    return{
        type:SELECTED_PRODUCTS,
        payload:product
    }
   }