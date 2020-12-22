import {NUM_MIN_ALTEDADO , NUM_MAX_ALTEDADO} from '../actions/actionsType'

const initialState = {
                min : 7,
                max : 10
}

const Reducers =  function (state  =  initialState, action){

    switch(action.type){
        case NUM_MIN_ALTEDADO:
           return {
               ...state,
               min:action.payload
           }
        case NUM_MAX_ALTEDADO:
            return {
                ...state,
                max:action.payload
            } 

           default:
               return state
            
    }

  
}

export default Reducers