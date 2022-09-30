# Interactive Media
## Connections Lab
### Project 1: World Food Recipes

[Link to Wesbite](https://basil-ahmed.github.io/ConnectionsLab/WorldFoodRecipes/)

#### Initial Idea:

My idea is to create a webpage on food recipes that come from all around the world. The webpage will be in a grid format where only the food of the picture will be displayed along with the dish’s name. When you hover over the image, it will flip and show you the recipe along with a link to the recipe’s youtube link. I will also place a search bar on the website and when a user searches something, from the grid, only those images/blocks will be left that match the search bar content. I will be using an open source API based on meals where I will get all the information I need. I am also thinking of creating another page using p5.js where there will be a map shown and when you go to a certain region, it will show you the meals based on that region. I might also divide the meals based on regions, or other categories, but for now, that is not part of the plan since I am trying to give as much accessibility as I can, especially by developing a search feature.

[Initial Wireframe](https://github.com/basil-ahmed/ConnectionsLab/blob/main/WorldFoodRecipes/1st%20Wireframe.pdf)

#### Progress:
- I started with looking for an open-source WebAPI and came accross a lot of them. I founded [this](https://www.themealdb.com/api.php) food recipe one and several ideas gushed my mind.
- I then came up with the initial idea that I have written above.
- So far, I have been able to get data from the JSON URL and I have been able to display that on my webpage. However, I still have to figure out a way for getting the pictures from the URL and directly display them on my webpage.
- The upcoming step is also dividing the website into a grid using html and css.
- I made the header and used an "active" id to highlight the tab that the website is on.
- I also made a search bar and styled the whole header in a way that it looks visually appealing.

<img width="1439" alt="Screen Shot 2022-09-30 at 6 20 30 PM" src="https://user-images.githubusercontent.com/90772853/193294799-bb6083f1-4603-4a66-85c1-6ad5b35aca6f.png">

- Then I made the grid with 3 columns so 3 meals come in one row. I took the background of each box as the image from the mealDB API and implemented in the HTML through JavaScript.
- I also styled the names of the meals as well.
- Initially, in the HTML, I created an empty div but using JavaScript I added and created elements by using a for loop that goes through every meal and creates the relevant HTML elements for it.
- When you hover over a specific meal, it turns darker and when you click it, it takes to its' recipe's youtube link which was also gotten from the API.
- Lastly, I made the page responsive for both mobile phones, tablets, and even smaller window sizes.
- At this point, my home page was basically finished. However, I had to add the Search bar functionality. I used JavaScript and when you put in text in the search bar, it will search for the elements and if any of the meal titles contain that text, they are going to be shown in the same grid way.

<img width="1440" alt="Screen Shot 2022-09-30 at 6 20 08 PM" src="https://user-images.githubusercontent.com/90772853/193294937-25464345-9977-420f-9a7c-c2d1e2b4f1fe.png">

- Now, the next step was to make the other page "By Region".
- I had to include a map on the webpage. The options I found, after a lot of research, were Mapbox, Mappa, Leaflet.
- After a lot of trial and error, and learning these js libraries, I decided on Leaflet. 
- I put in markers in the countries that the meals were from.
- The next challenge was to make the markers interactive. I tried a lot of things for so long, but at last I came up with a simple solution: just adding an "addEventListener" method directly to the marker variable.

<img width="1438" alt="Screen Shot 2022-09-30 at 6 42 47 PM" src="https://user-images.githubusercontent.com/90772853/193295376-823133a5-e894-439f-98cb-3c8b5d58db8a.png">

- The next step was to decide and figure out how to show the meals from that specific region.
- I did that by going through the API again and checking if the region matches with what the user wants.
- I then showed those meals in the same grid format.
- Again the challenge here was when you wanted to check another region after one, it was not clearing the already existing meals there.
- The last thing I did was to figure that out and then I was officialy done!

<img width="1439" alt="Screen Shot 2022-09-30 at 6 43 03 PM" src="https://user-images.githubusercontent.com/90772853/193295430-0b8ef96d-cf44-4e30-8be9-d7d34cdf46e0.png">

- After our last presentation, I got extremely good suggestions and betterments for the website.
- One of them was that the name of the meal is unclear in some images. 
- The solution I came up with was adding a black shadow to the white text to make it more visible.
- It worked!

<img width="483" alt="Screen Shot 2022-09-30 at 6 50 06 PM" src="https://user-images.githubusercontent.com/90772853/193298228-faa61f38-79f4-42f2-b7d8-650e0537c351.png">

#### Challenges:


#### Learnings:
- I learned how to fetch and use the JSON file data from anywhere.
- I learned how to create elements with JavaScript and use them to display data that I picked up from the internet. In other words, add data as the website is working and not pre-loaded (which is extremely cool).
- Lastly, I learned how to create an 'a' tag with JavaScript alone (I was confused on how to actually add the link I have to go to and not only the 'innerHTML').

#### References:
