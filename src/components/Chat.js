import React from 'react'
import {
  Text, Thumbnail
} from 'native-base'
import {Col, Row, Grid} from 'react-native-easy-grid'
import {StyleSheet, TouchableOpacity} from 'react-native'

export default ()=>(
  <TouchableOpacity style={styles.chatBtn}>
    <Grid>
      <Row style={{height: 70}}>
        <Col size={1} style={styles.col}>
          <Thumbnail style={{width:58, height: 58}}
            source={{uri: 'http://astrokentico.s3.amazonaws.com/rojakdaily/media/1nichoras/iron%20man%20model%20prime/iron-man.jpg?ext=.jpg'}} />
        </Col>
        <Col size={4} style={styles.col1}>
          <Row >
            <Col size={2}>
              <Text>Iron Man</Text>
            </Col>
            <Col size={2} style={styles.timeCol}>
              <Text note style={styles.timestamp}>YESTERDAY</Text>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Text style={{fontSize: 15}} note>Hey Gadi, some help here</Text>
          </Row>
        </Col>
      </Row>
    </Grid>
  </TouchableOpacity>
)

const styles=StyleSheet.create({
  col: {
    padding: 10
  },
  col1:{
    paddingTop: 12,

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
  chatBtn: {
    height: 80,
  },
  row:{
    marginRight: 15,
    borderBottomWidth: 0.4,
    borderBottomColor: 'rgba(0,0,0,0.2)'
  }
})
