import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProcedureCard = ({ icon, text }) => {
	return (
		<TouchableOpacity style={styles.card}>
			<Image style={styles.cardImage} source={icon} />
			<Text style={styles.cardText}>{text}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
        width: 80,
        height: 80,
		maxWidth: '22%',
		margin: '1.5%',
		backgroundColor: '#3C4731',
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
        gap: 8
	},
	cardImage: {
		width: 40,
		height: 40,
	},
	cardText: {
		color: 'white',
        fontSize: 8
	},
});

export default ProcedureCard;
