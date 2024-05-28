// load navbar
function loadNavbar() {
    fetch('../imports/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));
}

document.addEventListener('DOMContentLoaded', loadNavbar);

// load footer

function loadFooter() {
    fetch('../imports/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading the navbar:', error));
}

document.addEventListener('DOMContentLoaded', loadFooter);