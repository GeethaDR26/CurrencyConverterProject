// Registration
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const user = { username, email, password };
        localStorage.setItem('user', JSON.stringify(user));
        alert('Registration successful!');
        window.location.href = 'index.html';
    });
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert('Login successful!');
            window.location.href = 'converter.html';
        } else {
            alert('Invalid credentials!');
        }
    });
}

// Currency Converter
const convertBtn = document.getElementById('convertBtn');
if (convertBtn) {
    convertBtn.addEventListener('click', () => {
        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;
        const result = document.getElementById('result');

        // Dummy exchange rates
        const rates = {
            USD: { USD: 1, INR: 83, EUR: 0.92, GBP: 0.81 },
            INR: { USD: 0.012, INR: 1, EUR: 0.011, GBP: 0.0098 },
            EUR: { USD: 1.08, INR: 90, EUR: 1, GBP: 0.88 },
            GBP: { USD: 1.23, INR: 102, EUR: 1.14, GBP: 1 }
        };

        const converted = amount * rates[fromCurrency][toCurrency];
        result.innerText = `${amount} ${fromCurrency} = ${converted.toFixed(2)} ${toCurrency}`;
    });
}
