import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Admin from './views/Admin';
import Mentions from './views/Mentions';
import ChirpsDetails from './views/ChirpsDetails';
import NotFound from './views/NotFound';
import AddChirp from './views/AddChirp';
import EditChirps from './views/EditChirp';

interface AppProps { }

const App = (props: AppProps) => {

	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/addchirp' element={<AddChirp />} />
				<Route path='/editchirp' element={<EditChirps />} />
				<Route path='/chirps/:id' element={<ChirpsDetails />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/mentions' element={<Mentions />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;