function sayHello(): void {
    const outputElement = document.getElementById("output");
                if (outputElement) {
                    outputElement.innerText = "Hello, World!";
                }
}