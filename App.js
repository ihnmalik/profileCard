import React, {Component} from 'react';
import { Container } from 'native-base'

import ProfileCard from './src/components/ProfileCard'

export default class App extends React.Component {
  render(){
    return (
      <Container style={{backgroundColor: '#EEEEEE', padding: 5}}>
        <ProfileCard />
      </Container>
    )
  }
}
