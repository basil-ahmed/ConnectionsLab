window.addEventListener('load', function() {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=') //access the json
    .then(response => response.json())
    .then(data => { // access the data IF the promise is fulfilled
      console.log(data);
      for (let index = 0; index < data.meals.length; index++) {
        let meal = data.meals[index];
        let a = this.document.createElement('a');
        a.href = meal.strYoutube;
        a.classList = "portfolio-item-wrapper";
        a.id = toString(index);
        a.target="_blank";
        let bg = this.document.createElement('div');
        bg.classList = "portfolio-img-background";
        let imageURL = meal.strMealThumb;
        bg.style.backgroundImage = 'url('+imageURL+')';
        let text = this.document.createElement('div');
        text.classList = "image-text-wrapper";
        text.innerHTML = meal.strMeal;
        text.style.fontSize = '40px';
        text.style.color = 'white';
        text.style.fontWeight = '900';
        // text.classList = "purple-text";
        // text.classList = "web-name";
        let parent = this.document.getElementById('parent');
        parent.appendChild(a);
        a.appendChild(bg);
        bg.appendChild(text);
      }

      const boxes=document.querySelectorAll('.portfolio-item-wrapper')//store all initial elements of class portfolio-item-wrapper
      const searchBar = document.getElementById('searchBar'); //search bar element

      searchBar.addEventListener('keyup',(e)=>{
          //searches the input and displays relevant boxes

          //remove all boxes currently on screen
          const currentBoxes=document.querySelectorAll('.portfolio-item-wrapper');
          currentBoxes.forEach(box1 => {
              identity=box1.id;
              removeElement(identity); //removes element from code
          });
          //store search input
          const searchString = e.target.value.toLowerCase();

          for (let index = 0; index < data.meals.length; index++) {

            let meal = data.meals[index];

            if (meal.strMeal.toLowerCase().includes(searchString)) {
              let a = this.document.createElement('a');
              a.href = meal.strYoutube;
              a.classList = "portfolio-item-wrapper";
              a.id = toString(index);
              a.target="_blank";
              let bg = this.document.createElement('div');
              bg.classList = "portfolio-img-background";
              let imageURL = meal.strMealThumb;
              bg.style.backgroundImage = 'url('+imageURL+')';
              let text = this.document.createElement('div');
              text.classList = "image-text-wrapper";
              text.innerHTML = meal.strMeal;
              text.style.fontSize = '40px';
              text.style.color = 'white';
              text.style.fontWeight = '900';
              // text.classList = "purple-text";
              // text.classList = "web-name";
              let parent = this.document.getElementById('parent');
              parent.appendChild(a);
              a.appendChild(bg);
              bg.appendChild(text);  
            }
            
          }

      function removeElement(elementId) {
          // Removes an element from the document
          var element = document.getElementById(elementId);
          element.parentNode.removeChild(element);
      }
    
      })

    })
    .catch(e => {
      console.log('there is an error', e);
    })

})