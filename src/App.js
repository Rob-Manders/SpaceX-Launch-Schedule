
import React from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Card from './components/Card'
import Footer from './components/Footer'

export default function App() {
	return (
		<>
			<Header />
			<Main>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</Main>
			<Footer />
		</>
	)
}