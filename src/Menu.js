import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Plataforma from './componentes/Plataforma'
import Contador from './componentes/Contador'
import ValidarProps from './componentes/ValidarProps'
import Scrolling from './componentes/Scroll'
import Evento from './componentes/Evento'
import Avo from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoReversa'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: Flex
    },
    ListaFlex: {
        screen: ListaFlex
    },
    TextoSincronizado: {
        screen: TextoSincronizado
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva'/>
    },
    Evento: {
        screen: Evento
    },
    MegaSena: {
        screen: () => <MegaSena numeros={7}/>,
        navigationOptions: { title: 'Mega Sena' }
    },
    Inverter: {
        screen: () => <Inverter texto='React'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={34}/>,
        navigationOptions: { title: 'Par ou Impar' }
    },
    Simples: {
        screen: () => <Simples text='Flexivel!'/>
    },
    Plataforma: {
        screen: Plataforma
    },
    Contador: {
        screen: () => <Contador numero={23}/>
    },
    ValidarProps: {
        screen: () => <ValidarProps label="Testando ano: " ano={20}/>
    },
    Scrolling: {
        screen: () => <Scrolling/>
    }

}, { drawerWidth: 300 })