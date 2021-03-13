
import React, { useState, useEffect } from 'react'
import useAPI from '../../hooks/useAPI'
import Card_Section from './Card_Section'

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
		<Card_Section section="core">
			{
				coreAssigned
				? 
				<>
					<p>
						<span>Serial Number:</span>
						<span><strong>{core.serial}</strong></span>
					</p>
					<p>
						<span>Previous Flights:</span>
						<span><strong>{core.reuse_count}</strong></span>
					</p>
				</>
				:
				<p>No core assigned.</p>
			}
		</Card_Section>
	)
}