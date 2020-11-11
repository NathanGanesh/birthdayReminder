import React from 'react';
import BirthdayItem from './BirthdayItem';

const List = ({ data }) => {
	const [ list, setList ] = React.useState(data);
	// console.log(d);
	return (
		<div className="box">
			<h2>{list.length} birthdays today</h2>
			{list.map((item) => {
				return <BirthdayItem key={item.id} name={item.name} age={item.age} image={item.image} />;
			})}
			<div className="container">
				<button className="clear-button" onClick={() => setList([])}>
					Clear All
				</button>
			</div>
		</div>
	);
};

export default List;
