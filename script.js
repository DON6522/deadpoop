document.addEventListener('DOMContentLoaded', () => {
    const claimButton = document.getElementById('claimButton');
    const claimForm = document.getElementById('claimForm');
    const submitBtn = document.getElementById('submitBtn');
    const inputText = document.getElementById('inputText');
    const jsonOutput = document.getElementById('jsonOutput');

    claimButton.addEventListener('click', () => {
        claimForm.classList.remove('hidden');
    });

    submitBtn.addEventListener('click', async () => {
        const text = inputText.value.trim();
        if (text) {
            try {
                const response = await fetch('https://thunder-yvdv.onrender.com/data', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ text: text }) // Ensure key matches server
                });

                // Handle JSON response
                const result = await response.json();
                jsonOutput.textContent = result.message; // Assuming server returns a message
                jsonOutput.classList.remove('hidden');
            } catch (error) {
                jsonOutput.textContent = 'Error: ' + error.message;
                jsonOutput.classList.remove('hidden');
            }
        }
    });
});
