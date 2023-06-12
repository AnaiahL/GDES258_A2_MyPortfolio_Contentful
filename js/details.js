var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textinURL);
var id = parametersinURL.get('id');

var client = contentful.createClient({
    space: 'doyjwr20uabj',
    accessToken: 'NI7HlCvsDyGYB5yh6M2icdnKoArCozMGeozmCi9oKGw',
    })

    client.getEntry(id).then(function (entry) {
    var projectTitle = document.createElement("h2");
      projectTitle.innerHTML = entry.fields.projectTitle;
    

    document.getElementById("place-for-content").append(projectTitle)
    console.log(entry);
    var gallery = document.createElement('div');
    document.getElementbyId("place-for-content").append(gallery);

    entry.fields.gallery.forEach(function (galleryImage) {
        console.log(galleryImage);
        var image = document.createElement("img");
        image.src = galleryImage.fields.file.url;
        gallery.append(image);
    })
})
