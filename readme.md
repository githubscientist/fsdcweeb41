# HTML Basics

[x] HTML Document Structure  
[x] Common HTML Elements  
[x] HTML Forms
[x] Semantic HTML

### <!DOCTYPE html>

- This tells the browser that this document is an HTML5 document.

Versions of HTML:

- HTML 4.01 (1999)
- XHTML 1.0 (2000)
- HTML5 (2014)

HTML5 is the latest version of HTML

### HTML Tag (<html> </html>)

- This is the root element of an HTML document. It contains all other elements.
- html tag is used to mark the beginning and end of an HTML document.

### Head Tag (<head> </head>)

- This section contains meta-information about the document, such as the title, character encoding, and links to stylesheets and scripts.

### Body Tag (<body> </body>)

- This section contains the content of the document that is displayed to the user, such as text, images, and links.

### Title Tag (<title> </title>)

- This tag defines the title of the document, which is displayed in the browser's title bar or tab.

### h1-h6 tags(<h1> </h1>, <h2> </h2>, <h3> </h3>, <h4> </h4>, <h5> </h5>, <h6> </h6>)

- These tags are used to define headings in the document. h1 is the highest level heading, and h6 is the lowest level heading.

### p tag (<p> </p>)

- This tag is used to define a paragraph of text.

### Block Level Elements

- These elements start on a new line and take up the full width of their container. Examples include <h1> to <h6>, <p>...

### Inline Elements

- These elements do not start on a new line and only take up as much width as necessary. Examples include <a>, ...

### List Elements

- <ul> (unordered list) and <ol> (ordered list) are used to create lists. Each item in the list is defined using the <li> tag.

### Link Element (<a> </a>)

- This tag is used to create hyperlinks. The href attribute specifies the URL of the page the link goes to.

### Image Element (<img>)

- This tag is used to embed images in the document. The src attribute specifies the path to the image file, and the alt attribute provides alternative text for the image.

### Div Element (<div> </div>)

- This tag is a container for other elements.
- It is often used to group elements together for styling purposes using CSS or for scripting purposes using JavaScript.

### Span Element (<span> </span>)

- This tag is an inline container for text and other inline elements. It is often used to apply styles to a specific portion of text or to group inline elements together for styling or scripting purposes.

### Table Elements

- <table> is used to create a table. Inside the table, you can use <tr> to define a table row, <th> to define a table header cell, and <td> to define a table data cell.

### Character Entities

- Character entities are used to represent special characters in HTML. For example, &lt; represents the less-than sign (<), &gt; represents the greater-than sign (>), and &amp; represents the ampersand (&), which is used to start character entities.

&nbsp; non breaking space
&copy; copyright symbol
&reg; registered trademark symbol
&trade; trademark symbol

### Audio and Video Elements

- <audio> is used to embed audio content in the document, and <video> is used to embed video content. Both elements support various attributes for controlling playback, such as controls, autoplay, loop, and muted.

### Iframe Element (<iframe>)

- This tag is used to embed another HTML document within the current document. The src attribute specifies the URL of the page to embed.

### Semantic HTML

- They are used to group content in a meaningful way, making it easier for both developers and browsers to understand the structure of the document. Examples include <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer>.

- These elements help improve accessibility and SEO by providing more context about the content they contain.

### form element (<form> </form>)

- This tag is used to create an HTML form for user input.
- Inside the form, you can use various input elements such as <input>, <textarea>, <select>, and <button> to collect different types of user data.
- The form element also supports attributes like action (specifies where to send the form data) and method (specifies the HTTP method to use when sending the form data, such as GET or POST).

### CSS: Cascading Style Sheets

- CSS is used to style and layout web pages. It allows you to control the appearance of HTML elements, such as their color, font, size, and position.

- CSS can be applied to HTML using one of the three following ways:
  1. Inline CSS: Using the style attribute directly on an HTML element.
  2. Internal CSS: Using a <style> tag within the <head> section of the HTML document.
  3. External CSS: Linking to an external stylesheet using the <link> tag in the <head> section.

Precedence of CSS: (w.r.t the types of applying CSS)

1. The last defined style takes precedence over earlier styles.
2. Among the external stylesheet and the internal stylesheet, the internal stylesheet takes precedence over the external stylesheet.
3. Inline styles take precedence over both internal and external stylesheets.

Precedence of CSS: (w.r.t the types of selectors)

1. Among the tag and class selectors, the class selector takes precedence over the tag selector.
2. Among the tag, class and id selectors, the id selector takes precedence over both the tag and class selectors.

### Box Model: CSS

- The box model is a fundamental concept in CSS that describes how elements are structured and how they interact with each other.

- Each element is represented as a rectangular box, which consists of the following components:
  1. Content: The actual content of the element (text, images, etc.).
  2. Padding: The space between the content and the border.
  3. Border: The line that surrounds the padding and content.
  4. Margin: The space outside the border that separates the element from other elements.

### charset UTF-8

- This meta tag specifies the character encoding for the HTML document.
- UTF-8 is a widely used character encoding that can represent almost all characters in the Unicode standard, making it suitable for internationalization and supporting a wide range of languages and symbols.

### CSS Positioning

There are 5 types of CSS positioning:

1. Static Positioning:

- This is the default positioning for all elements. Elements are positioned according to the normal flow of the document.
- We cannot use top, bottom, left, or right properties with static positioning.

2. Fixed Positioning

- Elements with fixed positioning are positioned relative to the viewport, which means they stay in the same place even when the page is scrolled.
- We can use top, bottom, left, and right properties to specify the position of the element.

3. Sticky Positioning

- Elements with sticky positioning are positioned based on the user's scroll position. They toggle between relative and fixed positioning depending on the scroll position.

4. Relative Positioning

- Elements with relative positioning are positioned relative to their normal position in the document flow.
- We can use top, bottom, left, and right properties to adjust the position of the element from its normal position.
- The space for the element is still reserved in the normal flow of the document, even if it is moved from its original position.

5. Absolute Positioning

- Elements with absolute positioning are positioned relative to the nearest positioned ancestor (an ancestor with a position other than static). If there is no such ancestor, they are positioned relative to the initial containing block (usually the viewport).
- We can use top, bottom, left, and right properties to specify the position of the element.
- The space for the element is not reserved in the normal flow of the document, and it can overlap with other elements.

### Responsive Web Design

- Responsive web design is an approach to web design that aims to create websites that provide an optimal viewing experience across a wide range of devices, from desktop computers to mobile phones.

- It involves using flexible layouts, images, and CSS media queries to adapt the design and layout of the website based on the screen size and orientation of the device being used to view it.

### flexbox

- Flexbox is a CSS layout module that provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.

### Mobile First Approach

- Initially before few years, the desktop users were more than the mobile users, so the websites were designed for desktop users first and then adapted for mobile users. But now, the number of mobile users has surpassed the number of desktop users, so the mobile-first approach is becoming more popular. In this approach, the website is designed for mobile users first and then adapted for desktop users. This approach ensures that the website is optimized for mobile devices and provides a better user experience for mobile users.

To achieve this:

1. Start by designing the layout and content for the smallest screen size (mobile devices).
2. Use CSS media queries to apply different styles for larger screen sizes (tablets and desktops).

Breakpoints are the specific screen widths at which the layout of the website changes to accommodate different device sizes. Common breakpoints include:

- 320px (small mobile devices)
- 480px (large mobile devices)
- 768px (tablets)
- 1024px (small desktops)
- 1200px (large desktops)

<!-- all the devices styles -->

@media (min-width: 320px){
/_ Styles for small mobile devices _/
}

@media (min-width: 480px){
/_ Styles for large mobile devices _/
}

@media (min-width: 768px){
/_ Styles for tablets _/
}

@media (min-width: 1024px){
/_ Styles for small desktops _/
}

@media (min-width: 1200px){
/_ Styles for large desktops _/
}

### Library Vs Framework

- A library is a collection of pre-written code that can be used to perform specific tasks.

- A framework is a collection of libraries and tools which has a specific structure and guidelines for building applications.

### Tailwind CSS

- Tailwind CSS is a utility-first CSS framework that provides a set of pre-defined classes for styling HTML elements.
