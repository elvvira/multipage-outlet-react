import { Route, Routes } from 'react-router-dom';
import Home from '../components/home/Home';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
};

export default Router;
