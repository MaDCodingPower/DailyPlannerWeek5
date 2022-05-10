# Daily Scheduler for Week 5 Homework

> ### This application is used to help build an daily planner. 

The application displays the date in the header upon loading.
It also displays each hour from 9-5, and is color coded to show which hours have passed, which have yet to pass,
and which hour the page was loaded.
It also allows the user to click on any hour and type in a plan of activity for that hour.
When the user clicks a save button, the text of the corresponding hour section will be save to local
storage to be loaded next time the user visits.

> ### Complications

Some complications I came across were mostly formatting issues in the beginning. 
However, I decided to be ambitious in how I approached updating the local storage when
clicking save. I had to learn how to essentially target the parent container of the button
that was clicked and save whatever value (the text in the hour slot) into local storage.
The more complicated part was saving it to a specific name based on the parent without
writing a different variable for each hour (cause I am lazy and that sounds tedious af).
I ended up finding what I thought was a creative was to use the id of the parent to name the 
text in local storage consistently to be saved and loaded by the same name.

> ### How to use

It is a simple application. Click any colored hour box and start typing out what you want to 
achieve in that hour. Click save to make sure that text renders everytime you load the page.
Red colored hours are hours that have already passed in the day. Green are ones in the future, 
and gray indicates the current hour.

> #### link: https://github.com/shadow155131/DailyPlannerWeek5

> #### screen shot: 
> ![screenshotlive](https://user-images.githubusercontent.com/102272276/167568788-a2a317d5-f850-4194-a98a-a681515c82e3.PNG)

