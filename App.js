import React, {Component} from 'react'
import {
  Header, Container, StyleProvider, Left, Text,
  Body, Title, Tab, Tabs, Icon, TabHeading, Button,
  Right
} from 'native-base'
import {StyleSheet} from 'react-native'
import CustomVariables from './native-base-theme/variables'
import getTheme from './native-base-theme/components'

export default class App extends Component{
  render(){
    return(
      <StyleProvider style={getTheme(CustomVariables)}>
        <Container>
          <Header hasTabs>
            <Left>
              <Title>WhatsApp</Title>
            </Left>
            <Right>
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
              <Text>dope</Text>
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
