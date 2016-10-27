Demo of Node authentication
===========================

This program will be built progressively, developing authentication best-practices.
Tagged commits show useful states from which to further develop or demonstrate.

* Basic page structure with no authentication. There are two pages: an index route
  and a second page. Anyone may freely browse both pages.
* Very simple authentication. The home page is public, but the second page needs
  HTTP Basic Auth. There is no "sign up" page, but a separate script allows an
  admin to authenticate additional users.
* Exactly the same, but user passwords are encrypted for security.
* Instead of HTTP Basic Auth, credentials are requested using a GET/POST pair of
  routes. The secret page sends back a challenge, then processes the response.
* In addition to the user name and password, the user must answer a randomly
  selected question. Note that any failure gives back a 403; you are not told
  whether your user name was wrong, your password didn't match, or you got the
  textcha wrong. (Note too that actual textchas are not best-practice; the more
  sophisticated anti-bot techniques that are useful happen also to be a lot more
  complicated. Don't deploy captcha/textcha/recaptcha without knowing why.)
* User credentials are stored in a database (eg Mongo/Mongoose, PostgreSQL, etc).

Unit testing is not included in this repository. Students are expected to be able
to set up Chai and Mocha in order to thoroughly test each step. The directions
above are a starting point for the development of tests, but are not complete;
testing all the appropriate edge cases and failure modes is up to the student.
