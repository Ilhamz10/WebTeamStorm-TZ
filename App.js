import { Image, StyleSheet, View } from 'react-native';
import AccountInfo from './components/AccountInfo';
import Tries from './components/Tries';
import FooterButton from './components/FooterButton';

import HomeIcon from './assets/icons/Home.svg';
import SaveIcon from './assets/icons/Saved.svg';
import AccountIcon from './assets/icons/Account.svg';
import MainContainer from './components/MainContainer';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={require('./assets/images/logo.png')}
				/>
			</View>
			<View style={styles.wrapper}>
				<AccountInfo />
				<Tries />
			</View>
			<MainContainer />
			<View style={styles.footer}>
				<FooterButton Icon={HomeIcon} active />
				<FooterButton Icon={SaveIcon} />
				<FooterButton Icon={AccountIcon} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#C0CBB0',
		paddingTop: 0,
		alignItems: 'center',
	},
	wrapper: {
		width: '90%',
		marginBottom: 15,
		alignItems: 'flex-start',
	},
	logoContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingVertical: 22,
	},
	logo: {
		height: 40,
		width: 70,
	},
	footer: {
		flexDirection: 'row',
		paddingVertical: 10,
		justifyContent: 'space-evenly',
		width: '100%',
	},
});
