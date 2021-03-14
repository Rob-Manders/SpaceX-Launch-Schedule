
import React, { useState, useEffect, useContext } from 'react'
import { CardContext } from '../Card'
import useAPI from '../../../hooks/useAPI'

export default function Card_Core({ ...props }) {
	const { cores } = useContext(CardContext)
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
		<>
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
		</>
	)
}