const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if(mobileMenu){
    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

const form = document.getElementById('contactForm');

if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const message = document.getElementById('message');
        const terms = document.getElementById('terms');

        resetErrors();

        let isValid = true;

        if(name.value.trim() === "") {
            showError('error-name', "Name cannot be empty!");
            isValid = false;
        }

        const emailVal = email.value.trim();
        if(!emailVal.includes('@') || !emailVal.includes('.')) {
            showError('error-email', "Invalid email format (must contain '@' and '.')");
            isValid = false;
        }

        if(phone.value.length < 10) {
            showError('error-phone', "Phone number must be at least 10 digits");
            isValid = false;
        }

        // 4. Validasi Message (Min 5 words)
        // Split berdasarkan spasi buat itung kata
        const wordCount = message.value.trim().split(" ").length;
        if(message.value.trim() === "" || wordCount < 5) {
            showError('error-message', "Message must be at least 5 words");
            isValid = false;
        }

        // 5. Validasi Terms (Wajib dicentang)
        if(!terms.checked) {
            document.getElementById('error-terms').innerText = "You must agree to T&C";
            document.getElementById('error-terms').style.display = "block";
            isValid = false;
        }

        if(isValid) {
            alert("Success! Data submitted.");
            console.log("Registered:", name.value);
            form.reset(); // Kosongin form
        }
    });
}

// Helper Function buat error
function showError(id, message) {
    const el = document.getElementById(id);
    el.innerText = message;
    el.style.display = 'block';
}

function resetErrors() {
    const errors = document.querySelectorAll('.error-text');
    errors.forEach(el => el.style.display = 'none');
}