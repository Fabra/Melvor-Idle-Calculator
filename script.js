document.getElementById('cookingCalculator').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const cookingTimePerItem = parseFloat(document.getElementById('item').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    // Validate inputs
    if (isNaN(cookingTimePerItem) || isNaN(quantity) || cookingTimePerItem <= 0 || quantity <= 0) {
        document.getElementById('result').textContent = "Por favor, ingrese un numero valido.";
        return;
    }

    // Calculate total time in seconds
    const totalSeconds = cookingTimePerItem * quantity;

    // Convert to hours, minutes, and seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Display the result
    document.getElementById('result').textContent = 
        `Tiempo total de cocción: ${hours} horas, ${minutes} minutos, y ${seconds} segundos.`;
});