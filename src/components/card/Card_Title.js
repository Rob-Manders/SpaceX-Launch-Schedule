
import React from 'react'

export default function Card_Title({ name, ...props }) {
	return (
		<h2 className="card__title">{name}</h2>
	)
}