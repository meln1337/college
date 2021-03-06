import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import Layout from './hoc/Layout';
import Main from './containers/Main/Main.jsx';
import ExamSchedule from './containers/examSchedule/examSchedule';
import History from './containers/HistotyOfCollege/History';
import P404 from './components/P404/P404';
import Work from './components/Work/Work';
import Rights from './components/Rights/Rights';
import Specialty from './components/Specialty/Specialty';
import Contacts from './components/Contacts/Contacts';
import PublicInfo from './components/PublicInfo/PublicInfo';
import Contract from './components/Contract/Contract';
import Achievements from './components/Achievements/Achievements';
import DaySchedule from './containers/daySchedule/daySchedule';
import Rating from './containers/Rating/Rating';
import Replacements from './components/Replacements/Replacements';
import ZNO from './components/ZNO/ZNO';
import News from './containers/News/News';
import Structure from './components/Structure/Structure';
import OpenDay from './components/OpenDay/OpenDay';
import Galery from './containers/Galery/Galery';
import Consultation from './containers/Consultation/Consultation';
import Vstup from './components/Vstup/Vstup';
import Admin from './components/Admin/Admin';
import About from './components/About/About'
import ResponseModal from './components/ResponseModal/ResponseModal';
import StructureModal from './components/StructureModal/StructureModal';
import CourseModal from './components/CourseModal/CourseModal';
import UnitModal from './components/UnitModal/UnitModal';
import Login from './components/Login/Login';
import FullPost from './components/FullPost/FullPost';
import AwardModal from './components/AwardModal/AwardModal';
import FinancialReportContainer from './containers/FinancialReportContainer/FinancialReportContainer';
import ScheduleModalContainer from './containers/ScheduleModal/ScheduleModalContainer';
import Zaminy from './components/ZaminyModal/Zaminy';
import ZaminyContainer from './containers/ZaminyContainer/ZaminyContainer';
import Register from './components/Register/Register';
import Profilcation from './components/Profilcation/Profilcation';
import ConsultationContainer from './containers/ConsultationContainer/ConsultationContainer';
import { connect } from 'react-redux';
import { isAuth } from './redux/actions/auth.actions';
import { useEffect } from 'react';
import AchievmentsPage from './components/AchievmentsPage/AchievmentsPage';
import RightsContainer from './containers/Rights/RightsContainer';
import { initSetLanguageThunk } from './redux/actions/language.actions';

const App = ({ isAuth, setLanguage }) => {
	useEffect(() => {
		isAuth();
		setLanguage();
	}, [])

	return (
		<Switch>
			<Route path="/" exact>
				<Layout>
					<Main />
				</Layout>
			</Route>
			<Route path="/about">
				<Layout>
					<About />
				</Layout>
			</Route>
			<Route path="/vstup">
				<Layout>
					<Vstup />
				</Layout>
			</Route>
			<Route path="/consultation">
				<Layout>
					<Consultation />
				</Layout>
			</Route>
			<Route path="/galery/:id">
				<Layout>
					<Galery />
				</Layout>
			</Route>
			<Route path="/open-day">
				<Layout>
					<OpenDay />
				</Layout>
			</Route>
			<Route path="/structure">
				<Layout>
					<Structure />
				</Layout>
			</Route>
			<Route path="/news">
				<Layout>
					<News />
				</Layout>
			</Route>
			<Route path="/history-of-college">
				<Layout>
					<History />
				</Layout>
			</Route>
			<Route path="/work">
				<Layout>
					<Work />
				</Layout>
			</Route>
			<Route path="/day-schedule">
				<Layout>
					<DaySchedule />
				</Layout>
			</Route>
			<Route path="/rights">
				<Layout>
					<RightsContainer />
				</Layout>
			</Route>
			<Route path="/replacements">
				<Layout>
					<Replacements />
				</Layout>
			</Route>
			<Route path="/specialty">
				<Layout>
					<Specialty />
				</Layout>
			</Route>
			<Route path="/contacts">
				<Layout>
					<Contacts />
				</Layout>
			</Route>
			<Route path="/financial-report">
				<Layout>
					<FinancialReportContainer />
				</Layout>
			</Route>
			<Route path="/achievements">
				<Layout>
					<Achievements />
				</Layout>
			</Route>
			<Route path="/contract">
				<Layout>
					<Contract />
				</Layout>
			</Route>
			<Route path="/zno">
				<Layout>
					<ZNO />
				</Layout>
			</Route>
			<Route path="/public-info">
				<Layout>
					<PublicInfo />
				</Layout>
			</Route>
			<Route path="/exam-schedule">
				<Layout>
					<ExamSchedule />
				</Layout>
			</Route>
			<Route path="/rating">
				<Layout>
					<Rating />
				</Layout>
			</Route>
			<Route path="/404">
				<Layout>
					<P404 />
				</Layout>
			</Route>
			<Route path="/response">
				<ResponseModal />
			</Route>
			<Route path="/modal/structure">
				<StructureModal />
			</Route>
			<Route path="/zaminy">
				<Zaminy />
			</Route>
			<Route path="/course">
				<CourseModal />
			</Route>
			<Route path="/consultationModal">
				<ConsultationContainer />
			</Route>
			<Route path="/replacementPage">
				<ZaminyContainer />
			</Route>
			<Route path="/schedules">
				<ScheduleModalContainer />
			</Route>
			<Route path="/modal/award/:year">
				<AwardModal />
			</Route>
			<Route path="/login">
				<Layout>
					<Login />
				</Layout>
			</Route>
			{/* <Route path="/posts/:id">
			<Layout>
				<FullPost />
			</Layout>
		</Route> */}
			<Route path="/register">
				<Layout>
					<Register />
				</Layout>
			</Route>
			<Route path="/profilaction">
				<Profilcation />
			</Route>
			<Route path="/achievementsModal">
				<AchievmentsPage />
			</Route>
			<Redirect to="/404" />
		</Switch>
	)
}

const mapDispatchToProps = {
	isAuth: () => isAuth(),
	setLanguage: () => initSetLanguageThunk()
}

export default connect(null, mapDispatchToProps)(App);
