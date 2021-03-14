
import React, { useState, useEffect } from 'react'
import useAPI from './hooks/useAPI'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {
	Card,
	Card_Header,
	Card_Date,
	Card_Launchpad,
	Card_Core,
	Card_Section
} from './components/Card/Card'

export default function App() {
	const [ launches, setLaunches ] = useState([])

	useEffect(() => {
		useAPI('launches/upcoming')
			.then(data => setLaunches(data))
	}, [])

	const cards = launches.map((launch, index) => {
		return (
			<Card key={`launch_${index}`} launch={launch}>
				<Card_Header />
				<Card_Date />
				<Card_Section section="launchpad">
					<Card_Launchpad />
				</Card_Section>
				<Card_Section section="core">
					<Card_Core />
				</Card_Section>
			</Card>
		)
	})

	return (
		<>
			<Header />
			<main>
				{cards}
			</main>
			<Footer />
		</>
	)
}