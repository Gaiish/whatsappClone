import React, {Component} from 'react'
import {
  Text, Thumbnail
} from 'native-base'
import {Col, Row, Grid} from 'react-native-easy-grid'
import {StyleSheet} from 'react-native'

export default class Chats extends Component{
  render(){
    return (
      <Grid>
        <Row>
          <Col size={1} style={styles.col}>
            <Thumbnail style={{width:58, height: 58}}
              source={{uri: 'http://astrokentico.s3.amazonaws.com/rojakdaily/media/1nichoras/iron%20man%20model%20prime/iron-man.jpg?ext=.jpg'}} />
          </Col>
          <Col size={4} style={styles.col1}>
            <Row style={styles.row}>
              <Col size={2}>
                <Text>Iron Man</Text>
              </Col>
              <Col size={2} style={styles.timeCol}>
                <Text note style={styles.timestamp}>YESTERDAY</Text>
              </Col>
            </Row>
            <Row style={styles.row}>
              <Text note>Hey Gadi, some help here</Text>
            </Row>
          </Col>
          {/*<Col size={1} style={styles.col2}>
          </Col>*/}
        </Row>
      </Grid>
    )
  }
}

const styles=StyleSheet.create({
  col: {
    padding: 10
  },
  col1:{
    paddingTop: 17
  },
  col2:{
    paddingTop: 13,
    paddingRight: 4,
  },
  timestamp:{
    fontSize: 11,
    paddingTop: 5
  },
  timeCol: {
    paddingLeft: 80
  },
  row:{
    padding: 0,
    margin: 0
  }
})
