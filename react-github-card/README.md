# React github card component
Using github API `https://api.github.com/users/manidf` we are able to get a user profile pic and their basic information and display a profile in a react front end, styled with material design.

This is the main entry point where the app is bootstrapped from using ReactDom.render method which hooks into the div with ID of `root`
```html
<div id="root"></div>
```

```javascript
ReactDOM.render(<Main />, document.getElementById("root"));
```
