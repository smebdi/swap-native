import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StatusBar,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../config/colors';
const {height, width} = Dimensions.get('window');

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    height: height,
    width: width,
    paused: false,
  };

  componentDidMount() {
    Dimensions.addEventListener('change', () => {
      this.setState({
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      });
    });
  }

  pauseButton = () => {
    return (
      <TouchableOpacity
        style={styles.pauseIconContainer}
        onPress={() => this.setState({paused: !this.state.paused})}>
        <Icon
          name={!this.state.paused ? 'pause-circle' : 'play-circle'}
          size={42}
          color={colors.checkboxColor}
          style={styles.pauseIcon}
        />
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{height: this.state.height, width: this.state.width}}>
        <StatusBar barStyle={'light-content'} />
        <Video
          source={require('../assets/video/beer_cropped.mp4')}
          resizeMode={'cover'}
          muted={true}
          repeat={true}
          rate={0.65}
          paused={this.state.paused}
          style={styles.backgroundVideo}
        />
        <View style={styles.contentContainer}>
          <SafeAreaView>
            <Button
              title="Press me"
              onPress={() => this.props.navigation.navigate('Stack')}
            />
          </SafeAreaView>
        </View>
        {this.pauseButton()}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.black + '99',
    justifyContent: 'center',
  },
  pauseIconContainer: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  pauseIcon: {
    borderColor: colors.checkboxColor + '99',
    borderWidth: 0.5,
    borderRadius: 21,
  },
});
