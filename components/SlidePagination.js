import { StyleSheet, View } from 'react-native';

const SlidePagination = () => {
	return (
		<View style={styles.pagination}>
			<View style={styles.paginationItem}></View>
			<View style={{ ...styles.paginationItem, ...styles.active }}></View>
			<View style={styles.paginationItem}></View>
			<View style={styles.paginationItem}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	pagination: {
        width: '100%',
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'center',
		gap: 5,
		bottom: 11,
        zIndex: 10
	},
	paginationItem: {
		width: 10,
		height: 10,
		backgroundColor: '#939496',
		borderRadius: 50,
	},
	active: {
		backgroundColor: 'white',
	},
});

export default SlidePagination;
