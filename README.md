![Express Flashcards](https://user-images.githubusercontent.com/25372739/137334595-b8163cc4-7729-4d98-9160-5b2abfe3bea1.png)

This is primarily a server-side, flashcard application built with [Express](https://expressjs.com/)

<p align="center"> :grey_question: :1234: :mortar_board: :pencil: :arrow_right: </p>

## Description

<p align="center"> This Express flashcards application was built to generate dynamic content using templates, variables, and cookies.</p>

<p align="center"> Regarding UX, users enjoy a modest interface built with the Pug template engine, and  specially curated image/PNG visuals for added life through the interactions.  On first entering the web site at the /hello route, users are prompted to enter their name.  Upon submitting their name, the server writes that name data into a cookie.  The page is then redirected to the root/home page, at which point the user will see their inputted name on the screen since the server will have handed back the name data in the process.  Additionally, users are able to click through a variety of flashcards (randomized through an array), reveal hidden hints, and flip the flashcards over to reveal the answers.</p>

## Preview

![Express Flashcards - GIF](https://user-images.githubusercontent.com/25372739/137336186-248be4c1-03b2-4045-b0ac-f52a1b116d7c.gif)

<!-- [Live Preview](http://david-roman.tech/express-flashcards) -->

## Business Use Case

- Individual/Student needs an application to study questions and answers
- Business needs the functionality to easily teach its employees on various topics (e.g., rules, policies, behavioral questions)

## Status

<p align="center"> <img src="https://img.shields.io/tokei/lines/github/droman892/express-flashcards" /> </p>

<p align="center"> <img src="https://img.shields.io/github/languages/count/droman892/express-flashcards" /> </p>

<p align="center"> <img src="https://img.shields.io/github/repo-size/droman892/express-flashcards" /> </p>

## Download and Installation

- Clone the repo: `https://github.com/droman892/express-flashcards.git` 
## Usage

After the project files are downloaded, in the terminal, run `npm install` to install the dependencies, followed by `node app.js` to start the application (may want to install nodemon).  Once the project has loaded on to the browser, feel free to edit it as you see fit using `./public/stylesheets/style.css` and the component files in `./views`.

## Roadmap

This Express flashcards application is an on-going project, open to contributions and critique.  Functionality that would appropriately flesh out the application include the following:
1) storing flashcard data in an external database like MongoDB / SQL Server
2) include media queries for added responsiveness
3) incorporate a variety of flashcards for different topics

## Bugs and Issues

See a bug or an issue with this project? [Open a new issue](https://github.com/droman892/express-flashcards/issues) here on GitHub.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## About

This Express flashcards application is maintained by [David Roman](https://www.linkedin.com/in/david-roman-front-end-engineer/).
Source code is maintained by [Treehouse](https://github.com/treehouse-projects)
