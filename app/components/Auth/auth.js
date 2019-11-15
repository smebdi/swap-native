import React, {Component} from 'react';
import {Container} from '../Container';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {Overlay, Text, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../config/colors';
const {height, width} = Dimensions.get('window');
import Loading from '../Loading/loading';

export default class Profile extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    modalVisible: this.props.visible,
    isLoggedIn: this.props.profile,
    login: true,
  };

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({modalVisible: this.props.visible});
    }
  }

  renderLocalNavigation = login => {
    return (
      <View style={style.headerContainer}>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              this.props.setModalVisible(false);
            }}>
            <Icon name="times" size={25} color={colors.primaryColor} />
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}} />

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={[
              login ? style.selectedText : null,
              style.headerTextContainer,
            ]}
            onPress={() => {
              this.setState({login: true});
            }}>
            <Text style={[style.headerText, login ? style.selectedText : null]}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={[
              !login ? style.selectedText : null,
              style.headerTextContainer,
            ]}
            onPress={() => {
              this.setState({login: false});
            }}>
            <Text
              style={[style.headerText, !login ? style.selectedText : null]}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  renderGreeting = login => {
    return login ? (
      <View style={style.greetingContainer}>
        <Text h2 h2Style={{fontWeight: 'bold'}}>
          Welcome back
        </Text>
      </View>
    ) : (
      <View style={style.greetingContainer}>
        <Text h3>Welcome to</Text>
        <Text h2 h2Style={{fontWeight: 'bold'}}>
          Swap the Hop
        </Text>
      </View>
    );
  };

  renderForm = login => {
    return (
      <View style={style.formContainer}>
        <Input
          containerStyle={{marginVertical: 5}}
          placeholder="Email address"
          leftIcon={<Icon name="envelope" size={20} color="black" />}
          leftIconContainerStyle={{marginHorizontal: 15}}
        />
        <Input
          containerStyle={{marginVertical: 5}}
          placeholder="Password"
          secureTextEntry={true}
          leftIcon={<Icon name="lock" size={20} color="black" />}
          leftIconContainerStyle={{marginHorizontal: 15}}
        />
        {!login ? (
          <Input
            containerStyle={{marginVertical: 5}}
            placeholder="Password again"
            secureTextEntry={true}
            leftIcon={<Icon name="lock" size={20} color="black" />}
            leftIconContainerStyle={{marginHorizontal: 15}}
          />
        ) : null}
      </View>
    );
  };

  renderFooter = login => {
    return login ? (
      <View style={style.footerContainer}>
        <TouchableOpacity
          style={style.footerButton}
          onPress={() => this.setState({login: false})}>
          <Text>Don't have an account? Join us!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.footerButton}
          onPress={() => console.log('password')}>
          <Text>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    ) : null;
  };

  renderSubmitBar = loading => {
    return (
      <View style={style.submitContainer}>
        <View style={{flex: 1}} />
        <TouchableOpacity
          activeOpacity={0.75}
          style={[style.shadow, style.submitButton]}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.white} />
          ) : (
            <Icon name="arrow-right" size={25} color={colors.white} />
          )}
        </TouchableOpacity>
        <View style={[style.footerColor, style.shadow]} />
      </View>
    );
  };

  render() {
    const {login, loading} = this.state;

    return (
      <Overlay
        fullScreen={true}
        isVisible={this.state.modalVisible}
        overlayBackgroundColor={colors.secondaryColor}>
        <Container backgroundColor={colors.secondaryColor}>
          {this.renderLocalNavigation(login)}
          {this.renderGreeting(login)}
          {this.renderForm(login)}
          {this.renderFooter(login)}
        </Container>
        {this.renderSubmitBar(loading)}
      </Overlay>
    );
  }
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: colors.primaryColorAccent,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButton: {
    backgroundColor: colors.secondaryColorAccent,
    justifyContent: 'space-evenly',
    borderColor: colors.black,
    borderWidth: 0.25,
  },
  loginTitle: {
    color: colors.primaryColorAccent,
    fontWeight: 'bold',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 25,
    marginVertical: 25,
  },
  headerTextContainer: {
    paddingVertical: 5,
  },
  greetingContainer: {
    height: 100,
    marginVertical: 25,
    width: width - 60,
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
  },
  selectedText: {
    fontWeight: 'bold',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  formContainer: {flex: 1, width: width - 40},
  footerContainer: {
    flex: 1,
    width: width - 80,
    marginBottom: 100,
    zIndex: 100,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  footerButton: {paddingVertical: 10, paddingRight: 5},
  submitContainer: {
    position: 'absolute',
    bottom: 0,
    height: 140,
    width: width,
    zIndex: 0,
  },
  submitButton: {
    position: 'absolute',
    bottom: 35,
    right: 40,
    height: 70,
    width: 70,
    backgroundColor: colors.primaryColor,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  footerColor: {flex: 1, backgroundColor: colors.secondaryColorAccent},
});
