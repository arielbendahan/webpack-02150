import './feedback.scss';

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.querySelector('input[name="rating"]:checked');
    

    if (!name || !email || !rating) {
        alert("Please fill out all fields, including rating!");
        return;
    }


    const thankYouMessage = document.createElement('div');
    thankYouMessage.innerHTML = `
        <p>Thank you for your feedback, ${name}!</p>
        <p>We appreciate your comments and will use them to improve our website.</p>
    `;
    

    const form = document.querySelector('form');
    form.appendChild(thankYouMessage);
});
