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
