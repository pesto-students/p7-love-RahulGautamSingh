a.
When a user enters an URL, the main functionality of the browser is to find out the server on the Internet on which the site is hosted. It finds the required resource which may be in the form of HTML pages, PDFs, images, or any other item.

b.
1. The high-level structure of the browser comprises the following components -
2. The user interface: the address bar, back, forward, reload buttons, bookmark menu, and settings
3. The browser engine: manages the work between UI and rendering engine
4. The rendering engine: is responsible for displaying the requested content
6. Networking: for all the network-related stuff
7. UI Backend: refers to the backend of the widgets & other windows within a browser
8. JavaScript Interpreter: Used to parse and execute Javascript code
9. Storage: refers to the persistence layer that stores all types of data like cookies

c.
A rendering engine is a software that draws text and images on the screen. The engine draws structured text from a document (often HTML), and formats it properly based on the given style declarations (often given in CSS). Examples of layout engines are Blink (Chrome & Opera), Gecko (Firefox), EdgeHTML (Microsoft Edge), and WebKit (Safari).
The main use of the rendering engine is to render the requested content on the browser. It can display HTML and XML documents and images. It can display other types of data via plug-ins or extensions; for example, displaying PDF documents using a PDF viewer plug-in.
At first, the rendering engine will get the requested contents from the networking layer in chunks.

d.
The rendering engine will first parse the HTML document into DOM nodes. These are arranged in a tree called the content tree. The engine will parse the styling using both the inline & the stylesheets. The styling information along with the content tree will be used to create another tree called the “Render tree” or “Frame tree” in some browsers.
Normally browsers do not interpret HTML files the way programmers write them.

The rendering uses HTML Parser to parse the HTML file structure into objects the browser can read effectively. The first step is processing the HTML file & building the DOM tree. HTML parsing mainly involves tokenization & tree construction. These tokens include the start-end tags, as well as attribute names & values. The DOM tree created, describes the content of the document & the relationship & hierarchies between different tags. The greater number of nodes, the longer it takes to parse the HTML file. While parsing the HTML, if the rendering engine encounters any non-blocking resource, such as an image, the browser will request those resources in the background & continue parsing the remaining document.
E.
Though parsing continues if a CSS file is encountered, script tags block the rendering & pause the parsing. Too many script tags in the HTML file can be a bottleneck in the HTML parsing (async & defer attributes can be used to somewhat solve this issue). For the programmers' convenience, HTML5 has also introduced the option to mark the script as asynchronous. This allows the execution of the script on a different thread.

f.
After this, CSS parsing is done & CSSOM tree is created. The CSS Object Model is similar to the DOM. The browser converts the CSS rules into a map of styles it can understand and work with. The browser goes through each rule set in the CSS, creating a tree of nodes with parent, child, and sibling relationships based on the CSS selectors.
As with HTML, the browser needs to convert the received CSS rules into something it can work with. Hence, it repeats the HTML-to-object process, but for the CSS.

G) The browser will execute the scripts in the order it finds them. If you call an external script, it will block the page until the script has been loaded and executed.
To test this fact:

// file: test.php sleep(10); die("alert('Done!');"); // HTML file: <script type="text/javascript" src="test.php"></script>

Dynamically added scripts are executed as soon as they are appended to the document.
To test this fact:

```html
<!DOCTYPE HTML>
<html> 
<head> 
    <title>Test</title> 
</head> 
<body> 
<script type="text/javascript"> 
    var s = document.createElement('script'); 
    s.type = "text/javascript"; 
    s.src = "link.js"; // file contains alert("hello!"); 
    document.body.appendChild(s); 
    alert("appended"); 
</script> 
<script type="text/javascript">alert("final");</script> 
</body> 
</html>
```

Order of alerts is "appended" -> "hello!" -> "final"
If in a script you attempt to access an element that hasn't been reached yet 
Example:
 ```html
 <script>
 do something with #blah
 </script>
 <div id="blah"></div>
 ``` 
 then you will get an error.

Overall, yes you can include external scripts and then access their functions and variables, but only if you exit the current <script> tag and start a new one.

H)
Layout
The layout (also called reflow) piece will be in charge to calculate the positions and dimensions of each node on the screen. For instance, if you rotate your phone, or if you resize your browser, the layout piece will be executed. let’s take a look another example related to layout:

Paint
Finally, now that we know which nodes are visible, and their computed styles and geometry, we can pass this information to the final stage, which converts each node in the render tree to actual pixels on the screen. This step is often referred to as “painting”, “rasterizing.” or “repainting”.
