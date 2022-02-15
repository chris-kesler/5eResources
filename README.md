<html>
<h2><a target='blank' href="https://github.com/christian-kesler/knowones-website-of-everything">KnowOne's Website Of Everything on GitHub</a></h2>
<hr>
<p>
The artifact I have chosen to showcase my Database capabilities is KnowOne'sWebsiteOfEverything.com, which is a website containing styled directories and pages that populate data based on centralized JSON files with sortable and filterable table entries.  This artifact serves to showcase my competency with the JavaScript programming language, Microsoft Visual Studio Code, the HTML and CSS styling markup languages, web development principles, and observation of programming best practices such as naming conventions and comment etiquette.  While JavaScript is an arguably easy language to learn and use, the data centralization techniques used are far less elementary.  The ability to centralize data in a concise manner so as not to repeat yourself when making changes to content is a skill I deem notably worthy of showcase in a portfolio.  While this assignment is focused on the database aspect of this project, I am also including it in my portfolio as an example of my web development skills.  I intend to pursue a career in software engineering and web development, and this project showcases a combination of skills relevant to both that makes it the centerpiece of my portfolio.  The power of having a live website that can be linked to a prospective employer without needing to run anything from GitHub is likely of considerable value as well.  
</p>

<hr>
<h3>Description</h3>
<p>
This project was developed by me in my spare time using self taught HTML, CSS, and Javascript skills.  The project files include various webpages that read data from JSON files and populate the content within.  I developed this website in order to have a searchable presence online and to showcase my web development skills.  I quickly became irritated by manually changing the same information across multiple pages, so I began constructing scripts that would pull relevant data from JSON files.  I managed to condense everything to a point where dozens of webpages with different content when viewed from a browser are actually identical in terms of the HTML and Javascript code within the file.  
<br><br>

The script within pulls information from the JSON file based on the name of the file page, meaning I can copy the HTML file and rename it in order to create entirely different entries.  Attributes for the same item that are displayed on multiple pages do not need to be modified more than once; changing the JSON file will update the attribute in all places that it exists across the site.  At some point in the future, I might consider converting to SQL rather than JSON.  
</p>

<h4>Enhancement Progress</h4>
<p>
As with my other artifacts, the first element of this project that I tended to was the comment etiquette.  I failed to include proper comments throughout the HTML, CSS, and JavaScript elements.  I began by creating a generic page layout with appropriate comments describing each element, then applying that generic layout to all of my content pages.  The generic layout was then utilized and populated with a more comprehensive and adaptive JavaScript function, which I filled with descriptive comments as I refactored it.  There were quite a few loops that were implemented correctly and variables that were entirely unnecessary.  While the page loading speed wasn't impacted in a manner that can be noticed by the naked eye, the code is far easier to understand and modify now that improvements have been made.  All too often I found myself breaking the entire function and loading a blank page after making a seemingly small change to the script, only to find that it caused a series of issues elsewhere in the function.  I hope to continue improving these JavaScript function in the future, but they are in a state that I am proud to showcase as of now.  
</p>

<h4>Enhancement Reflection</h4>
<p>
While enhancing this artifact, I noticed that my filter table functionality is incredibly unstable and needs massive amounts of refactoring.  The script is bulky and difficult to modify, and the functionality is less than ideal even though it functions as expected flawlessly.  I also noticed that my CSS file is incredibly dense, potentially having a great deal of redundant content within it.  I am also still in the process of converting my old classes and ids from camelcase to lowercase with hyphens instead of spaces, whatever that naming convention may be called.  Otherwise, I didn't necessarily realize anything new upon revisiting this artifact since I have been working on it intimately nearly every day for the last four months.  I am constantly learning new ways to improve my website, and I do get the occasional revelation, but those are far less dramatic than the insight I gained from revisiting my other artifacts.  
</p>

<hr>
<h3>Getting Started</h3>
<h4>Dependencies</h4>
<ul>
<li>
Windows 10* || <a target='blank' href='https://www.microsoft.com/en-us/software-download/windows10'>Link to Download Windows</a>
</li>
<li>
Visual Studio Code || <a target='blank' href='https://code.visualstudio.com/download'>Link to Download Visual Studio Code</a>
</li>
<li>
Visual Studio Code Extension:  Live Server by Ritwick Dey || <a target='blank' href='https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'>Link to Live Server Extension</a>
</li>
</ul>
<p><i>*potentially not required, but it is what I used and therefore know for certain that it works</i></p>

<h4>Installing</h4>
<ul>
<li>
Install the Live Server Extension to Visual Studio Code via the Extensions tab within VSC || <a target='blank' href='https://www.youtube.com/watch?v=_wue59ldqMg&ab_channel=TechStacker'>How to Set Up a Local Live Server in Visual Studio Code (quickly)</a>
</li>
<li>
Download the Project Files from the Project Repository on GitHub || <a target='blank' href='https://github.com/christian-kesler/knowones-website-of-everything'>Link to Repository</a>
</li>
<li>
Cloning the Repository via Git is ideal, but downloading a zip and extracting it will also work || <a target='blank' href='https://git-scm.com/downloads'>Link to Download Git</a>
</li>
</ul>

<h4>Execution</h4>
<ul>
<li>You can create a new project in Visual Studio Code using existing project files, create an empty project and move the project files into the new directory, manually, or create an empty project and clone directly to that folder using Git</li>
<li>Navigate to the main project directory while in Visual Studio Code</li>
<li>Right click on the index.html page and select "Open with Liver Server"</li>
<li>Begin navigating the site as though it were a typical website
<ul>
<li>For example, you can navigate to "ePortfolio" in the top right of the Header, then select the "Dynamic Filter Table: JSON Database (Javascript)" page to be taken to a locally hosted version of the exact page you are reading right now</li>
</ul>
</li>
</ul>

<h4>Help and Resources</h4>
<p>
Most of the issues I ran into with this program involve Javascript and JSON technicalities, specifically the inability to receive error messages when a script doesn't want to work within an HTML page.  When first starting out, I had no idea how to use HTML or CSS since my university program never covered them in any detail.  This turned out to be just fine since they are relatively easy to learn compared to the other programming languages and principles.  I used the following tutorials to get a grasp of the fundamentals, both in HTML, CSS, Javascript, and JSON.  
<ul>
<li>
<a target='blank' href='https://www.youtube.com/watch?v=PlxWf493en4&ab_channel=freeCodeCamp.org'>HTML Tutorial - How to Make a Super Simple Website</a>
</li>
<li>
<a target='blank' href='https://www.youtube.com/watch?v=GpOO5iKzOmY&ab_channel=freeCodeCamp.org'>Learn JSON - Full Crash Course for Beginners</a>
</li>
</ul>
</p>

<hr>
<h3>Project Details</h3>

<h4>Authors</h4>
<p>
Christian Kesler (a.k.a. KnowOne), who can be found on <a target='blank' href='https://github.com/christian-kesler'>GitHub</a> and <a target='blank' href='https://www.linkedin.com/in/christian-kesler/'>LinkedIn</a>.  
</p>

<h4>Version History</h4>
<p>
In truth, this project is still in constant development.  While I have subscribed to a hosting service so this website can remain live all the time, I still have a great deal of work to do before I consider it completed.  I have been making small tweaks and adjustments for months now, and intend to continue doing so before I am completely satisfied.  That being said, I have retroactively located several key points in the lifespan of this project for the sake of version history.  They are described as follows.
</p>
<ul>
<li>
v1.0.0
<ul>
<li>
Initial Release upon completion of the CS-260 course at Southern New Hampshire University
</li>
<li>
See commit change or See release history
</li>
</ul>
</li>
<li>
v1.1.0
<ul>
<li>
Enhanced Revision created during the CS-499 course at Southern New Hampshire University
</li>
</ul>
</li>
</ul>

<h4>License</h4>
<p>
This project is licensed under the MIT License - see the LICENSE.md file for details.  
</p>

<h4>Acknowledgements</h4>
<p>
Inspiration, code snippets, etc.
</p>
<ul>
<li>
My experiences with <a target='blank' href='https://company.wizards.com/en'>Wizards of the Coast's</a> table top roleplaying game <a target='blank' href='https://dnd.wizards.com/'>Dungeons and Dragons 5th Edition</a> inspired a great deal of my wiki content, variant system mechanics, and even the name of this project (which takes after two 5e sourcebooks:  <a target='blank' href='https://dnd.wizards.com/products/xanathars-guide-everything'>Xanathar's Guide to Everything</a> and <a target='blank' href='https://dnd.wizards.com/products/tabletop-games/rpg-products/tashas-cauldron-everything'>Tasha's Cauldron of Everything</a>)
</li>
<li>
A great many of the images used in this project come from <a target='blank' href='https://commons.wikimedia.org/wiki/Main_Page'>Wikimedia Commons</a> and <a target='blank' href='https://thenounproject.com/'>The Noun Project</a>.  Both of these sites contain a myriad of fantastic images free for use under the Creative Commons License.  
</li>
<li>
Some of the content within Caped Crusaders was created and shared by acquaintances met on Discord, and links to their original work are included when applicable.  
</li>
</ul>

</html>
