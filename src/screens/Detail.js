import React from 'react'
import {View, Text,Image } from 'react-native'
import SwiperComponent from '../components/SwiperComponent'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Detail = ({navigation}) => {
    return(
        <View style={{
            flex:1,
            backgroundColor:"#FFF",
            
        }}>
            <View style={{
                flexDirection:"row",
                width:"100%",
                height:"75%"
            }}>
                <View style={{width:"25%",paddingLeft:20}}>
                    <TouchableOpacity onPress={()=>navigation.goBack()}>
                        <Image
                            source={require('../images/17.png')}
                            style={{marginVertical:20, height:15,width:25}}
                        />
                    </TouchableOpacity>   
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../images/11.png')}
                                style={{height:40,width:40}}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../images/12.png')}
                                style={{height:40,width:30}}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../images/13.png')}
                                style={{height:40,width:40}}
                            />
                        </View>
                        <View style={{
                            backgroundColor:"#FFF",
                            height:50,
                            width:50,
                            borderRadius:5,
                            elevation:5,
                            alignItems:"center",
                            justifyContent:"center",
                            marginTop:50
                        }}>
                            <Image
                                source={require('../images/14.png')}
                                style={{height:30,width:40}}
                            />
                        </View>  
                </View>
                <View style={{width:"90%"}}>
                        <SwiperComponent/>
                </View>
            </View>

                        <View style={{
                            flexDirection:"row",
                            marginTop:-80,
                            marginHorizontal:20,
                            alignItems:"center"
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:23,
                                color:"#62636a"
                            }}>
                                LA Beninoise
                            </Text>
                            <Text style={{
                                fontWeight:"bold",
                                color:"#00a46c",
                                paddingLeft:130,
                                fontSize:17,
                                
                            }}>
                                A-1Km 
                            </Text>
                        </View>

                        <Text style={{
                            paddingHorizontal:20,
                            fontWeight:"bold",
                            color:"#b1e5d3",
                            paddingTop:3,
                            fontSize:20
                        }}>
                            Russia
                        </Text>

                        <View style={{
                            flexDirection:"row",
                            width:"100%"
                        }}>
                            <View style={{
                                width:"50%",
                                backgroundColor:"#00a46c",
                                height:70,
                                marginTop:20,
                                borderTopRightRadius:25,
                                alignItems:"center",
                                justifyContent:"center"
                            }}>
                                <Text style={{
                                    color:"#FFF",
                                    fontSize:17
                                }}>Consulter produits</Text>
                            </View>

                            <View style={{
                                width:"50%",
                                alignItems:"center",
                                justifyContent:"center",
                                marginTop:20
                            }}>
                                <Text style={{
                                    color:"#62636a",
                                    fontWeight:"bold",
                                    fontSize:17
                                }}>Description</Text>
                               
                            </View>
                            
                        </View>
                        
                        <Text style={{
                                    color:"#000",
                                    
                                    fontSize:12
                                }}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                . </Text>
                                
        </View>
    )
}
export default Detail;