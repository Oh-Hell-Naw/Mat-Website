const loadHead = async () => {
    try {
        const response = await fetch('/imports/head.html');
        const text = await response.text();
        document.querySelector("#head-placeholder").innerHTML = text;
    } catch (error) {
        console.error('Error loading head:', error);
    }
}

const loadFooter = async () => {
    try {
        const response = await fetch('/imports/footer.html');
        const text = await response.text();
        document.querySelector("#footer-placeholder").innerHTML = text;
    } catch (error) {
        console.error('Error loading footer:', error);
    }
}

const loadNavbar = async () => {
    try {
        const response = await fetch('/imports/navbar.html');
        const text = await response.text();
        document.querySelector("#navbar-placeholder").innerHTML = text;
    } catch (error) {
        console.error('Error loading navbar:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadHead();
    loadFooter();
    loadNavbar();
});
