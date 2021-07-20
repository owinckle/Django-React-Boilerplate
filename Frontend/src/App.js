import React, { Component } from "react";
import { render } from "react-dom";

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.updateState	= this.updateState.bind(this);
	}

	updateState(target, value) {
		this.setState({
			[target]: value
		});
	}

	render() {
		return(
			<div>DJ React</div>
		)
	}
}

render(<App />, document.getElementById("app"));

function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie !== '') {
		var cookies = document.cookie.split(';');
		for (var i = 0; i < cookies.length; i++) {
			var cookie = jQuery.trim(cookies[i]);
			if (cookie.substring(0, name.length + 1) === (name + '=')) {
				cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
				break;
			}
		}
	}
	return cookieValue;
}