import React, {Component} from 'react'
import {
  Header, Container, StyleProvider, Left, Text,
  Body, Title, Tab, Tabs, Icon, TabHeading, Button,
  Right
} from 'native-base'
import {StyleSheet} from 'react-native'
import CustomVariables from './native-base-theme/variables'
import getTheme from './native-base-theme/components'

import Chats from './src/components/chats'

export default class App extends Component{
  render(){
    return(
      <StyleProvider style={getTheme(CustomVariables)}>
        <Container>
          <Header hasTabs androidStatusBarColor='#054E47'>
            <Left>
              <Title>WhatsApp</Title>
            </Left>
            <Right>
              <Button transparent>
                <Icon name='search' style={{fontSize: 20}} />
              </Button>
              <Button transparent>
                <Icon name='md-more' />
              </Button>
            </Right>
          </Header>
          <Tabs initialPage={1}>
            <Tab heading={
              <TabHeading>
                <Icon name='camera' />
              </TabHeading>
            }>
              <Text>dope</Text>
            </Tab>
            <Tab heading='CHATS'>
              <Chats />
            </Tab>
            <Tab heading='STATUS'>
              <Text>dope</Text>
            </Tab>
            <Tab heading='CALLS'>
              <Text>dope</Text>
            </Tab>
          </Tabs>
        </Container>
      </StyleProvider>
    )
  }
}
