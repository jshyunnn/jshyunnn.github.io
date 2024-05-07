document.addEventListener('DOMContentLoaded', function () {

  // Create function to call from OCHRE API and retrieve results
  // using an XHR object
  function requestXML(link) {

    var connect = new XMLHttpRequest();
    connect.onreadystatechange = function() {
      if (connect.readyState == 4 && connect.status == 200) {
        parseXML(connect.responseXML);
      }
    };
    connect.open("GET", link, true);
    connect.send();
    console.log('requestXML -- OK');

    // Create third function to extract properties and desired images from
    // OCHRE XML
    function parseXML(sourceXML) {
      // Extract title of item for the webpage
      var textTitle = sourceXML.getElementsByTagName('identification');
      var title_string = document.createTextNode(textTitle[1].textContent);
      document.getElementById('title').appendChild(title_string);

      // Extract preview image of item for the webpage
      if (sourceXML.getElementsByTagName('resource')[0].getAttribute("format") == "image/jpeg") {
        var img = document.createElement('img');
        var src = link + "&preview";
        img.src = src;
        document.getElementById('preview').appendChild(img);
      }
    }

  };

  let data_uuid = document.getElementById("ochreContainer").getAttribute("data-uuid");
  let ochre_url = 'https://ochre.lib.uchicago.edu/ochre?uuid=';
  let link = ochre_url + data_uuid;
  requestXML(link);

});
