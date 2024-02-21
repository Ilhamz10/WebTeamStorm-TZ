import { StyleSheet, View } from 'react-native';
import HomeIcon from '../assets/icons/Home.svg';

const FooterButton = ({ Icon, active }) => {
	return (
		<View
			style={active ? { ...styles.button, ...styles.active } : styles.button}>
			<Icon width={30} height={30} fill={active ? '#3C4731' : '#fff'} />
		</View>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 50,
		height: 50,
		borderRadius: 50,
		backgroundColor: '#3C4731',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundColor: '#FAFF7E',
	},
});

export default FooterButton;
