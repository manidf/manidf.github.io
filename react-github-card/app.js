
var Card = React.createClass({
	render: function() {
		return (
			<div>
				<img src="https://avatars.githubusercontent.com/u/210504?v=3" width="200" />
				<h3>Name here</h3>
				<hr />
			</div>
		)
	}
});

var Main = React.createClass({
	render: function() {
		return (
			<div>
		Hello
			</div>
		)
	}
});

React.render(<Main />, document.getElementById("root"));
