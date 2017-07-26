// hide output
document.getElementById('output').style.visibility = "hidden";

  //addEventListener for input
  document.getElementById("lbsInput").addEventListener('input', function (e){
    //show output on input
    document.getElementById('output').style.visibility = "visible";

    let pounds = e.target.value;
    document.getElementById('gramsOutput').innerHTML = (pounds /0.0022046).toFixed(2);
    document.getElementById('kilogramsOutput').innerHTML = (pounds /2.2046).toFixed(2);
    document.getElementById('ouncesOutput').innerHTML = pounds * 16;
  });
