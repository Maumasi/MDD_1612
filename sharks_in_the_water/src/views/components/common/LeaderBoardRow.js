import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Section } from 'sharks_in_the_water/src/views/components/';

const styles = {
  theme: {
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.45)',

    marginVertical: 5,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    marginHorizontal: 10,
    padding: 10,
    flexDirection: 'row',
  },

  usernameButton: {
    flex: 4,
  },

  textTheme: {
    padding: 1,
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: 16,
    fontWeight: 'bold',
  },

  statsButton: {
    flex: 1,
    padding: 1,
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
  },

  statsText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.85)',
  }
};


class LeaderBoardRow extends Component {

  playerStats() {
    console.log('button pressed');
    console.log(this.props.player);
    Actions.playerStats({ player: this.props.player });
  }

  render() {
    const { player, onRowPress } = this.props;

    console.log('player');
    console.log(player);
    return (
      <View style={ styles.theme } >
        <Section theme={ styles.usernameButton } >
            <TouchableOpacity onPress={ this.playerStats.bind(this) } >
              <Text style={ styles.textTheme } >{ player.userName }</Text>
          </TouchableOpacity>
        </Section>

        <Section theme={ styles.statsButton }>
            <TouchableOpacity onPress={ this.playerStats.bind(this) } >
              <Text style={ styles.statsText }>stats</Text>
          </TouchableOpacity>
        </Section>
      </View>
    );
  }
}

export { LeaderBoardRow };
