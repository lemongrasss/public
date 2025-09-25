document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const resultsDiv = document.getElementById('results');
    const submittedDataDiv = document.getElementById('submittedData');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            contactDetails: formData.get('contactDetails'),
            dogBuddy: formData.get('dogBuddy'),
            catBuddy: formData.get('catBuddy')
        };

        // Display results
        displayResults(data);
        
        // Show results section
        resultsDiv.style.display = 'block';
        
        // Scroll to results
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    });

    function displayResults(data) {
        submittedDataDiv.innerHTML = `
            <div class="result-item">
                <div class="result-label">Contact Details:</div>
                <div class="result-value">${data.contactDetails || 'Not provided'}</div>
            </div>
            <div class="result-item">
                <div class="result-label">Which dog makes the best coding buddy?</div>
                <div class="result-value">${data.dogBuddy || 'Not provided'}</div>
            </div>
            <div class="result-item">
                <div class="result-label">Which cat makes the best coding buddy?</div>
                <div class="result-value">${data.catBuddy || 'Not provided'}</div>
            </div>
        `;
    }

    // Pre-populate with example data from the issue
    document.getElementById('contactDetails').value = 'ttt';
    document.getElementById('dogBuddy').value = 'Wilbur';
    document.getElementById('catBuddy').value = 'None';
});