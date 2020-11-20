function init(){
//add your javascrip between these two lines of code
  var entry = document.getElementById('entryinput');
  var button = document.getElementById('entrybutton');
  var txoutput = document.getElementById('textoutput');
  button.addEventListener('click', function(){
    alert('Fredrick Mutnansky: ' + entry.value);
    txoutput.innerHTML = entry.value;
  });
}
window.addEventListener('load', init);
