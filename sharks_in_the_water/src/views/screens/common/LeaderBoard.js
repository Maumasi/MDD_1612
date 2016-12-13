
import _ from 'lodash';
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { mapMove, collectNearByPlayers } from 'sharks_in_the_water/src/controllers/actions/';


// components
import { LeaderBoardRow, Header } from 'sharks_in_the_water/src/views/components/';
import { LoginBG } from 'sharks_in_the_water/src/views/screens/';

const styles = {
  theme: {
    backgroundColor: 'rgba(95, 191, 234, 0.3)',
    flex: 1,
  },

  headerTheme: {
    paddingTop: 60,
    paddingBottom: 50,
    marginBottom: 5,
  },

  textTitle: {
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: 0,
    marginTop: 0,
    color: '#fff',
  },
};


class LeaderBoard extends Component {

  componentWillMount() {
    this.props.collectNearByPlayers();

    this.buildDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps : next set of props component will render
    //  this.props will still be the old props
    this.buildDataSource(nextProps);
  }

  // helper for data
  buildDataSource({ localPlayers, mapMove }) {
    const players = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.dataSource = players.cloneWithRows(localPlayers);
  }

  renderRow(localPlayers) {

    return (
      <LeaderBoardRow
        player={ localPlayers }
        onRowPress={ () => {
          // const marker = {
          //   lat: playersFromDB.lat,
          //   lng: playersFromDB.lng,
          //   delta: 0.03,
          //   focus: true,
          // };

          console.log('row pressed');
          console.log(localPlayers.uid);
          // bring user to a selected map marker

          // should bring user to selected player stat screen
          // Actions.mapArea({ type: 'reset' });
          // this.props.mapMove(marker);
        }}
      />);
  }

  render() {

    return (
      <View style={ [styles.theme] }>
        <LoginBG/>
        <Header
          theme={ [styles.headerTheme] }
          textTheme={ styles.textTitle }
          title={ 'Players in the Area' }
        />

        <ListView
          enableEmptySections
          dataSource={ this.dataSource }
          renderRow={ this.renderRow.bind(this) }
        />
      </View>
    );
  }
}


const mapStateToProps = (state) => {
  const { localPlayers } = state;


  return {
    localPlayers
  };
};


LeaderBoard = connect(mapStateToProps, { collectNearByPlayers, mapMove })(LeaderBoard);
export { LeaderBoard };
