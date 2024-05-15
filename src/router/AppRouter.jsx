import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	Pagina1,
	Pagina2,
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
					<Route
						path='pagina1'
						element={
							<PrivateRoute>
								<Pagina1 />
							</PrivateRoute>
						}
					/>
					<Route
						path='pagina2'
						element={
							<PrivateRoute>
								<Pagina2 />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};
