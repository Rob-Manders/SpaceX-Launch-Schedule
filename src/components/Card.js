
import React, { useState, useEffect } from 'react'
import useAPI from '../hooks/useAPI'

export default function Card({ launch, ...props }) {
	const [coreAssigned, setCoreAssigned] = useState(false)
	const [core, setCore] = useState({})

	const {
		name,
		date_unix,
		date_precision,
		cores
	} = launch

	const date = new Date(date_unix * 1000)

	useEffect(() => {
		if (cores[0].core !== null) setCoreAssigned(true)

		if (coreAssigned) {
			useAPI(`cores/${cores[0].core}`)
				.then(core => setCore(core))
		}
	}, [])

	return (
		<div className="card">
			<h2>{name}</h2>
			<p>{date.toLocaleString()}</p>
			<div className="card__core">
				{
					coreAssigned
					? 
					<>
						<p>Core: {core.serial}</p>
						<p>Flights: {core.reuse_count}</p>
					</>
					:
					<p>No core assigned.</p>
				}
			</div>
		</div>
	)
}