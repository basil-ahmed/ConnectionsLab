window.addEventListener('load', function() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      let title = data.meals[0].strMeal;
      let h3 = document.createElement('h3');
      h3.innerHTML = title;
      this.document.body.appendChild(h3);
      let desc = data.meals[0].strInstructions;
      let p = document.createElement('p');
      p.innerHTML = desc;
      this.document.body.appendChild(p);
      let youtube = data.meals[0].strYoutube;
      let a = document.createElement('a');
      a.innerHTML = 'Link to Video';
      a.href= youtube;
      this.document.body.appendChild(a);
    //   let pic = data.meals[0].strMealThumb;
    //   let img = document.createElement('img');
    //   img.innerHTML = pic;
    //   img.classList.add("content")
    //   document.body.appendChild(img);
    })
    .catch(e => {
      console.log('there is an error', e);
    })
  })