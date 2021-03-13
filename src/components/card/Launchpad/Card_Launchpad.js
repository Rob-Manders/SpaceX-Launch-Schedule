
import React, { useState, useEffect, useContext } from 'react'
import { CardContext } from '../Card'
import useAPI from '../../../hooks/useAPI'
import Card_Section from '../Section/Card_Section'

export default function Card_Launchpad({...props }) {
	const { launchpad } = useContext(CardContext)
	const [pad, setPad] = useState({})

	useEffect(() => {
		useAPI(`launchpads/${launchpad}`)
			.then(pad => setPad(pad))
	}, [])

	return (
		<>
			<p><strong>{pad.full_name}</strong></p>
			<p>{pad.region}</p>
		</>
	)
}