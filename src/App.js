
import React, { useState, useEffect } from 'react'
import useAPI from './hooks/useAPI'

import Header from './components/Header'
import Main from './components/Main'
import Card from './components/card/Card'
import Footer from './components/Footer'

export default function App() {
	const [ launches, setLaunches ] = useState([])

	useEffect(() => {
		useAPI('launches/upcoming')
			.then(data => setLaunches(data))
	}, [])

	return (
		<>
			<Header />
			<Main>
				{
					launches.map((launch, index) => <Card key={`launch_${index}`} launch={launch} />)
				}
			</Main>
			<Footer />
		</>
	)
}