import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	return (
		<h2>
			<List data={data} />
		</h2>
	);
}

export default App;
