
var Card = React.createClass({
	getInitialState: function() {
		return {};
	},
	componentDidMount: function() {
		var component = this;
		$.get('https://api.github.com/users/manidf', function(data) {
			component.setState(data);
		});
	},
	render: function() {
		return (
			<div>
				<img src={this.state.avatar_url} width="200" />
				<h3>{this.state.name}</h3>
				<hr />
			</div>
		)
	}
});

var Main = React.createClass({
	render: function() {
		return (
			<div>
				<Card login="manidf" />
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById("root"));
