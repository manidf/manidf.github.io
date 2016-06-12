# React github card component
### Code written in ES5
Using github API `https://api.github.com/users/manidf` we are able to get a user profile pic and their basic information and display a profile in a react front end, styled with material design.

This is the main entry point where the app is bootstrapped from using ReactDom.render method which hooks into the div with ID of `root`
```html
<div id="root"></div>
```

```javascript
ReactDOM.render(<Main />, document.getElementById("root"));
```

### Card component
```javascript
var Card = React.createClass({
	getInitialState: function() { // 1
		return {};
	},
	componentDidMount: function() { // 2
		var component = this; // 3
		$.get('https://api.github.com/users/' + this.props.login, function(data) { // 4
			component.setState(data); // 5
		});
	},
	render: function() {
		return (
			// THE HTML GOES HERE: please view actual source code.
		)
	}
});
```
1. Initialise component with an empty state object.
2. lifecycle hook `componentDidMount` used to access the data.
3. declare the component as a variable before the AJAX call.
4. use jQuery `$.get` method to get the data via AJAX. In the call back function we have access to the return object as the variable `data`. We must set the variable as the `new state` for this component
5. access the `setState` method in a callback function we need to declare the component as a variable before the call. point 3.
6. do `component.setState` and pass it in the `data` coming in from the api
7. in the `render` method we can access the profiles.
