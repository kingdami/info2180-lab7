function handle () {
    if(document.getElementById("box").checked === true) {
        var httpRequest = new XMLHttpRequest();

        var place = document.getElementsByName("country")[0].value;
    
        httpRequest.open("GET", "world.php?country=", true);
    	httpRequest.send();
    	httpRequest.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("result").innerHTML = this.responseText;
                }
            };
    } else {

    var httpRequest = new XMLHttpRequest();

    var place = document.getElementsByName("country")[0].value;
    
    httpRequest.open("GET", "world.php?country="+place, true);
	httpRequest.send();
	httpRequest.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("result").innerHTML = this.responseText;
            }
        };
    }
}