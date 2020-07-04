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


To run locally:

1) Clone this repository
2) Clone the server repository:  https://github.com/jonvolfson/cs4550-proj-server.git

3) In this repository run 
```
npm install
npm start
```

4) In the server repository

```
mvn clean install
java -jar target/*.jar
```
