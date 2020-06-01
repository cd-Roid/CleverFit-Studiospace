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
* whatsapp api (possibly? Ill have to check.)


## TODO:
* [ ] Fix env issues. There seems to be a problem with the .env not being read. Probably a formatting error but ill have to check that out.
* [ ] Get the Message Sender to work. 
* [ ] Implement a function to parse commands from whatsapp
* [ ] Implement function to to only start the Web Scraper before im about to go to the gym. Sending messages over twilio could be costly on 24h run. 
* [ ] Implement function to Format the messages to look more pleasing. 
