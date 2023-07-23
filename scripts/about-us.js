function displayDetails(name, role) {
    document.getElementById('details').innerHTML = name + ', ' + role;
  }
  function clearDetails() {
    document.getElementById('details').innerHTML = '';
  }