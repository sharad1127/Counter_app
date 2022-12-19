import { DECREMENT, INCREMENT, RESET } from "./action-types"

export const increaseValue=(number=1)=>{
    return{
        type:INCREMENT,
        payload:number

    }
}
export const deccreaseValue=(number=1)=>{
    return{
        type:DECREMENT,
        payload:number
       
    }
}
export const resetValue=(number=0)=>{
    return{
        type:RESET,
        payload:number
       
    }
}