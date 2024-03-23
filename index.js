// Select the container element using its class
const containerEl = document.querySelector(".container")

// Create 30 color containers dynamically
for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div")
    colorContainerEl.classList.add("color-container")

    // Append each color container to the main container
    containerEl.appendChild(colorContainerEl)
}

// Select all color containers
const colorContainerEls = document.querySelectorAll(".color-container")

// Call the function to generate random colors for each container
generateColors()

// Function to generate random colors for each container
function generateColors() {
    // Iterate over each color container
    colorContainerEls.forEach(
        (colorContainerEl) => {
            // Generate a new random color code
            const newColorCode = randomColor()
            // Apply the new color to the background of the container
            colorContainerEl.style.backgroundColor = "#" + newColorCode;
            // Display the color code inside the container
            colorContainerEl.innerText = "#" + newColorCode
        })
}

// Function to generate a random hexadecimal color code
function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLengths = 6
    let colorCode = ""

    // Generate a random color code
    for (let index = 0; index < colorCodeLengths; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNumber, randomNumber+1) 
    }
    return colorCode
}
