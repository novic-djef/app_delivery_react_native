import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Storages = ({ image, title }) => {
	return (
		<View style={styles.container}>
			<Image source={image} style={styles.img} />
			<View style={{ paddingLeft: 20 }}>
				<Text style={{ fontFamily: "Montserrat_600SemiBold" }}>{title}</Text>
				<Text style={styles.day}>Prix 2000 Frs</Text>
				<Text style={styles.desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
			</View>
		</View>
	);
};
export default Storages;
const styles = StyleSheet.create({
	container: {
		width: 320,
		height: 80,
		flex: 1,
		backgroundColor: "#f4f5f3",
		alignSelf: "center",
		borderRadius: 20,
		marginTop: 10,
		padding: 20,
		flexDirection: "row",
		alignItems: "center",
	},
	img: {
		width: 130,
		height: 100,
		resizeMode: "center",
	},
	day: {
		fontFamily: "Montserrat_600SemiBold",
		fontSize: 12,
		color: "#d8d8d8",
	},
	desc: {
		fontFamily: "Montserrat_600SemiBold",
		fontSize: 11,
		flex: 1,
		alignItems: 'center'

	},
});
