document.getElementById("count").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var beratbadan = parseFloat(document.getElementById("bb").value);
    var tinggibadan = parseFloat(document.getElementById("tb").value / 100);
  
    var idm = beratbadan / (tinggibadan * tinggibadan);
  
    document.getElementById("hasil").textContent = idm.toFixed(2);
  
    var kurusDiv = document.getElementById("kurus");
    var normalDiv = document.getElementById("normal");
    var gemukDiv = document.getElementById("gemuk");
  
    if (idm <= 17) {
      kurusDiv.classList.remove("hidden");
      normalDiv.classList.add("hidden");
      gemukDiv.classList.add("hidden");
    } else if (idm > 17 && idm <= 25) {
      kurusDiv.classList.add("hidden");
      normalDiv.classList.remove("hidden");
      gemukDiv.classList.add("hidden");
    } else {
      kurusDiv.classList.add("hidden");
      normalDiv.classList.add("hidden");
      gemukDiv.classList.remove("hidden");
    }
  });