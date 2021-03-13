
import React from 'react'

export default function Card_Section({ section, children, ...props }) {
	return (
		<div className={`card__section ${section}`}>
			<p className="card__section--header"><span></span>{section}<span></span></p>
			<div className="card__section--content">
				{children}
			</div>
		</div>
	)
}