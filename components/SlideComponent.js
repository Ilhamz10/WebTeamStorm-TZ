import { Image, StyleSheet, Text, View } from 'react-native';

const SlideComponent = () => {
	return (
		<View style={styles.slide}>
			<View style={styles.slideTitleCont}>
				<Text style={styles.slideTitle}>Скидка </Text>
				<Text style={{ ...styles.slideTitle, color: '#FAFF7E' }}>25%</Text>
			</View>
			<Text style={styles.slideText}>На готовую подписку сервиса LoDo</Text>
			<Image
				style={styles.slideImg}
				source={require('../assets/images/slide-doctor.png')}
			/>
			<Image
				style={styles.slideBg}
				source={require('../assets/images/slide-bg.png')}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	slide: {
		position: 'relative',
		paddingHorizontal: '10%',
		borderRadius: 20,
		backgroundColor: '#C0CBB0',
		flex: 1,
		maxHeight: 167,
		overflow: 'hidden',
	},
	slideBg: {
		position: 'absolute',
		right: -5,
		top: 0,
		width: 170,
		height: 170,
		objectFit: 'contain',
		zIndex: 1,
	},
	slideImg: {
		width: 258,
		height: 172,
		position: 'absolute',
		left: 95,
		top: 0,
		zIndex: 2,
	},
    slideTitleCont: {
        flexDirection: 'row'
    },
	slideTitle: {
		marginTop: 41,
		fontSize: 22,
		fontWeight: 'bold',
		color: 'white',
		zIndex: 9,
	},
	slideText: {
		fontSize: 12,
		fontWeight: '500',
		color: 'white',
		maxWidth: '50%',
		zIndex: 9,
		width: 137,
	},
});

export default SlideComponent;
