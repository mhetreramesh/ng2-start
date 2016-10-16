class Greeter {
	saySomething(message: string = 'Whats up') {
		return "Hello " + message;
	}

}

var greeter = new Greeter();
greeter.saySomething('Ramesh');