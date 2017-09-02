#### Single-line Summary
**Today, Aaron, Cole, and Kyle paired together. It took about 1 hour**

#### Reflect and summarize on your process for each `TODO` item :  
server.js
  1. <!-- // TODO: Don't forget to set your own conString -->
  Added postgres with local host of 5432.

index.html
  1. <!-- TODO: Refactor the href attributes in the Home and About anchor tags to navigate users to our new client-side routes -->
  Refactored href attributes for client side routes.
  2. <!-- TODO: Be sure to include the routing functionality with the correct script files. Don't forget that the order of your scripts matters - variables have to be declared before you can reference them! -->
  Included routing functionality with script files.

aboutController.js
  1. <!-- // TODO: Define a function that hides all main section elements, and then reveals just the #about section: -->
  Hid main section and show about section.

articleController.js
  1. <!-- // TODO: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section: -->  
  Hid main section and show article section.

routes.js
  1. <!-- // TODO: Configure routes for this app with page.js, by registering each URL your app can handle, linked to a a single controller function to handle it. Note that these routes do not need to wrapped in an IIFE. --><!-- // TODO: What function do you call to activate page.js? Fire it off now, to execute. Note that it does not need to be attached to the 'app' object nor wrapped in an IIFE.
 -->
  Configured routes to / using app.articleController.index and /about using app.aboutController.index.

articleView.js
  1. <!-- /* TODO: Once the routes are handling '/' and '/about', we can delete this handleMainNav function. YESSSS! */ -->
  Deleted handleMainNav function.
  2. <!-- /* TODO: Remember to also remove any invocations of handleMainNav... */ -->
  Removed any invocations of handleMainNav.

#### Checklist (before submitting, fill in each set of square brackets with an 'x')
- [x] We have titled the Pull Request similar to our branch name (ex: 'brian-rick').
- [x] This PR includes commits from both myself and my partner; e.g. We followed good pair programming practices by switching driver/navigator roles.
- [x] There is no extraneous, unrelated code included in this PR.
- [x] We have summarized our `TODO:` process above.
