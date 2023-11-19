function App() {
	return (
		<>
			<h1>React App without NPM and bundlers</h1>
			<p>
				Using in-browser Babel Transformer. No build process. Be sure to add
				script tags to index.html.
				<br />
				<br />
			</p>
			<h2>Packages Included: </h2>
			<p>
				<br />
				<strong>Core:</strong>
				<ul>
					<li>React</li>
					<li>React-DOM</li>
					<li>Babel</li>
				</ul>
				<br />
				<strong>Optional:</strong>
				<ul>
					<li>React (Development)</li>
					<li>React-DOM (Development)</li>
					<li>React-router</li>
					<li>Recoil.js (for state management)</li>
					<li>Axios</li>
				</ul>
			</p>
		</>
	);
}
