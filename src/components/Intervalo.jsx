import './Intervalo.css'
import  React from 'react'

import Card from './Card'
import { connect } from 'react-redux'
import {alterarNumeroMinimo ,alterarNumeroMaximo} from '../store/actions/numeros'


function Intervalo(props){

    const {min  , max } = props
  

    return (
        <Card title="Intervalo de numeros" red>
            <div className="Intervalo">
            <span>
                <strong>Minimo :</strong>
                <input type="number" value={min} 
                onChange={e => props.altearMinimo(+e.target.value)}   />
            </span>
             <span>
                <strong>Maximo :</strong>
                <input type="number" value={max} 
                onChange={e => props.alterarMaximo(+e.target.value)}  />
            </span>
            </div>
        </Card>
    )
}

function mapstateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch){
    return {
        altearMinimo(novoNumero){
            // action creator
            const action =  alterarNumeroMinimo (novoNumero)
                    dispatch(action)
            },
        alterarMaximo(novoNumero){
                // action creator
                const action =  alterarNumeroMaximo(novoNumero)
                        dispatch(action)
                }
        }
    }

export default connect(mapstateToProps , mapDispatchToProps)(Intervalo)

