function test() {
  
  console.log(document.getElementById('blue'));
  document.getElementsByClassName('blue button').addEventListener('click', change_blue);
  console.log(blue);
  
  let red = document.getElementsByClassName("red button");
  red.addEventListener("click", change_red);
  
  let yellow = document.getElementsByClassName("yellow button");
  yellow.addEventListener("click", change_yellow);
  
  function change_red() {
    document.body.style.backgroundColor = "red";
  }
  function change_blue() {
    document.body.style.backgroundColor = "blue";
  }
  function change_yellow() {
    document.body.style.backgroundColor = "yellow";
  }
  
  let submit = document.getElementsByClassName("submit");
  submit.addEventListener("click", add_food);
  
  function add_food() {
    var item = document.getElementsByClassName("fav_food").value;
  
    document.getElementsByClassName("add_food").innerHTML = "<p>" + item + "</p>";
  }
}
test();

