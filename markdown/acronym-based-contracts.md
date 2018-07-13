---
title: 'Acronym based contracts'
path: '/acronym-based-contracts'
---

HTML forms the basic building blocks of the web. CSS can be used to style HTML to make it come to life. In CSS you write classes and apply them to html to apply styles like color, width, padding, and margin. 
Tachyons is a CSS library giving access to a range of pre-set CSS classes to apply those styles. Tachyons uses Atomic CSS meaning
that the classes describe the style that is being applied. The alternative is that a CSS class describes what the HTML element that the style is being applied to does.

Non-atomic:

```css
.sidebar {
   margin: 20px;
}


```
Atomic: 

```css
.ma4 {
   margin: 20px;
}
```

Using Tachyons means that when you view any HTML with tachyons classes applied you can quickly understand the CSS that applies to an element. With non-atomic CSS you have to refer back to the 
underlying CSS file to view the styles.

Because I deal with contracts this made me think about how this idea could be used in legal agreements. Standardising acronyms for clause descriptions could allow lawyers 
to quickly understand the contents of a clause, and, because machine learning is en vogue, it may be possible to apply machine learning to parse legal agreements and spit out the applicable acronyms. 
Also, lawyers as part of drafting, could use clause acronyms as a shorthand to quickly give access to the full contents of a clause.

Here's an example:

```css
.fm-short {
  "The parties will not incur liabiity to the other party where a party is unable to perform its obligations as a result of an event of force majeure".
}
```

```html
<div class="fm-short">
```

