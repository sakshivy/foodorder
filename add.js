

function Calculate() {
  //   var resources = document.getElementById('indian').value;

  var v1 = document.getElementById('indian').value;
  var v2 = document.getElementById('chinese').value;
  var v3 = document.getElementById('starter').value;
  var v4 = document.getElementById('dessert').value;
  var v5 = document.getElementById('fastfood').value;
  // console.log(v1, v2, v3, v4, v5, "values")
  // var minutes = document.getElementById('a2').value;
  // var result = document.getElementById('v1').value = parseInt(resources) * parseInt(minutes);
  // console.log(result)
  // document.form1.submit(); 

  var gstPercentage = 18;
  var tipPercentage = 10;
  var gst;
  var tip;
  var total;
  var grandtotal;

  alert("Order placed successfully");
  alert("Order ");


  total = parseInt(v1) + parseInt(v2) + parseInt(v3) + parseInt(v4) + parseInt(v5);
  // document.getElementById("if").value = total;
  console.log('total:', total);
  gst = (total * gstPercentage) / 100;
  console.log('gst:', gst);
  tip = (total * tipPercentage) / 100
  console.log('tip:', tip);
  grandtotal = total + gst + tip;
  console.log('grandtotal:', grandtotal);
  var resultOutput = "Bill Details<br><br>";
  if (total >= 5000) {
    resultOutput += "Total:" + total + "<br><br>GST:" + gst + "<br><br>Tip:" + tip + "<br><br>Total:" + grandtotal;

  } else {
    grandtotal = total;
    resultOutput += "Total:" + total + "GST:" + grandtotal;
  }
  document.getElementById("result").innerHTML = resultOutput;

};
