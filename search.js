function searchGoogle() {
  const query = document.getElementById("searchQuery").value;
  const url =
    "https://www.google.com/search?q=" + encodeURIComponent(query);
  window.location.href = url;
}

document
  .getElementById("searchQuery")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchGoogle();
      event.preventDefault(); // Prevent form submission
    }
  });