
const initial=[]
 export const reducer=(state,action)=>{
     const{type,payload}=action;
     switch(type){
         case "SET_PRODUCTS":
             return {...state,products:payload}
       default:
           return state  
     }
 }