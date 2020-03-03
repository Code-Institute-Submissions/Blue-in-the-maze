# Blue in the Maze

A live demo can be found [here](https://cristina-maze-game.herokuapp.com/)

![Desktop Demo](public/resources/webpage-response/webpage-responsivnes.jpg)

## Introduction

Blue in the Maze is a labyrinth game.

The main purpose of the game is to entertain people who have a interest in solving puzzle style games. Through this goal the game owner want to have a high conversion rate which will offer a high adds revenue.

## Table of Content

1. [UX](#ux)
    * [Goals](#goals)
        * [CGphotography goal](#cgphotography-goal)
        * [Business goals](#business-goals)
        * [Visitor goals](#customer-goals)
    * [User Stories](#user-stories)
        * [The photographer](#the-photographer)
        * [The UX designer](#the-ux-designer)
        * [The potential customer](#the-potential-customer)
        * [The future married couple](#the-future-married-couple)
    * [Minimum Viable Product](#minimum-viable-product)
    * [Design](#design)
        * [Colors](#colors)
        * [Font](#font)
    * [Wireframes](#wireframes)
2. [Features](#features)
    * [Existing Features](#existing-features)
    * [Features left to implement](#features-left-to-implement)
    * [Features left to implement after testing](#features-left-to-implement-after-testing)
3. [Technologies Used](#technologies-used)
4. [Testing](#testing)
5. [Deployment](#deployment)
    * [Deployment to GitHub](#deployment-to-github)
    * [Hosting on GitHub Pages](#hosting-on-github-pages)
    * [How to run this project locally](#how-to-run-this-project-locally)
6. [Credits](#credits)
    * [Media](#media)
    * [Acknowledgements](#acknowledgements)
        * [Pages used for Inspiration](#pages-used-for-inspiration)
        * [Pages used for information](#pages-used-for-information)
7. [Disclaimer](#disclaimer)

## UX

### Goals

#### Blue in the Maze goal

The goal of this web page is to make available a cute labyrinth game which will ensure a high conversion of users.

**Target audience is:**
* People above 13 years.
* People interested in short, online games.
* People interested in solving puzzles, in special mazes.

#### Business goals

* Create a fun game.
* Have a high conversion rate.
* Have a fully working game with an attractive design.


#### Customer goals

* Play a functional game and potentially win it.
* Use a web page which has an easy navigation.

Both business and customer goals are addressed through user stories.

### User Stories

#### The game designer

* As a game designer, I want to create a game story so that the user can immerse into it via playing.
* As a game designer, I want to add extra items in the maze so that the game is more interesting.

#### The game developer

* As a game developer, I want to have a game timer so that the user is motivated to solve the maze faster.
* As a game developer, I want to create several levels in the game so that the user can have a progressing story.
* As a game developer, I want  to give the user the possibility to save the game so that he/she is motivated to come back and continue.
* As a game developer, I want to introduce winning points so that the user can see how well they have played.
* As a game developer, I want to create a leader-board so that the user can see if he/she was better than others.

#### The business owner

* As a website owner,  I want the page to load fast so that the game functions in optimal time.
* As a website owner,  I want to have a well structured web page so that the user can easily orientate on it.
* As a website owner,  I want to retain the user's attention so that I get ad revenue.

#### The UX designer

* As a UX designer, I want to track the user behaviour so that I can improve the user experience.
    * As a UX designer, I want to track the user behaviour so that I can identify the possible user confusion.
    * As a UX designer, I want to find which parts are not accessed by the user so that I can improve the website’s structure.

#### The potential user

* As a user, I want to know the rules of the game so that I know how to play it.
* As a user, I want to play an interesting game so that I feel joy while doing it.
* As a user, I want to see my end game results so that I know how well I performed.


All User Stories were added as [issues](https://github.com/Itamichan/Blue-in-the-maze/issues) on GitHub in order to keep track and address them in the project's [dashboard](https://github.com/Itamichan/Blue-in-the-maze/projects). In this way I can easily track which user stories have been addressed and on which I still need to work.


### Minimum Viable Product

Taking in consideration all the user stories, their importance and viability of their implementation at the moment certain value and complexity levels have been attributed to the user stories. In the issues a new category has been created as “MVP” in order to highlight which stories must be implemented in the first release.

[User Stories evaluation](src/MVP/user-stories.md)

![chart](src/MVP/maze-game-graph.jpg)

**Conclusions based on the chart**

* User Stories A,I,M are included in the first sprint. This is connected with their high value and importance they for creation of the MVP.
* User Stories B,D,E,H,J,N,K,L are included in the second sprint since they have a high value for the project.
* User Stories C,O are included in the 3rd sprint since they have a medium value and high complexity.
* User Story F,G are also in the third sprint but they are put in the the backlog for the moment since Issue F has a medium value/high complexity and doesn't represent a priority at the moment. While issue G has a low value and high complexity and should be dropped out. However, the story is also added to the backlog category since it seems that at a later stage its complexity might change to a lower level.

User Stories identified as important for MVP were attributed the respective label in the [issues](https://github.com/Itamichan/CG_photography/issues?q=is%3Aopen+is%3Aissue) section on GitHub.

### Design

#### Colors

Following colors have been used:
* `#1db394` - medium aquamarine
* `#17917a` - darker version of the initial aquamarine
* `#D5A618` - dark gold
* `#CD9E18` - darker version of the initial gold
* `#333333` - less intense black
* `#ffffff` - white
* `rgba(98, 108, 105, 0.58)` - light grey, with transparency
* `rgba(82, 92, 89, 0.59)` - dark grey, with transparency

The stand out color for this web page is medium aquamarine. The color was inspired from the player's character which has a aquamarine color. This choice allows to have a constant color which the player can recognise. We also avoid to use a non related color to the game which can create potential confusion.

The variations of gold and grey were used for the level buttons. This was necessary in order to denote the availability of a level or if it was already completed.

The black color was used as a background on which the game is placed. It is supposed to not attract to much attention to itself since we do not care about this space and in a commercial version of the game it would be covered with adds.

#### Font

The used Font for this project is **Eczar** with the font weight: 
* 500 - for most of the text.
* 600 - for headers.

The [Eczar](https://fonts.google.com/specimen/Eczar) font was chosen due to its slight ancient style. It fits well with the game's concept.

### Wireframes

Blue in the Maze's wireframes are made both for mobile and desktop view. The wireframes were done in [figma](https://www.figma.com/). 

Link to the mobile version can be found [here](https://www.figma.com/file/S4Awi2Wc8RJ8zjWNNuRLQ3/game-mobile?node-id=0%3A1).

Link to the desktop version can be found [here](https://www.figma.com/file/DaQhx72fCc1FgdEFQX6Dr7/game-desktop?node-id=0%3A1).

In case the links to the wireframes don't work please find the pictures [here](src/wireframes).

## Features

### Existing Features

* **The Game**
    * Represents a dynamic area of the web page which makes possible to start the game,choose a level and enjoy the game itself.
        * Addresses issue #2, #5, #7, #10, #12, #15.
    * Has two constant buttons: "Home" button and "Rules" button. The first one ensures that the player can go back to the initial start screen. While the second button provides the story of the game and how to play it.
        * Addresses issue #1, #14.
    * A timer appears when the selected level starts. The timer serves as an indicator of how much time the player needed to complete the level or triggers the losing condition (from level 3 onwards) if the player runs out of time.
        * Addresses issue #4, #16.
    * Control buttons are added while playing the chosen level if the device type is detected as "mobile" or "tablet."
        * Addresses issue #10.
    * Graduate access to the levels - at the beginning the player can play only the first level. Access to the next level is allowed only on passing the current level.
        * Addresses issue #5, #6.

* **Footer**
    * Provides the links which makes possible to contact the game owner as well as to see their Github account or LinkedIn.

### Features left to implement

* **Leader-board** - User Story #8, at the moment it has a low value. Will be implemented if after a reevaluation of priorities it will get a higher value.
* **Winning points** - User Story #7, at the moment we have only the final time as a parameter which indicates how well the user performed. Use story #7 has a high complexity therefore it will be implemented at a later stage.

### Features left to implement after testing

* **Album covers** - Make it more obvious that the albums are clickable in desktop view.
  
## Technologies Used

### Languages

* HTML
* Java Script - served as the base language for this project.
* CSS - used for styling the HTML code.
* [Sass](https://sass-lang.com/) - used for creation of variables, mixins and easy nesting and grouping of styles.

### Libraries

* [React](https://reactjs.org/) - the entire project was built in React.
* [react-device-detect](https://www.npmjs.com/package/react-device-detect) - used for conditional rendering of content depending on which type of device the user has.
* [reactstrap](https://reactstrap.github.io/) - used for the modal Rules window.
* [FontAwseome](https://fontawesome.com/) - used for social media icons.
* [Google Fonts](https://fonts.google.com/) - used for the Eczar font.

### Tools

* [WebStorm](https://www.jetbrains.com/webstorm/) - used as local IDE for this project.
* [Git](https://git-scm.com/) - used for version control.
* [Figma](https://www.figma.com/) - used for creation of wireframes.
* [favicon.io](https://favicon.io/) - used for creation of the fav icon for the web page.
* [GIMP](https://www.gimp.org/) - used as image editor.
* [Tinyjpg](https://tinyjpg.com/) - used for image compression.
* [Am I Responsive](http://ami.responsivedesign.is/) - used for testing purposes as well as to create the image displaying the web page on different devices.
* [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools) - used for testing and debugging.
* [Google Analytics](https://analytics.google.com/) - used for user testing purposes.
* [Hotjar](https://www.hotjar.com/) - used for user testing purposes.
* [PageSpeed insights](https://developers.google.com/speed/pagespeed/insights/) - used for testing the loading speed of the site.
* [AWS](https://aws.amazon.com/s3/?nc=sn&loc=0) - used to store and retrieve project's data.
* [Heroku](https://id.heroku.com/) - used for deployment of the project.

## Testing

Testing information can be fond [here](testing/testing.md).

## Deployment

This web page was locally developed in WebStorm and pushed to the remote repository - GitHub. The live page is hosted on GitHub Pages. 

### Deployment to GitHub

In order to connect the local IDE to GitHub I used the command `git remote add origin` and added the link to the remote repository: `https://github.com/Itamichan/CG_photography.git`

My main local branch is `master` which I deployed as `origin/master` to GitHub. All different features were first developed on a separate branch and deployed on a remote, same name branch, on GitHub. Once the features were ready to go live they were merged into the master branch.

**Used commands during deployment:**
* `git branch feature/specific_feature` - to create a new local branch for a specific feature.
* `git add .` - to add the files to the staging area.
* `git commit -m "text message here"` - to commit the files.
* `git merge name_of_the_branch --no-ff` - done from master branch in order to merge a feature branch into the master branch without fast forwarding.
* `git push origin master` - to push to origin master branch on GitHub.
* `git push origin branch_name` - to push to origin specific branch name on GitHub.
* `git checkout name_of_the_branch` - in order to leave the current branch and move to a new one.
* `git status` - was extensively used in order to see the current status of the files.

### Hosting on GitHub Pages

* Log into GitHub.
* From the list with repositories choose [CG*photography*](https://github.com/Itamichan/CG_photography).
* Go to settings.
* Scroll down to GitHub Pages section.
* Select as a source **master branch**.
* The page is now automatically refreshed and the project is deployed.
* To access the project scroll down again to GitHub Pages section and click on the provided link.
* For your convenience, save the link as a bookmark.

For more detailed information regarding deployment to GitHub Pages click [here](https://pages.github.com/).

### How to run this project locally

**Clone this project from GitHub:**

* Go to [CG*photography*](https://github.com/Itamichan/CG_photography) GitHub repository.
* Click on "Clone or download" green button.
* Copy the URL to the repository.
* Open the terminal in your local IDE.
* Choose the working directory where you would like to have the cloned repository.
* Type git clone, and add the URL you copied from Github: `git clone https://github.com/Itamichan/CG_photography.git`
* Press Enter and your local clone will be created.
* You are good to go.

For more information regarding cloning of a repository click [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

## Credits

### Content

All content on the web page was written by me with the exception of the quote in the About page which was written by an anonymous person and posted on [dpreview.com](https://www.dpreview.com/forums/thread/3680347). 

### Media

**Photographs for Couples page:**
* [Ion Ples Alexandru photography](https://ionplesalexandru.com/features-works/)

**Photographs for Wedding page:**

* [Ion Ples Alexandru photography](https://ionplesalexandru.com/features-works/)
* [Vadim Jantic photography](http://jantic.md/weddings.html)

**Photographs for More than two page:**

* [UND photography](https://undphotography.ro/)
* [Cristina Velina](https://fotografbotezbucuresti.ro/portofoliu/sedinte-foto/)

**Photographs for various pages:**

* [Adorable Wallpapers](http://avante.biz/camera-image-wallpapers-22-wallpapers/)
* [WallpapersCraft](https://wallpaperscraft.com/download/couple_hands_love_tenderness_coffee_118921/1366x768)
* [Ashley Smith](https://www.ashleysmithphotos.com/)


### Acknowledgements

#### Pages used for Inspiration

* [Ion Ples Alexandru photography](https://ionplesalexandru.com/features-works/)
* [Vadim Jantic photography](http://jantic.md/weddings.html)
* [Maxim Chumash photography](http://chumash.us/)
* [Scott Kelby](https://scottkelby.com/)
* [Fiona Kelly photography](https://www.fionakellyphotography.com/blog/)
* [Peter McKinnon](http://www.petermckinnon.com/)
* [Dave Marrow photography](https://photos.davemorrowphotography.com)
* [Vadim Jantic](http://jantic.md/weddings.html)
* Inspiration resources for writing this README file:
    * [Mattlister](https://github.com/Mattlister/The-Monkees-Monkees)
    * [AJGreaves](https://github.com/AJGreaves/familyhub)
    * [TravelTimN](https://github.com/TravelTimN/ci-milestone01-ucfd)
   

#### Pages used for information

* [UX Planet](https://uxplanet.org/information-architecture-basics-for-designers-b5d43df62e20)
* [tubik](https://tubikstudio.com/)
* [stormotion](https://stormotion.io/blog/how-to-write-a-good-user-story-with-examples-templates/)
* [Agile Alliance](https://www.agilealliance.org/)
* [W3schools](https://www.w3schools.com/)
* [W3C](https://www.w3.org/)
* [stack overflow](https://stackoverflow.com/) - massively used for debugging and understanding certain concepts.
* [CSS-Tricks](https://css-tricks.com/)
* [MDN web docs](https://developer.mozilla.org/)


## Disclaimer

**This web page was created for educational purpose only.** 