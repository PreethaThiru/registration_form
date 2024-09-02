// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Image Slider Logic
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    
    let currentIndex = 0;
    const totalImages = images.length;

    function moveToNextSlide() {
        currentIndex++;
        if (currentIndex >= totalImages) {
            currentIndex = 0; // Loop back to the first image
        }
        updateSliderPosition();
    }

    function updateSliderPosition() {
        const translateX = -currentIndex * 100; // Move by 100% for each slide
        slides.style.transform = `translateX(${translateX}%)`;
    }

    // Automatically move to the next slide every 3 seconds
    setInterval(moveToNextSlide, 3000);

    // Signup Form Logic
    document.getElementById('signup-form')?.addEventListener('submit', function(e) {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Store credentials in localStorage
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        console.log("Stored Email: ", email);
        console.log("Stored Password: ", password);

        alert("Signup successful!");

        // Redirect to index page for login
        window.location.href = 'index.html';
    });

    // Login Form Logic
    document.getElementById('login-form')?.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Retrieve stored credentials
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        console.log("Entered Email: ", email);
        console.log("Entered Password: ", password);
        console.log("Stored Email: ", storedEmail);
        console.log("Stored Password: ", storedPassword);

        if (email === storedEmail && password === storedPassword) {
            // Set a flag in localStorage to indicate successful login
            localStorage.setItem('loggedIn', 'true');

            alert("Login successful!");

            // Redirect to the homepage
            window.location.href = 'index.html';
        } else {
            alert("Invalid email or password!");
        }
    });
});

// Multi-Step Form Logic
function nextStep() {
    const activeStep = document.querySelector('.form-step.active');
    const nextStep = activeStep.nextElementSibling;
    
    if (nextStep && nextStep.classList.contains('form-step')) {
        activeStep.classList.remove('active');
        nextStep.classList.add('active');
    }
}

function prevStep() {
    const activeStep = document.querySelector('.form-step.active');
    const prevStep = activeStep.previousElementSibling;
    
    if (prevStep && prevStep.classList.contains('form-step')) {
        activeStep.classList.remove('active');
        prevStep.classList.add('active');
    }
}

// Form Submission Logic
document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Log form data for debugging (can be removed in production)
    const formData = new FormData(this);
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }

    // Display success message
    document.getElementById('message').textContent = 'Registration Completed';

    // Set a flag in localStorage to indicate successful registration
    localStorage.setItem('registered', 'true');

    // Redirect to index page after a short delay
    setTimeout(function() {
        window.location.href = 'index.html'; // Adjust to the correct path
    }, 2000); // 2 seconds delay
});

