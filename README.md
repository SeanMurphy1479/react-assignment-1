# Assignment 1 - ReactJS app.

Name: Seán Murphy

<!--

## Overview.

[A brief statement on the content of this repository.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Ranking Movies on Rating 
+ Feature 2
+ Feature 3
+ etc
+ etc

## Setup requirements.
[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

1. Clone the repository

``` 
git clone https://github.com/SeanMurphy1479/react-assignment-1
cd movies
```

2. Ensure Node.js is installed
```
npm install
npm install --save-dev @babel/plugin-proposal-private-property-in-object
```

3. Set Up API Key
Create a .env file in the root directory with the following information and your own API key
```
REACT_APP_TMDB_KEY=<YOUR-API-KEY>
FAST_REFRESH=false
```

4.Start the Local Website
```
npm start
```

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

+ Popular list of movies - movie/popular
+ Credits list of movies - movie/:id/credits
+ Actor Details - person/:id
+ Actor Movies Credits - person/:id/movie_credits
+ Now playing list of movies -movie/now_playing
+ Recommended Movies - movie/:id/recommendations

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/popular - Displays Popular Movies
+ /movies/now_playing - Displays Movie that are Playing in Cinema's 
+ /person/:id - Displays Details About an Actor 
+ /movies/watchlist - Displays Movies that have been added to user's watchlist

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project, 
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these 
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

Data: credits

https://refine.dev/blog/react-query-guide/#performing-basic-data-fetching

.slice()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Pagination 
https://mui.com/material-ui/react-pagination/
-->

