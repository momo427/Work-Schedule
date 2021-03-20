# Work-Schedule


## Description /## Installation
Purpose: use for daily planner to create a schedule, this is a useful tool that I could use in my workday to plan my events, I could even share it with people so they can stay organized 
When you open the planner you should see the current time and date: For this I used moment. format in js file to get current dat and time and append to html 
When you scroll down, you are presented with timeblocks (with standard business hours): For this I used Bootstap to get a form format and gave each section classes and id in order to style and give functions (bootstap links required)
When you view the time blocks for that day each time block is color coded (preset: past: future):for this I used an if statement and compared current time to number id in html list. Depending on relation color is applied.
When you click into the timeblock you can enter in an event: For this I defined variable linked to html calsses and ids, then added an event lisenter and used locate.storage.get item to save events that are typed in 
When you click the save button for the corresponding timeblock the text is saved to your local storage: For this I used and event listener
When you refresh the page, then the saved event persists




## Usage 


Deployed page: https://momo427.github.io/Work-Schedule/

 ![IMAGE]
 (assets/homepage.png)
 ![IMAGE]
 (assets/Typepic.png)



---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.