To put it simply, both useState and useEffect enhance functional components to make them do things that classes can but functional components (without hooks) cannot:

* ```useState``` allows functional components to have *state*, like ```this.state``` in class components.
* ```useEffect``` allows functional components to have *lifecycle methods* (such as ```componentDidMount```, ```componentDidUpdate``` and ```componentWillUnmount```) in one single API.

Great explanation by [@angshun-tay](https://stackoverflow.com/a/53243516/11464527)