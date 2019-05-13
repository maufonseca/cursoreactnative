import React from 'react'
import { Text, View, ScrollView, TextInput, KeyboardAvoidingView} from 'react-native'
import Padrao from '../estilo/Padrao'

const Scrolling = props => 
<KeyboardAvoidingView
      style={Padrao.container}
      behavior="padding"
    >
    <ScrollView>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 25 }}>Ahah</Text>
    <Text style={{ fontSize: 15 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 15 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 37 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 25 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <Text style={{ fontSize: 35 }}>Ahah</Text>
    <TextInput
          placeholder="Type here to translate!"
        />
    <View style={{height: 400}}/>
    </ScrollView>
</KeyboardAvoidingView>
   

export default Scrolling