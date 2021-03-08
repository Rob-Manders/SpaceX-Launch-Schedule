
import React, { useState, useEffect } from 'react'
import useAPI from '../../hooks/useAPI'

export default function Card_Pad({ launchpad, ...props }) {
	const [pad, setPad] = useState({})

	useEffect(() => {
		useAPI(`launchpads/${launchpad}`)
			.then(pad => setPad(pad))
	}, [])

	return (
		<p>{pad.name}</p>
	)
}