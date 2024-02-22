import { Image, StyleSheet, Text, View } from 'react-native';

const AccountInfo = () => {
	return (
		<View style={styles.accountInfo}>
			<Image
				source={require('../assets/icons/account-icon.png')}
				style={styles.accountIcon}
			/>
			<View>
				<Text style={{ ...styles.welcomeText, ...styles.accountInfoText }}>
					Приветствую,
				</Text>
				<Text style={{ ...styles.username, ...styles.accountInfoText }}>
					ИмяПользователя
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	accountInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 20,
		flex: 2
	},
	accountIcon: {
		width: 40,
		height: 40,
	},
	accountInfoText: {
		fontWeight: 'bold',
		fontSize: 18,
	},
	username: {
		color: '#3C4731',
	},
});

export default AccountInfo;
