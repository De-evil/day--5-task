// For the above json, iterate over all the for loops (for, for in, for of, forEach)
var xhr = new XMLHttpRequest();
xhr.open('GET', './resumeee.json', true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    var jsonData = JSON.parse(xhr.responseText);
    for (var key in jsonData.basics) {
      if (jsonData.basics.hasOwnProperty(key)) {
        console.log(key + ":", jsonData.basics[key]);
      }
    }
  } else {
    console.error('Request failed with status:', xhr.status);
  }
};
xhr.onerror = function() {
  console.error('Error fetching data.');
};
xhr.send();
