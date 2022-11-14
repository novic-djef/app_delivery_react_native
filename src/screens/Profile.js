import React from "react"
import {View, Text, Image} from 'react-native'
import {ScrollView} from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'


import Storages from "../screens/Storages";



const Profile = () => {
         
    return(
        <View style={{
            backgroundColor:"#FFF",
            flex:1
            
        }}>
     <View style={{
               backgroundColor:"#00a46c",
               height:"25%",
               borderBottomLeftRadius:20,
               borderBottomRightRadius:20,
               paddingHorizontal:20
           }}>

<View style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end", left: 12, }}>
                        <Text style={{
                            fontSize:30,
                            color:"#FFF",
                            fontWeight:"bold",
                            
                        }}>Tonleu Novic</Text>
                        
                   
                   <View >
                   <Text style={{
                            fontSize:20,
                            color:"#FFF",
                            fontWeight:"bold",
                            
                           
                        }}>medlivs@gmail.com</Text>

                   </View>
                   <View >
                   <Text style={{
                            fontSize:20,
                            color:"#FFF",
                            fontWeight:"bold",
                            
                           
                        }}>00237690089951</Text>

                   </View>
                   <View >
                   <Text style={{
                            fontSize:20,
                            color:"#FFF",
                            fontWeight:"bold",
                            
                           
                        }}>Cotonou rue 12</Text>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#FF546c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>Editer</Text>
                        </View>
                   </View>
                   </View>
       </View>
       <LinearGradient
            colors={["rgba(0,164,109,0.4)", "transparent"]}
            style={{
                left:0,
                right:0,
                height:90,
                marginTop:-45
            }}
           >
               <View style={{
                   backgroundColor:"#FFF",
                //    paddingVertical:30,
                //    paddingHorizontal:30,
                   padding: 30,
                   marginHorizontal:50,
                   borderRadius:"50%",
                   borderBottomLeftRadius: "50%",
                   marginTop:-20,
                   height:100,width:120,
                //    flexDirection:"row",
                   alignItems:"center"
               }}>
                   <Image
                   source={require('../images/novic.JPG')}
                        style={{
                            
                            marginTop:-34, height:120,width:120,
                            borderRadius: "50%"
                        }}
                   />
                  
               </View>
            </LinearGradient>

            <ScrollView style={{ marginTop: 60 }}>
				{/* <View >
				<Text 
                style={{marginLeft: 10, fontSize:22, fontWeight:600,}}
                >Parametre du compte</Text>

				</View> */}
                 <View style={{
                   flexDirection:"row",
                   paddingHorizontal:20,
                   width:"100%",
                   alignItems:"center"
               }}>
                   <View style={{width:"50%"}}>
                        <Text style={{
                            fontWeight:"bold",
                            fontSize:17,
                            color:"#585a61"
                        }}>Mes parametre</Text>
                        <View style={{
                            height:4,
                            backgroundColor:"#b1e5d3",
                            width:115,
                            marginTop:-5
                        }}>

                        </View>

                   </View>
                   <View style={{width:"50%", alignItems:"flex-end"}}>
                        <View style={{
                            backgroundColor:"#00a46c",
                            paddingHorizontal:20,
                            paddingVertical:5,
                            borderRadius:15
                        }}>
                            <Text style={{
                                fontWeight:"bold",
                                fontSize:13,
                                color:"#FFF"
                            }}>Voir..</Text>
                        </View>
                   </View>
               </View>



				<View  style={{marginBottom:50,}}>
					<Storages image={require("../images/3.png")} title={"One Drive"} />
					<Storages
						image={require("../images/11.png")}
						title={"Google Drive"}
					/>
					<Storages image={require("../images/2.png")} title={"Dropbox"} />
				</View>
			</ScrollView>
        </View>
    )
}


export default Profile;


