# Eat Street Food App

This Food Application was developed as a final project for CS 4550 Web Development in Spring 2020. 
I built this in collaboration with Jon Volfson and Ateev Nahar.

The goal of this application is to help users find restaurants near them, get specific information about these restaurants, as well as keep track of their favorite restaurants.

This project uses the EatStreet Public API.

**Live React Application:** https://cs4550-sp20-eatstreets-m1.herokuapp.com/

**Live Java Server:** https://eatstreets-server.herokuapp.com/

*Available paths:*

| Path          | Page          |
| ------------- |:-------------:|
| /             | login page |
| /signup      | sign up page     |
| /home        | profile page      |
| /search             | restaurant search page |
| /restaurants      | restaurant search results page     |
| /restaurants/:restaurantID        | restaurant info page      |
| /privacy-policy        | privacy policy page     |
| /admin        | admin page     |


## Tools Used:
- React
- Redux
- HTML/CSS
- Java (for the Server)

## How We Built This

We built this project using React and Redux on the front end and Java on the server side. The project started out with a lot of design work, trying to figure out what pages and functionalities we wanted. We also had to find the EatStreet API that would become the crux of our functional offerings.
Once development started, I focused on implementing parts of the front end, while my other teammate built the Server. 
First I created well designed and simple components for each of the pages. 
Next, we had to make it functional. Integrating the restaurant search with the call to EatStreet's API was easy because they returned a lot of information based on any loose format of an address provided. 
One challenge I worked on was how to favorite restaurants. I did this by keeping a list of favorited restaurants associated with each user on the server. Favoriting a restaurant adds to that list, and each time a list of restaurants is rendered, It checks if that restaurant is in the users favorited list and highlights the favorite star accordingly.

With more time and without the circumstances of our semester being uprooted by Covid, we might have wanted to make the design more consistent throughout the site. We also started adding functionality for users to leave comments and reviews on restaurants similar to Yelp. We had the feature ready on the server side, but ultimately did not implement it in the application. 
