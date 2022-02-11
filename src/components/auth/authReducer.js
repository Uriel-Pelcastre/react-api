// un reducer es una funcion que resive un state el cual se puede igualar a un objeto vacio y una accion la cual modifica al state

import { types } from "../types/types";


const state={
    name:'Uriel',
    logged:true
}

export const authReducer=(state={},action)=>{

    switch (action.type) {

        case types.login:
            return{
                ...action.payload,
                logged:true
            }

            case types.logout:
                return{
                    logged:false
                }
    
        default:
            return state;
    }
}