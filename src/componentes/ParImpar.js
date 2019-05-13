import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

function parOuImpar(num) {
    const v = num % 2 == 0 ? 'par' : 'impar'
    return <Text style={Padrao.exe}>{num} {v}</Text>
}

export default props =>
    <View>
        {parOuImpar(props.numero)}
    </View>

// export default props => 
//     <View>
//         <If test={props.numero % 2 == 0}>
//             <Text style={Padrao.exe}>PAR</Text>
//         </If>
//         <If test={props.numero % 2 == 1}>
//             <Text style={Padrao.exe}>IMPAR</Text>
//         </If>
//     </View>