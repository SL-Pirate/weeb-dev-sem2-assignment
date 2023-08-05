function displayDetails(name, role) {
    document.getElementById('details').innerHTML = name + ', ' + role;
    document.getElementById('details').style.backgroundColor = "#3d3d3d";
  }
  function clearDetails() {
    document.getElementById('details').style.backgroundColor = "#ffffff";
    document.getElementById('details').innerHTML = '';
  }

clearDetails();
