function checkString() {
    const string = document.getElementById("textInput").value;
  
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "textInput=" + string
    })
      .then(response => response.text())
      .then(data => {
        document.getElementById("result").innerHTML = data;
      })
      .catch(error => {
        console.error("Error:", error);
      });
  }
  