Project Title: 📛
movie-app

Live Link / Demo Link: 🔗
Add a working link of the project if it is hosted somewhere on the internet :earth_africa: right after the title so that people can quickly access and have a feel of what and how the project works.

Table of Content: 📑
https://github.com/monstar-lab-technical-challenge/ml-frontend-test-Miguel-A-Rodriguez/tree/Miguel_Branch

About the Project: 📚
This project was a technical project given by the company Monstar Lab.
This project makes calls to https://developers.themoviedb.org/3 a website that holds a public api for various movies/tv shows.
The goals of the project are as follows: 
1) Make an API key following the steps here: https://developers.themoviedb.org/3/getting-started/introduction 
2) Film search (using this API endpoint GET https://api.themoviedb.org/3/search/movie?api_key={apikey}&query=), display the films in whatever UI you want. 
3) The user should be able to see details of the film (endpoint GET https://api.themoviedb.org/3/movie/{movie_id}?api_key={apikey})
4) The user should be able to favorite and unfavorite a movie (use whatever local storage that you think make sense) 
5) The user should be able to see a list of favorite movies (and from there go to the detail movie screen)

Screenshots: 📷
Add a picture or short video(gif) demo of how the project works.

Adding movies to your favorites page:
https://cdn.discordapp.com/attachments/829322098241044554/953299458404278292/movie-app_Home_Page_Gif_.gif

Removing movies from your favorites page:
https://media.discordapp.net/attachments/829322098241044554/953299431581708308/movie-app_Favorites_Page_Gif_.gif

Viewing the details of your favorite movies:
https://media.discordapp.net/attachments/829322098241044554/953299399558201344/movie-app_Favorites_to_Details_Page_Gif_.gif

Technologies Used: ☕️ 🐍 ⚛️
The technologies used in this project are as follows:
1. React.js (React hooks/ React useEff, useState, etc)
2. Redux/Redux.js (Global State Management that uses a data store and action-creators/reducers to store and remove data from the store)
3. Axios Axios is an HTTP client library that allows you to make requests to a given endpoint
3. Vanilla CSS (Styled with vanilla CSS. Was planning to use TailWind for my css, but was unable to install in a working manner) 
4. Font-Awesome (Icons used from: https://fontawesome.com/v5/docs/web/use-with/react )

Setup / Installation: 💻
To run this project you will need to install/run the following:
1. Begin with building a react app: npx create-react-app my-app
2. To install redux use: npm install redux/react-redux/npm install redux-thunk
3. To install Axios use the folloing: npm install axios
4. To install fontawesome use npm i --save @fortawesome/fontawesome-svg-core/npm install --save @fortawesome/free-solid-svg-icons/npm install --save @fortawesome/react-fontawesome


Approach: 🚶
My overall goal when coding with this project was to challenge myself in using a technology(s) for the first time.
I was interested in redux for awhile so I made it my goal to use redux as my state management system for 99% of the project.
Some reducers could have been merged into one another such as movieReducer/movieIdReducer.
The project attempts to keep each page/component to as few lines of code as possible. 
To those whose first time it is using redux it can be challenging to keep track of what each global state is doing in each page. 
The naming of the states and other variables must be improved upon. 

Status: 📶
The project is still suffering from a few issues.
1. The project is not currently responsive due to time constraints. Planning to make it responsive later.
2. During testing I found that the "addFavoriteMovie" section of the "favoriteMovieReducer" suffers from adding multiple of the same movie. 
   A potential solution is adding a check that filters the favoriteMovieState for the selected movie and returning out of the function before the movie is added more than once. 
3. File naming is still lacking as multiple files are called index.js, I plan to change these file names later on for easier readability.  

Credits: 📝
I give credits to youtube creator FunFunFunction for helping me understand Higher-order functions on a deeper level.
https://www.youtube.com/watch?v=BMUiFMZr7vk&t=571s&ab_channel=FunFunFunction