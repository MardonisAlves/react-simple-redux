import { createStore , combineReducers}  from 'redux'

const redurcers = combineReducers({
    numeros: function(state , action){
        console.log(state , ' ' , action)

        return{
            min : 1,
            max : 10
        }
    },
    nomes : function(state , action) {
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