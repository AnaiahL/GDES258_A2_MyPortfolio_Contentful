var client = contentful.createClient({
    space: 'doyjwr20uabj',
    accessToken: 'NI7HlCvsDyGYB5yh6M2icdnKoArCozMGeozmCi9oKGw',
  });

// retrieving items from contentful
client.getEntries({content_type: 'anaiahLebreton'}).then(function (entries) {
    // looping through each entry
    entries.items.forEach(function (entry) {
      var item = document.createElement("div");
      item.classList.add("item");
    
      //calling Project titles
      var projectTitle = document.createElement("h2");
      projectTitle.innerHTML = entry.fields.projectTitle;
      item.append(projectTitle);

      //calling Project coverimages
      if (entry.fields.coverImage){
        var coverImage = document.createElement("img");
        coverImage.src = entry.fields.coverImage.fields.file.url;
        coverImage.classList.add("cover-image");
        item.append(coverImage);
      }

      //calling project descriptions
      var description = document.createElement("p");
      description.innerHTML = entry.fields.description;
      item.append(description);

      //calling project post Date
      var postDate = document.createElement("p");
      postDate.innerHTML = entry.fields.postDate;
      item.append(postDate);


      document.getElementById("place-for-content").append(item);
      console.log("title: " + entry.fields.projectTitle);
      console.log("Descr: " + entry.fields.description);
      console.log("postDate: " + entry.fields.postDate);
      console.log(entry.fields.coverImage.fields.file.url);
    });
  });
