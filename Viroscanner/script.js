function checkUrl() {    
    var myInput = document.getElementById("input")
    var inputValue = myInput.value
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // Protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // Domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR IP (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // Port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // Query string
    '(\\#[-a-z\\d_]*)?$','i'); // Fragment locator
    if (pattern.test(inputValue) == true) {
        console.log("valid")
        window.location.href = "./results/results.html"
    } else {
        console.log("bad")
        alert("Invalid URL! Enter a valid one, i.e. https://youtube.com/")
    }
}