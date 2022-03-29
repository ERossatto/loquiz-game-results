# Game Results

This project was developed as a job test. With all the <3 and efforts that the provided time allowed.
Checkout the [demo](https://loquiz-game-results.web.app/).
Checkout all [project (associated files and code) in here](https://github.com/ERossatto/loquiz-game-results).

This document will offer futher explanations about:
- about game results
- running the project locally;
- building and deploying
- limitations and Improvements

# About game results
## Using
This is a panel to show information about the teams that played a certain loquiz game (https://loquiz.com/) by consuming your api.
It loads a specific game by default and you can change the game from the drop down.

## Run it locally
First of all `cd` to the diretory where you downloaded/cloned the project then install its dependecies `npm install`

Now you'll be ready to go. Run you development server with `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

For building run `ng build`. The build artifacts will be stored in the `dist/` directory.

## Deploy

Before deploying test you application locally running  the production build `ng build --aot`. 
If desired so you can check the running production ready application with `ng serve`, it should be served at `http://localhost:4200/`.

Now that you already checked you application and saw that its all perfect and running, you can deploy it to firebase. 
Make sure you got your [firebase account](https://console.firebase.google.com/) 
Config your project with firebase.

`firebase login`
`firebase init`
hosting automatic deploy with git hub
merge into branch main

# Limitations and Improvements
- Not suitable for mobile - This display game results is still not suitable for mobile users
- No unit tests - This game results was made in a very simple mvp manner, so there is no testing set yet.
- It can have a better UI.
- It can have a better Design. 
