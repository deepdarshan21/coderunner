//document.write("<!--<h1>Welcome to my new page</h1>-->  <!--<h2> Do you like that </h2>-->")

function html() {
    var x;
    x = document.getElementById("runhtml").value;
    document.getElementById("test").innerHTML = x;
}