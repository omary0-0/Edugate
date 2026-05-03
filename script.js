document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPass = document.getElementById('confirmPassword').value;
            if (password !== confirmPass) {
                alert("Password Doesn't match");
                return;
            }
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);
            alert("Account Created succsesfully!");
            window.location.href = 'index.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');
            if (email === storedEmail && password === storedPassword) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = 'home.html'; 
            } else {
                alert("The email address or password is incorrect, or the account does not exist!");
            }
        });
    }

    if (!signupForm && !loginForm) {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn !== 'true') {
            window.location.href = 'index.html';
        }
    }
});
// dark mode

if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    updateToggleButton();
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
    
    updateToggleButton();
}

// Search code (Materials page)

const search = document.getElementById("mySearch");
        const materials = document.querySelectorAll(".myMaterials");
        search.addEventListener("keyup", function(){const filter = search.value.toLowerCase();
            materials.forEach(subject => {const text = subject.textContent.toLowerCase();
            if (text.includes(filter)) {subject.style.display = "inline-block";}
            else {subject.style.display = "none";}
            });
        });

function updateToggleButton() {
    const button = document.querySelector('.dark-mode-toggle');
    if (document.body.classList.contains('dark-mode')) {
        button.textContent = '☀️ Light Mode';
    } else {
        button.textContent = '🌙 Dark Mode';
    }
}