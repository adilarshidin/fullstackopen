# HTML: creating the content. Compedium

## Overview

HTML - markup language that is used to structure a web page with and its content. Consists of elements that are used to wrap the content to make it behave a certain way when rendered in a browser.

Way of life:
Work
Pray
Repeat

All this content will be rendered as a one line in a browser. I can make it into a paragraph and an unordered list:

```html
<p>Way of life:</p>

<ul>
    <li>Work</li>
    <li>Pray</li>
    <li>Repeat</li>
</ul>
```

## Page example

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
  </head>
  <body>
    <img src="" alt="My test image" />
  </body>
</html>
```

`<!doctype html>` - required to make sure the document behaves correctly.

`<html></html>` - page root, wraps all content. Has `lang` attribute that sets the primary language of the document.

`<head></head>` - container for things that are not content but need to be included on the page. Like keywords for SEO and stylesheets.

`<meta charset="utf-8" />` - character set.

`<meta name="viewport" content="width=device-width" />` - ensures the page renders at the width of browser's viewport, preventing mobile browsers from rendering pages wider than that and shrinking them.

`<title>My test page</title>` - page title, appears in the browser tab and used in the bookmark/favorite options.

`<body></body>` - all the content that you want to show to the user.

Most elements have an *opening tag* and a *closing tag*, some also have *attributes* with extra settings and info on the element.

## Embedding images

```html
<img src="path/to/image" alt="My test image" />
```

`src` attribute here provides the path to the image that should be loaded in the position of the element.

`alt` attribute provides a textual alternative to the image.

Elements without *closing tag* are called *void* and are written with a trailing slash */* in the end.

## Marking up text

### Headings

6 levels: `<h1>-<h6>`, has *closing tag*.

### Paragraphs

`<p></p>` - for text paragraphs.

### Lists

`<ol></ol>` - ordered.

`<ul></ul>` - unordered.

Each item inside of the list is put into `<li></li>` element.

## Creating links

`<a href="link/to/content">text</a>` - anchor, use to add a link to a page.

`href` - attribute which points to the content.

`text` - what text should be displayed for the link in place.
