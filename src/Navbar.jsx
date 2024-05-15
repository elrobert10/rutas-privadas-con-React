import React from 'react';
import {
	Link,
	Outlet,
	useLocation,
	useNavigate,
} from 'react-router-dom';

export const Navbar = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	console.log(state);

	const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};
	
	const onPagina1Click = () => {
		navigate('/pagina1', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };
	const onPagina2Click = () => {
		navigate('/pagina2', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };
	  const onDashboard = () => {
		navigate('/dashboard', {
			replace: true,
			state: {
				logged: true,
			},
		});
	  };

	return (
		<>
			<header>
				<h1>
					<Link to='/'><img src="logo.png" width="50" /></Link>
				</h1>

				{state?.logged ? (
					<div className='user'>
						<span className='username'>{state?.name}</span>
						<button className='btn-logout' onClick={onLogout}>
							Cerrar sesión
						</button>
						<button className='btn-carding' onClick={onPagina1Click}>
							Pagina1
						</button>
						<button className='btn-carding' onClick={onPagina2Click}>
							Pagina2
						</button>
						<button className='btn-logout' onClick={onDashboard}>
							Dashboard
						</button>
					</div>
				) : (
					<nav>
						<Link to='/login'>Iniciar sesión</Link>
						<Link to='/register'>Registrarse</Link>
					</nav>
				)}
			</header>

			<Outlet />
		</>
	);
};
