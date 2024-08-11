document.getElementById("btn").addEventListener("click", async function() {
    // Retrieve the user-provided values from the input fields
    const text = document.getElementById("text").value;
    const delay = parseInt(document.getElementById("delay").value);

    // Validate the delay input
    if (isNaN(delay) || delay < 0) {
        document.getElementById("output").textContent = "Please enter a valid positive delay.";
        return;
    }

    // Create a function that returns a promise resolving after the specified delay
    function delayMessage(text, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(text);
            }, delay);
        });
    }

    // Use async/await to handle the delay and update the output
    const result = await delayMessage(text, delay);
    document.getElementById("output").textContent = result;
});


