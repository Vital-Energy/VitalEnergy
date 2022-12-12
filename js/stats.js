/*
function counter(c) {
  var b = 7000;
  var a = 0;
  var e = setInterval(function() {
    a > b;
    c.innerText = "+"+a+" trabajadores";
    a += 28;
    a > b && clearInterval(e)
  }, 10, c, b, a, e)
}

counter(document.getElementById("countCentrales"), "2-29-2019", 1000, 200);
*/


function counter1(c) {
        var b = 7000;
        var a = 0;
        var e = setInterval(function() {
          a > b;
          c.innerText = "+"+a+" trabajadores";
          a += 28;
          a > b && clearInterval(e)
        }, 10, c, b, a, e)
      }
      function counter2(c) {
        var b = 480;
        var a = 0;
        var e = setInterval(function() {
          a > b;
          c.innerText = "+"+a+" fábricas";
          a += 2;
          a > b && clearInterval(e)
        }, 10, c, b, a, e)
      }
      function counter3(c) {
        var b = 140;
        var a = 0;
        var e = setInterval(function() {
          a > b;
          c.innerText = "+"+a+" centrales";
          a += 1;
          a > b && clearInterval(e)
        }, 10, c, b, a, e)
      }

      counter1(document.getElementById("countTrabajador"), "2-29-2019", 1000, 200);
      counter2(document.getElementById("countCentrales2"), "2-29-2019", 1000, 200);
      counter3(document.getElementById("countCentrales3"), "2-29-2019", 1000, 200);