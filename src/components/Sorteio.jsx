
import  React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

function Sorteio(props)  {
    const { max , min } = props   
    const numeroAle = parseInt(Math.random()  * (max - min ) + min)
    
    return (
        <Card title="Sorteio de numeros" purple>
            <div>
            <span>
                <span>Resultado:</span>
                <strong>{numeroAle}</strong>
            </span>
            </div>
        </Card>
    )
}

function mapstateToProps(state){
    return{
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mapstateToProps)(Sorteio)

