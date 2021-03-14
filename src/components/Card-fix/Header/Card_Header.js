
import React, { useContext } from 'react'
import { CardContext } from '../Card'
import Icon_Rocket from '../../icons/Icon_Rocket'

export default function Card_Header({ ...props }) {
	const { links, name } = useContext(CardContext)
	const patch = links.patch.small

	const patchImg = patch !== null 
		? <img src={patch} aria-label={`${name} mission patch`} />
		: <span className="patch--placeholder"><Icon_Rocket /></span>

	// Test code for long mission names. Change mission name as required for future tests.
	// const testName = name !== "Starlink-21 (v1.0)" ? name : "This is an Extra Long Mission Name to see what happens..."

	return (
		<div className="card__header">
			{patchImg}
			<h2 className="card__title">{name}</h2>
			
		</div>
	)
}

