import { StyleSheet, Text, View } from 'react-native';
import ProcedureCard from './ProcedureCard';
import SlideComponent from './SlideComponent';
import SlidePagination from './SlidePagination';

import cosmetologIcon from '../assets/icons/cosmetolog-icon.png';
import psychologistIcon from '../assets/icons/psycholyst-icon.png';
import oculistIcon from '../assets/icons/okulist-icon.png';
import dentistIcon from '../assets/icons/dentist-icon.png';
import pillsIcon from '../assets/icons/pills.png';
import terapistIcon from '../assets/icons/terapist.png';
import rentgenIcon from '../assets/icons/rentgen.png';
import dietologIcon from '../assets/icons/dietolog.png';

const MainContainer = () => {
	return (
		<View style={styles.mainContent}>
			<View style={styles.mainWrapper}>
				<Text style={styles.procedurText}>Что вам нужно?</Text>
				<View style={styles.procedureCont}>
					<ProcedureCard icon={cosmetologIcon} text='Косметолог' />
					<ProcedureCard icon={oculistIcon} text='Окулист' />
					<ProcedureCard icon={psychologistIcon} text='Психолог' />
					<ProcedureCard icon={dentistIcon} text='Дантист' />
					<ProcedureCard icon={pillsIcon} text='Препараты' />
					<ProcedureCard icon={terapistIcon} text='Терапевт' />
					<ProcedureCard icon={rentgenIcon} text='Рентген' />
					<ProcedureCard icon={dietologIcon} text='Диетолог' />
				</View>
				<Text style={styles.procedurText}>Скидки</Text>
				<View style={styles.slider}>
					<SlideComponent />
					<SlidePagination />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContent: {
		backgroundColor: 'white',
		paddingVertical: 25,
		borderRadius: 50,
		width: '100%',
		alignItems: 'center',
		flex: 1,
	},
	mainWrapper: {
		width: '90%',
		gap: 20,
	},
	procedureCont: {
		flexDirection: 'row',
		gap: 10,
		flexWrap: 'wrap',
	},
	procedurText: {
		fontWeight: 'bold',
		fontSize: 22,
	},
});

export default MainContainer;
