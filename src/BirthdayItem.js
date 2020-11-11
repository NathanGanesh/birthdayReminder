import React from 'react';

export default function BirthdayItem({ age, image, name }) {
	return (
		<div className="birthday-item">
			<img src={image} alt={name} />
			<div className="description-box">
				<p>{name}</p>
				<p className="age-description">{age} years</p>
			</div>
		</div>
	);
}
