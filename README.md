Demo of Node authentication
===========================

This program will be built progressively, developing authentication best-practices.
Tagged commits show useful states from which to further develop or demonstrate.

* Basic page structure with no authentication. There are two pages: an index route
  and a second page. Anyone may freely browse both pages. [Tag: no-auth]
* Very simple authentication. The home page is public, but the second page needs
  HTTP Basic Auth. There is no "sign up" page, but a separate script allows an
  admin to authenticate additional users. [Tag: basic-auth]
* Exactly the same, but user passwords are encrypted for security. [Tag: bcrypted]
* Instead of HTTP Basic Auth, credentials are requested using a GET/POST pair of
  routes. The secret page sends back a challenge, then processes the response.
  [Tag: form-fill-out]
* In addition to the user name and password, the user must answer a randomly
  selected question. Note that any failure gives back a 403; you are not told
  whether your user name was wrong, your password didn't match, or you got the
  textcha wrong. (Note too that actual textchas are not best-practice; the more
  sophisticated anti-bot techniques that are useful happen also to be a lot more
  complicated. Don't deploy captcha/textcha/recaptcha without knowing why.)
  [Tag: use-textcha]

Additional extension exercises, not implemented here:

* User credentials are stored in a database (eg Mongo/Mongoose, PostgreSQL, etc).
* Use HTTP Digest auth instead of Basic.

Unit testing is not included in this repository. Students are expected to be able
to set up Chai and Mocha in order to thoroughly test each step. The directions
above are a starting point for the development of tests, but are not complete;
testing all the appropriate edge cases and failure modes is up to the student.

Note that the crypt script can generate passwords for you, as long as you have a
suitable dictionary in /usr/share/dict/words (this is the case on most Unix
systems, including Linux and Mac OS). It is approximately XKCD 936 style, but uses
the entire dictionary, rather than the ~2000 most common words. As such, it will
make rather less memorable passwords than a proper 936 generator would, but no
less secure.
