
var Card = React.createClass({
	getInitialState: function() {
		return {};
	},
	componentDidMount: function() {
		var component = this;
		$.get('https://api.github.com/users/' + this.props.login, function(data) {
			component.setState(data);
		});
	},
	render: function() {
		return (
			<div>

				<div className="mdl-grid">
	  			<div className="mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet">
						<div className="demo-card-wide mdl-card mdl-shadow--2dp">
						  <div className="mdl-card__title">
								<img className="mdl-card_image" src={this.state.avatar_url} />
						    <h2 className="mdl-card__title-text">{this.state.name}</h2>
						  </div>
						  <div className="mdl-card__supporting-text">
						    Followers: {this.state.followers}
						  </div>
						  <div className="mdl-card__actions mdl-card--border">
						    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
						      FOLLOW
						    </a>
						  </div>
						  <div className="mdl-card__menu">
						    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
						      <i className="material-icons">share</i>
						    </button>
						  </div>
						</div>
					</div>
				</div>

			</div>
		)
	}
});

var Main = React.createClass({
	getInitialState: function() {
		return { logins: ['manidf', 'MaggotMouth', 'nicja', 'matthewgoslette']}
	},
	render: function() {
		var cards = this.state.logins.map(function(login) {
			return ( <Card login={login} />);
		});
		return (
			<div>
				{cards}
			</div>
		)
	}
});

ReactDOM.render(<Main />, document.getElementById("root"));
