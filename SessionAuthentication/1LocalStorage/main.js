var images = new Map([
  ["lucy", 'https://static-assets.codecademy.com/content/paths/web-security/sessions-cookies/localStorage-exercise/lucy.jpg'],
  ["red", 'https://static-assets.codecademy.com/content/paths/web-security/sessions-cookies/localStorage-exercise/red.jpg'],
  ["maxine", 'https://static-assets.codecademy.com/content/paths/web-security/sessions-cookies/localStorage-exercise/maxine.jpg'],
]);

function selectProfile(name){
  if (name != localStorage.getItem('profile')) {
    alert("Now setting character to... " + name)
  }
  // Name arg is passed as value for profile key.
  localStorage.setItem('profile', name);
}

function loadProfile(){
  // Set character to the 'profile' value from localStorage
  var character = localStorage.getItem('profile');

  if (character) {
    display_character(character)
  }
}

function display_character(name) {
  var img = document.createElement('img');
  img.src = images.get(name);
  document.getElementById('character').appendChild(img);
} 

function loadHome(){
  if (localStorage.getItem('profile')) {
    display_character(name)
  }
}