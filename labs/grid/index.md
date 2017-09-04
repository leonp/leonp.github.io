---
layout: blank
title: Testing a grid module using CSS grid
---

<article class="pt2 pt4-ns">

    <div class="ph2 ph4-ns ph5-l">

        <h1 class="f3 f2-ns f1-l ma0 pa0 mb2 mb4-ns lh-title">A layout experiment using CSS grid</h1>

    </div>

    <section class="ph2 ph4-ns ph5-l pv3 pv4-ns bg-near-white bt b--light-gray">

        <div class="c-wrapper center">

            <p class="f5 f4-ns ma0 measure">An early doors experiment in creating an up-to-6 column responsive grid layout using CSS. Uses the Tachyons breakpoints (i.e. <code>-ns</code>, <code>-m</code> and <code>-l</code>), so you can specify different column numbers at different screen widths. Works in Safari, Chrome and Firefox.</p>

            <p class="f6 f5-ns mb0 measure">One great thing about CSS grid is that you apply all CSS properties to the parent element, and the children fit into their specified positions.</p>

        </div>

    </section>

    <section class="ph2 ph4-ns ph5-l pv3 pv4-ns bg-navy near-white bt b--light-gray">

        <div class="c-wrapper center">

            <h1 class="f5 f3-ns lh-title ma0 mb3 mb4-l">2 cols then 3 at medium, 5 at large, 1rem margins</h1>

            <p class="measure">Each grid item will automatically take up the same proportion of the available space as every other item. <strong>Ideal for placing an unknown number of items into same sized columns.</strong></p>

            <h2 class="f6 f5-ns ttu tracked ma0 mb1 mb2-ns">HTML</h2>

<pre class="pa2 pa4-ns ba b--white yellow"><code>&lt;div class="c-dg c-gcg c-grg c-gtc-2 c-gtc-3-m c-gtc-5-l"&gt;
    &lt;div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"&gt; &lt;/div&gt; &lt;!-- repeat x times --&gt;
&lt;/div&gt;</code></pre>

            <p>{% include button.html text="See the CSS &rarr;" border-color="moon-gray" color="navy" bg-color="yellow" hover-bg-color="washed-yellow" hover-color="navy" url="https://raw.githubusercontent.com/leonp/leonp.github.io/master/_sass/_c-grid.scss" %}</p>

            <div class="c-dg c-gcg c-grg c-gtc-2 c-gtc-3-m c-gtc-5-l">

                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>
                <div class="pa2 pa4-ns bg-washed-blue h3 h4-ns"> </div>

            </div>

        </div>

    </section>

    <section class="ph2 ph4-ns ph5-l pv3 pv4-ns bg-gold dark-gray bt b--light-gray">

        <div class="c-wrapper center">

            <h1 class="f5 f3-ns lh-title ma0 mb3 mb4-l">Thirds and two thirds at medium and above</h1>

            <p class="measure">A traditional 3 column layout. In the first example, the first area spans 2 columns, the second 1. In the second, the first area spans 1 of the 3 columns, the second 2.</p>

            <h2 class="f6 f5-ns ttu tracked ma0 mb1 mb2-ns">HTML</h2>

<pre class="pa2 pa4-l ba b--white navy"><code>&lt;div class="c-dg-ns c-gcg-ns c-gtc-2-1-ns"&gt;
    &lt;p&gt;Bacon ipsum text&hellip; 2 times&lt;/p&gt;
&lt;/div&gt;
&hellip;
div class="c-dg-ns c-gcg-ns c-gtc-1-2-ns"&gt;
    &lt;p&gt;Bacon ipsum text&hellip; 2 times&lt;/p&gt;
&lt;/div&gt;</code></pre>

            <p>{% include button.html text="See the CSS &rarr;" border-color="light-gray" color="gold" bg-color="navy" hover-bg-color="navy" hover-color="yellow" url="https://raw.githubusercontent.com/leonp/leonp.github.io/master/_sass/_c-grid.scss" %}</p>

            <div class="c-dg-ns c-gcg-ns c-gtc-2-1-ns">

                <p class="bg-washed-yellow dark-gray pa2 pa4-l">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-yellow dark-gray pa2 pa4-l">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>

            </div>

            <div class="c-dg-ns c-gcg-ns c-gtc-1-2-ns">

                <p class="bg-washed-yellow dark-gray pa2 pa4-l">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-yellow dark-gray pa2 pa4-l">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>

            </div>

        </div>

    </section>

    <section class="ph2 ph4-ns ph5-l pv3 pv4-ns bg-near-white dark-gray bt b--light-gray">

        <div class="c-wrapper center">

            <h1 class="f5 f3-ns lh-title ma0 mb3 mb4-l">Lessons learned</h1>

            <ul class="measure-wide f4">

                <li>CSS grid gives you lots of control over layout</li>
                <li>You just apply classes to parent elements, making it super easy to write grids in HTML</li>
                <li>It calculates a lot of values for you. This is good as you no longer need to sweat over column widths, margins and gutters, but it also poses a problem for modular CSS: <strong>How do you write modular classes for infinte CSS possibilities?</strong> How do you handle <code>fr</code> and <code>grid-column-gap</code>?</li>

            </ul>

        </div>

    </section>

</article>
