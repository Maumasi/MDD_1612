import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  Dimensions,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import {
    ScreenWrapper,
    Section,
    SectionItem,
} from 'sharks_in_the_water/src/views/components/';

const { width, height } = Dimensions.get('window');
const styles = {
  background: {
    width,
    height,
    resizeMode: 'cover',
    alignSelf: 'center',
    position: 'absolute',
    top: 150,
    right: 0,
    left: 0,
    //bottom: -80,
  },

  wrapperScreen: {
    backgroundColor: 'rgba(95, 191, 234, 0.3)',
  },

  playerStatus: {
    position: 'absolute',
    top: 50,
    left:  (width / 4),
    width: (width / 2),
    height: (width / 2),
  },

  playerInfo: {
    marginTop: (height / 2.5),
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.65)',
    width: (width - 50),
    padding: 30,
  },

  statItem: {
    color: 'rgba(0, 0, 0, 0.75)',
    fontSize: 20,
    padding: 10,
    fontWeight: '200',
    paddingBottom: 3,
  },

  underLine: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 20,
  },

  playerStat: {
    fontWeight: 'bold',
  }
};


class PlayerStats extends Component {
  constructor(props) {
    super(props)
  }


  playerType() {
    let result;
    if(this.props.player.status == 'shark') {
      result = <Image style={ styles.playerStatus } source={ require('sharks_in_the_water/src/views/resources/shark_icon.png') }/>;
    } else {
      result = <Image style={ styles.playerStatus } source={ require('sharks_in_the_water/src/views/resources/fish_icon.png') }/>;
    }

    return result;
  }

  render() {
    console.log(this.props);
    const { player } = this.props;

    return (
      <ScreenWrapper theme={ styles.wrapperScreen }>
        <ScreenWrapper>
          <Image style={ styles.background } source={ require('sharks_in_the_water/src/views/resources/background.png') }/>
        </ScreenWrapper>

        <Section theme={ styles.playerInfo }>

          <SectionItem style={ styles.statSection } >
            <Text style={ styles.statItem }>Username:  <Text style={ styles.playerStat }>{ player.userName.toUpperCase() }</Text></Text>
            <View style={ styles.underLine } />
          </SectionItem>

          <SectionItem>
            <Text style={ styles.statItem }>Status:               <Text style={ styles.playerStat }>{ player.status.toUpperCase() }</Text></Text>
            <View style={ styles.underLine } />
          </SectionItem>

          <SectionItem>
            <Text style={ styles.statItem }>Fish caught:        <Text style={ styles.playerStat }>{ player.fish_caught }</Text></Text>
            <View style={ styles.underLine } />
          </SectionItem>

          <SectionItem>
            <Text style={ styles.statItem }>Times caught:    <Text style={ styles.playerStat }>{ player.times_caught }</Text></Text>
            <View style={ styles.underLine } />
          </SectionItem>
        </Section>
        { this.playerType() }
      </ScreenWrapper>
    );
  }
}


export { PlayerStats }
