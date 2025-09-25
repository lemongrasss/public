# Contact & Coding Buddy Survey

This project implements a simple contact form and survey about coding buddies, as requested in the issue.

## Features

- **Contact Details Form**: Collects user contact information
- **Coding Buddy Survey**: Asks about preferred dog and cat coding companions  
- **Responsive Design**: Clean, modern interface that works on various screen sizes
- **Interactive Feedback**: Shows submitted data immediately after form submission

## Files

- `index.html` - Main HTML form and page structure
- `style.css` - Styling and responsive design
- `script.js` - JavaScript for form handling and data display

## Usage

1. Open `index.html` in a web browser
2. The form comes pre-populated with the example data from the issue:
   - Contact Details: "ttt"
   - Dog coding buddy: "Wilbur"  
   - Cat coding buddy: "None"
3. Modify the fields as desired and click Submit
4. View the submitted information displayed below the form

## Local Development

To run locally with a web server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080` in your browser.

## Implementation Notes

This implementation directly addresses the issue requirements by:
- Creating a proper "Hi" titled page
- Including all three form fields mentioned in the issue
- Pre-populating with the exact values provided
- Providing a clean, professional interface for the survey