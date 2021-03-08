
import React, { useState, useEffect } from 'react'
import useAPI from '../../hooks/useAPI'

export default function Card_Core({ cores, ...props }) {
	const [coreAssigned, setCoreAssigned] = useState(false)
	const [core, setCore] = useState({})

	useEffect(() => {
		if (cores[0].core !== null) {
			setCoreAssigned(true)
			useAPI(`cores/${cores[0].core}`)
				.then(core => setCore(core))
		}
	})

	return (
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
	)
}