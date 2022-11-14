

  import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "Medlivs delivery",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./src/images/q.png"),
  },
  {
    key: "two",
    title: "Service apres vente",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./src/images/p.png"),
  },
  {
    key: "three",
    title: "Livraison rapide ",
    text:
      "Lorem ipsum dolor sit amet consecte tuer adipsing elit sed diam monum my nibh eusimod eltor",
    image: require("./src/images/v.png"),
  },
];

export default class Index extends React.Component {
  state = { showHomePage: false };
  _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "535%",
            width: "100%",
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "#21465b",
            alignSelf: "center",
          }}
          onPress={()=>navigation.navigate("Home")}
        >
          {item.title}                        
          

        </Text>

        <Text style={{
          textAlign:"center",
          color:"#b5b5b5",
          fontSize:15,
          paddingHorizontal:30
        }}>
          {item.text}
        </Text>
      </View>
    );
  };

  render() {
    if (this.state.showHomePage){
      return <Index />
    } else 
    return (
    <AppIntroSlider
      renderItem={this._renderItem} 
      data={slides} 
      activeDotStyle={{
        backgroundColor:"#21465b",
        width:30
      }}
     />
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
