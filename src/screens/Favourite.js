import React from "react"
import {View} from 'react-native'
import { ScrollView } from "react-native-gesture-handler";


import Storages from "../screens/Storages";


const Favourite = () => {
    return(
        <ScrollView>
        <View  style={{marginBottom:50,}}>
        <Storages image={require("../pharmacies/b.jpeg")}
         title={"Paracetamol"} 
    />
        <Storages
            image={require("../pharmacies/g.jpeg")}
            title={ "Para"}
    
        />
        <Storages image={require("../pharmacies/c.jpeg")} title={"efferagant"} />

        <Storages image={require("../pharmacies/d.jpeg")} title={"Aspirine"} />
        <Storages
            image={require("../pharmacies/e.jpeg")}
    
            title={"sedaspire"}
        />
        <Storages image={require("../pharmacies/a.jpg")} title={"anti biotique"} />




        <Storages image={require("../pharmacies/c.jpeg")} title={"efferagant"} />

<Storages image={require("../pharmacies/d.jpeg")} title={"Aspirine"} />
<Storages
    image={require("../pharmacies/e.jpeg")}

    title={"sedaspire"}
/>
<Storages image={require("../pharmacies/a.jpg")} title={"anti biotique"} />
    </View>
    </ScrollView>
    )
}


export default Favourite