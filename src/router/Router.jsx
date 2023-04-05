import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Pricing from '../pages/pricing/Pricing';
import Layout from '../layouts/Layout';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/pricing' element={<Pricing />} />
			</Route>
		</Routes>
	);
};

export default Router;
