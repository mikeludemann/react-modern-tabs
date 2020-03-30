import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';

import { Tabs } from './components/tabs';

const TABS = [
	{ label: "Tab 1", value: 1 },
	{ label: "Tab 2", value: 2 },
	{ label: "Tab 3", value: 3 }
];

function App() {
	const [activeTab, handleTab] = useState(1);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<Tabs tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
			<div className="tab-content">
				{" "}
				<div> Content of Tab {activeTab}</div>
			</div>
		</div>
	);
}

export default App;
