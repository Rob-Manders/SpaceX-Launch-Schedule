
import React from 'react'
import Icon_Rocket from '../icons/Icon_Rocket'

export default function Card_Header({ patch, name, ...props }) {
	const patchImg = patch !== null ? <img src={patch} aria-label={`${name} mission patch`} /> : <span className="patch--placeholder"><Icon_Rocket /></span>

	return (
		<div className="card__header">
			{patchImg}
			<h2 className="card__title">{name}</h2>
		</div>
	)
}