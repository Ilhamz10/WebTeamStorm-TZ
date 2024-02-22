import { StyleSheet, Text, View } from 'react-native';

const Tries = () => {
	return (
		<View style={styles.triesCont}>
			<Text style={styles.triesText}>
				Всего осталось бесплатных попыток для поиска в этом месяце:
			</Text>
			<View style={styles.tryRange}>
				<View style={styles.tryUsed}></View>
				<View style={styles.tryLeft}></View>
			</View>
			<Text style={styles.triesCount}>9/10</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	triesCont: {
		marginTop: '5%',
		width: '100%',
		maxWidth: 300,
		flex: 3,
	},
	triesText: {
		width: 263,
		color: '#3C4731',
		fontWeight: '500',
	},
	tryRange: {
		flexDirection: 'row',
		width: '100%',
		height: 10,
		marginTop: '3%',
		marginBottom: 7,
	},
	tryUsed: {
		backgroundColor: '#939496',
		flex: 1,
		borderRadius: 50,
	},
	tryLeft: {
		flex: 9,
		backgroundColor: '#FAFF7E',
		borderRadius: 50,
	},
	triesCount: {
		fontSize: 12,
		textAlign: 'right',
		fontWeight: '500',
	},
});

export default Tries;
