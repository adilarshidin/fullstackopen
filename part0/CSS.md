# CSS: styling the content. Compendium

## Overview

CSS - style sheet language used to style HTML elements. The elements to style are selected and *values* for their style *properties* are set which define how they will look.

## Applying CSS to HTML

`<link href="path/to/stylesheet" rel="stylesheet" />` - the `<link>` element is used in the `<head>` section to set the stylesheet for the page.

## CSS syntax basics

```CSS
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

`p` - selector, selects the elements to style. In this example selects all `<p>` elements.

Each line inside {} is called *declaration* where *values* for *properties* are set.

The whole structure is called a *ruleset*. Within a ruleset a semicolon `;` must be used to separate *declarations*.

Multiple selectors can be included, separated by commas:

```CSS
p,
.my-class,
#my-id {
  color: red;
}
```

## Improving the text

```HTML
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
  rel="stylesheet" />
```

In this example the page is linked to the stylesheet hosted by Google Fonts service which will load the chosen font.

And in the css file we need to delete any declarations that change the text font hence they will override it. And then add the following, for example:

```CSS
html {
  /* px means "pixels". The base font size is now 10 pixels high */
  font-size: 10px;
  /* Replace PLACEHOLDER with the font-family property value you got from Google Fonts */
  font-family: PLACEHOLDER;
}
```

Other text styling example:

```CSS
h1 {
  font-size: 60px;
  text-align: center;
}

p,
li {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1px;
}
```

## CSS is all about boxes

Most HTML elements can be thought of as boxes that sit on top of or alongside other boxes. This is referred to as the box model.

Each box has properties:

`padding` - the space around the content.

`border` - the separating line just outside padding.

`margin` - the space outside the `border`.
