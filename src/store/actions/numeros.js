import {NUM_MIN_ALTEDADO , NUM_MAX_ALTEDADO} from './actionsType'

export function alterarNumeroMinimo(novoNumero){
    return {
        type: NUM_MIN_ALTEDADO,
        payload : novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero){
    return {
        type : NUM_MAX_ALTEDADO,
        payload: novoNumero
    }
}