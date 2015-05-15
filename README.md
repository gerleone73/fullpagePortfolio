# gerleone.com documentation
## repo for gerleone.com portfolio site

My aim with this site is to create an engaging and appealing portfolio website where visitors can explore some of my work.

I have used a variety of technologies and techniques to achieve this.

I have implemented the fullpage.js plugin (autoscroll) as the default. This afforded each section/page/project equal weight and balance. I felt this to be a suitable and engaging way to present my work. As I am conscious that some visitors may be  uncomfortable with autoscroll I have given visitors the option of switching to normal scroll. It should also be noted that these buttons (normal scroll, autoscroll and contact me) are hidden when window size width is < 1000px, and that the site switches to normal scroll, as this ensures best UX at those screen sizes.

While the site is a one-page scrolling site each section is assigned a page number. There is a fixed position page counter bottom right of screen.

The menu is a semi-transparant overlay. The active nav link is highlighted by a pulsing animation. When user hovers over a nav link the item scaled up 1.1 in size. 

On the "front-page" (ie page 1) the visitir is greeted with a fullscreen background image. There is subtle text animation on the GL key informing the visitor of my skill sets and finishing with the message to PRESS THIS KEY. Upon doing so there is a subtle key press sound and the user is launched into page 2. 

On page 2 I have implemented animation that slides in the image and text from either side of the screen. The image has a subtle transition to give effect of my looking up and then making eye-contact as the page slides into view.

Beneath the title text GERRY LEONARD I list the various technolgies I have used beside their icons. This serves as a key on the project pages. There is a download CV link and a link to this page. My reasons for providing this link are twofold: to provide information about the site, and as I have minified the code to enable users to review my code in unminified form here on github.

The project pages speak for themselves.

I break with the overall flow of the site on page 8 (Misc Design) as these projects are non-web development/design projects. These projects are presented in a horizontal carousel.

The contact form on page 13 features a cutomised google map full screen background. I removed all labels so as to avoid visual distraction. 

I have used a simple yet highly effective human checkbox to prevent spam: Oh the humanity.

The form is validated with javscript and processed by processForm.php.

The user recieves a customised thank ou message upon successful sending of their message.

The final page is an added extra which features a subtle full screen background animation and perhaps my favortite quote. This qoute uses the birdman.js plugin to animate the text. Music plays automatically and there are buttons to pause, stop and play.

These events (the animation/the quote/the music) are triggered when the user scroll to page 14.

While I have used a number of plugins on this site each one has been carefully chosen and implemented with the overall design and UX in mind.








