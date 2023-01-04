# VirtualDom (miniReact proyect)

**I create a micro version of React**

React use Babel code to transpile JSX in JS, and compile in functions that browser interprets

####  This is a home version

This is functional library, to use this you add *virtualDom* folder in your workspace.

- First, create in your index.html a **div** tag with id *app*

Inside, everything will happen.

	<div id="app"></div>

In your **main.js** to init the app import *main* from "App.js"

	/*main.js*/
	import { main } from "./App.js"
	const app = main()

if you not create **app container**, init without parameters,else you like use another container, init main function with id of new container

	/*main.js*/
	import { main } from "./App.js"
	const app = main(ID) //ID is string

Default **VirtualDom** use [Bootswatch](https://bootswatch.com/ "Bootswatch"), framework UI/UX, if you have a *css* file, init before in your HTML, else **VirtualDom** make a file.

### How to use?

Create a components folder and create your first component:

	/*Welcome.js*/
	import { vdom } from "./virtualDom/virtualDom.js"
	
	export function Welcome(p){
	return vdom("h1",
				null,
				`Welcome to vDom ${p.name}`)}

The above code creates a function that returns a VDOM object to render

in your **main.js** impor this function

	/*main.js*/
	import { main } from "./App.js"
	import {Welcome} from "./Welcome.js"
	
	const app = main()
	render(app,Welcome({name:"Braiidev"}))

this return in live-server:

![screenshot](https://user-images.githubusercontent.com/86991447/210621195-17fec345-19ed-41db-95fe-ea5d295a8dd3.png)

## More help

Contact me [in here](http://portfolio.braiidev.com "in here")
