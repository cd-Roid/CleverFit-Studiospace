# CleverFit-Studiospace
Due to the COVID-19 pandemic, my gym implemented a way to check if the Studio is empty enough for people to train. As I am a lazy bum I do not want to always check the webpage so im scraping needed data to be sent to my phone.


 ## Functions: 
* Start the function by sending a message to the bot.
* Shows the User the availability of space from the website
* Sends a whatapp message hourly as an update.


## Optional Implementations:

* Setup a time id like to go to the gym 
* Bot sends me an update, 30 minutes before im about to go.


### Tech: 
* Puppeteer
* Twilio 
* Twitter Api for later implementation. Twilio does cost money.


## TODO:
* [X] Fix env issues. There seems to be a problem with the .env not being read. Probably a formatting error but ill have to check that out.
* [X]  Parse and filter the the api data.
* [ ] Implement twittter DM. Twilios isnt working that well
* [ ] Implement a function that sends a tweet hourly.
* [ ] Implement function to Format the messages to look more pleasing. 
