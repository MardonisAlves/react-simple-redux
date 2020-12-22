import { createStore , combineReducers}  from 'redux'

const redurcers = combineReducers({
    numeros: function(state , action){
        console.log('Reducres Numeros')
        console.log(state , ' ' , action)

        switch(action.type){
            case 'NUM_MIN_ALTEDADO':
               return {
                   ...state,
                   min:action.payload
               }
            case 'NUM_MAX_ALTEDADO':
                return {
                    ...state,
                    max:action.payload
                } 

               default:
                return{
                    min : 7,
                    max : 30
                }   
        }

      
    },
    nomes : function(state , action) {
        console.log('Reducers nomes')
        console.log(state , ' ' , action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
})

function storeConfig(){
    return createStore(redurcers)
}

export default storeConfig