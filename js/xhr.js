var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://louisvilleky.gov/services/toolbox_forms.json?node_title=");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);


























var settings = {
            "async": true,
            /*"crossDomain": true,*/
            "Content-Type": "application/json",
            "url": "https://louisvilleky.gov/services/toolbox_forms.json?node_title=",
            "headers": {
                "cache-control": "no-cache",
                "Access-Control-Allow-Headers": "*",
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
