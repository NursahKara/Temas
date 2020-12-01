import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Button
} from "react-native";
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
const {  height } = Dimensions.get('window');
export default class LoginScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      typing_email: false,
      typing_password: false,
      typing_service:false,
      animation_login : new Animated.Value(width-40),
      enable:true,
      username: '',
      password: '',
      data: [],
      dataSuccess: false,
      token: '',
      isLoading: false,
      name:'',
      service:'',
      serv:''
      
    }
  }

  _foucus(value){
    if(value=="email"){
      this.setState({
        typing_email: true,
        typing_password: false,
        typing_service:false
      })
    }
    else if(value=="service"){
      this.setState({
        typing_email: false,
        typing_password: false,
        typing_service:true
      })
    }
    else{
      this.setState({
        typing_email: false,
        typing_password: true,
        typing_service:false
      })
    }
  }

  _typing(){
    return(
      <TypingAnimation 
        dotColor="#93278f"
        style={{marginRight:25}}
      />
    )
  }

  _animation(){
    Animated.timing(
      this.state.animation_login,
      {
        toValue: 40,
        duration: 250
      }
    ).start();

    setTimeout(() => {
      this.setState({
        enable:false,
        typing_email: false,
        typing_password: false,
        typing_service:false
      })
    }, 150);
  }
  onLoginBtnPress = () => {
    this.setState({ isLoading: true });
    // // http://192.168.41.182/IfsTerminalService/Token/Login
    // fetch(this.state.service+'/IfsTerminalService/Token/Login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type' : 'application/x-www-form-urlencoded'
    //   },
    //   //body:"{'Username':'IFSAPP', 'Password':'ifsapp'}"
    //   //body: 'Username=' + this.state.username + '&Password=' + this.state.password
    //   body: 'Username=' + this.state.username + '&Password=' + this.state.password
    // })
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     console.log('responseJson',responseJson);

    //     this.setState({ token: responseJson.token, name:responseJson.username });
        
    //     console.log('state.token:::::',this.state.token);
    //     const { token,name } = this.state;
    //     console.log('token:::::',token);
    //     Actions.homee({ token: token, username:name });
        
    //   })
    // .catch((error) => console.error(error)).finally(()=>{
    //   this.setState({ isLoading: false });
    // });
  
  }
 
  render(){
    const width = this.state.animation_login;
    let { isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={{ marginTop: height / 2.25 }}>
          <ActivityIndicator size="large" animating color="#872990" />
        </View>
      )
    }
    else {
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <View style={styles.header}>
              <ImageBackground
                source={require("../assets/background/hdr.png")}
                style={styles.imageBackground}
              >
                <Text style={{
                  color:'white',
                  fontWeight:'bold',
                  fontSize:30
                }}>HOŞGELDİNİZ</Text>
                <Text style={{
                  color:'yellow'
                }}>Devam etmek için giriş yapın.</Text>

              </ImageBackground>
          </View>
          <View style={styles.footer}>
                <Text style={[styles.title,{
                  marginTop:20
                }]}>Kullanıcı Adı</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Kullanıcı Adınız.."
                      style={styles.textInput}
                      onFocus={()=>this._foucus("email")}
                      onChangeText={valuee =>
                        this.setState({ username: valuee })
                      }
                    />
                    {this.state.typing_email ?
                      this._typing()
                    : null}
                </View>

                <Text style={[styles.title,{
                  marginTop:20
                }]}>Şifre</Text>
                <View style={styles.action}>
                    <TextInput 
                      secureTextEntry
                      placeholder="Şifreniz.."
                      style={styles.textInput}
                      onFocus={()=>this._foucus("password")}
                      onChangeText={valuee =>
                        this.setState({ password: valuee })
                      }
                    />
                    {this.state.typing_password ?
                      this._typing()
                    : null}
                </View>
                <Text style={[styles.title,{
                  marginTop:20
                }]}>Servis Url</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Servis Url.."
                      style={styles.textInput}
                      onFocus={()=>this._foucus("service")}
                      onChangeText={valuee =>
                        this.setState({ service: valuee })
                      }
                    />
                    {this.state.typing_service ?
                      this._typing()
                    : null}
                </View>
                <TouchableOpacity
                onPress={()=>this._animation()}>
                  <View style={styles.button_container}>
                        <Animated.View style={[styles.animation,{ paddingLeft:10,paddingRight:10
                        }]}>
                          {this.state.enable ?
                            <Text style={{fontSize:12,color:'white'}}>Test Et</Text>
                            :
                            <Animatable.View
                            animation="bounceIn"
                            delay={50}>
                              <FontAwesome 
                                name="check"
                                color="white"
                                size={20}
                              />
                            </Animatable.View>
                          }
                        </Animated.View >
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={{  backgroundColor:'#93278f',
                                  paddingVertical:10,
                                  marginTop:15,
                                  borderRadius:100,
                                  justifyContent:'center',
                                  alignItems:'center'}}
                                  onPress={this.onLoginBtnPress.bind(this)}>
                  <View style={{justifyContent:'center',alignItems:'center'}}>
                        {/* <Animated.View style={[styles.animation,{
                          width
                        }]}>
                          {this.state.enable ? */}
                            <Text style={styles.textLogin}>Giriş</Text>
                            {/* :
                            <Animatable.View
                            animation="bounceIn"
                            delay={50}>
                              <FontAwesome 
                                name="check"
                                color="white"
                                size={20}
                              />
                            </Animatable.View>
                          }
                        </Animated.View > */}
                  </View>
                  {/* <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>Giriş</Text> */}
                </TouchableOpacity>

              
          </View>
      </View>
    )
  }
}
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    justifyContent:'center'
  },
  header: {
    flex:1,
  },
  footer: {
    flex:2,
    padding:20
  },
  imageBackground:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    height:'100%'
  },
  title: {
    color:'black',
    fontWeight:'bold'
  },
  action: {
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2'
  },
  textInput: {
    flex:1,
    marginTop:5,
    paddingBottom:5,
    color:'gray'
  },
  button_container: {
    alignItems: 'flex-end',
    justifyContent:'center',
    marginTop:-20
  },
  animation: {
    backgroundColor:'#93278f',
    paddingVertical:5,
    marginTop:30,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center'
  },
  textLogin: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  signUp: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20
  }
});