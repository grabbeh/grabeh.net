---
path: '/Online-terms-better-with-notice'
title: 'Online terms - better with notice'
---

In some countries in the world, laws are in place to help protect the consumer against the imposition of unfair contract terms.

The rationale behind such laws is ensure that a company cannot take advantage of the fact that a customer is not always in a position to understand standard terms placed in front of them, and is also in a relatively weak bargaining position to make any changes to terms.

At the same time, especially in e-commerce terms, it's important to not present any major hurdles to a consumer's usage of e-commerce. For example, not providing protections would mean that consumers would be more likely (ok, only a little more likely) to wade through terms to make sure there wasn't anything unduly onerous.

Consumer protection regulations mean that a customer can be relatively assured that regardless of the terms they sign up to (which are generally unread) because of consumer protection regulations, the terms will either a) be reasonable in the first instance or b) if they do contain unreasonable terms, they will be struck out if a company ever sought to enforce them.

Although the above protections are in most cases likely to mean that the vast blocks of text that often form online terms will not contain anything nasty, there are steps that a website provider can take to improve their chances of being able to rely on its terms.

For example it's important to use plain language in your terms and also to highlight any particularly onerous terms (even if their own right they may be entirely reasonable).

One of the UK's most famous judges, Lord Denning in the case of [J Spurling Ltd v Bradshaw](http://en.wikipedia.org/wiki/J_Spurling_Ltd_v_Bradshaw) [1956] EWCA Civ 3 offered a particularly pertinent quote back in 1956 commenting that:

<div class="quote">"I quite agree that the more unreasonable a clause is, the greater the notice which must be given of it. Some clauses which I have seen would need to be printed in red ink on the face of the document with a red hand pointing to it before the notice could be held to be sufficient."</div>

With online terms it could be a good idea to highlight to a customer where a particularly onerous term is proposed to be introduced.

With this in mind, I thought it would be interesting to try to use some code to introduce this into some generic terms (Lorem Ipsum in this case). Using [Skrollr.js](https://github.com/Prinzhorn/skrollr), I created some functionality so as a user scrolls down the page, highlighted blocks move into view alerting them to particularly onerous terms.

The example can be found [here](http://legal-terms-example.grabeh.net). Scrolling down should result in the warning notices appearing (although only on desktop at the moment).

At the moment, a two column approach is taken and with Skrollr you can use relative positioning to adjust the styling of an element dependent on its position relative to the top and bottom of the viewport. Here's an example for one of the boxes.

    <div class="imp-text" 
    data-25-top-top="opacity: 1; background: rgb(255,247,165); left: 0px;" 
    data-25-top-bottom="opacity: 0; background: rgb(255,255,255); left: 200px;" 
    data--25-bottom-top="opacity: 0; left: 200px; background: rgb(255,255,255);" 
    data--25-bottom-bottom="opacity: 1; left: 0px; background: rgb(255,247,165);">
    Kidney due within 30 days of signature</div>

In the example by using 'top-top' (top of viewport and top of element) and 'top-bottom' (still top of viewport and bottom of element) and introducing changes in style between the two, scrolling between will smoothly transition between the two styles.

Whilst some of the term used on the page may not quite cut the mustard in terms of being reasonable, the important point to take away is that by highlighting the terms, you're more likely to have provided sufficient notice to the user.

In part, consumer law assumes a user may not read the terms, but if a company takes appropriate steps to notify its users about onerous terms, it is more likely they'll be able to rely on them in future.

