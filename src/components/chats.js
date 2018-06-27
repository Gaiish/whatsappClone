import React, {Component} from 'react'

import {View, FlatList, Alert} from 'react-native'

import Chat from './Chat'

export default class Chats extends Component{
  render(){
    return (
      <FlatList
        data={[1,2,3,4,5,6,7,8,9]}
        keyExtractor={(item)=> item}
        renderItem={({index})=>{
          //Alert.alert(item[0])
          return (<Chat />)
        } }
      />
    )
  }
}
