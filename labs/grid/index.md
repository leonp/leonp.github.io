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

            <p class="f5 f4-ns ma0 measure">An early doors experiment in creating an up-to-6 column responsive grid layout using CSS. Uses the Tachyons breakpoints (i.e. <code>-ns</code>, <code>-m</code> and <code>-l</code>), so you can specify different column numbers at different screen widths.</p>

            <p class="f6 f5-ns mb0 measure">One great thing about CSS grid is that you apply all CSS properties to the parent element, and the children fit into their specified positions.</p>

        </div>

    </section>

    <section class="ph2 ph4-ns ph5-l pv3 pv4-ns bg-navy near-white bt b--light-gray">

        <div class="c-wrapper center">

            <h1 class="f5 f3-ns lh-title ma0 mb3 mb4-l">2 cols then 3 at medium, 5 at large, 1rem margins</h1>

            <p class="measure">Each grid item will automatically take up the same proportion of the available space as every other item. Under this system you can't (currently) specify that one item will take, say, 4 of the 6 columns, and another 1 or 2 (it is a work in progress). <strong>Ideal for placing an unknown number of items into same sized columns.</strong></p>

            <h2 class="f6 f5-ns ttu tracked ma0 mb1 mb2-ns">HTML</h2>

<pre class="pa2 pa4-l ba b--white yellow"><code>&lt;div class="c-dg c-gcg c-gtc-2 c-gtc-3-m c-gtc-5-l"&gt;
    &lt;p&gt;Bacon ipsum text&hellip; 12 times&lt;/p&gt;
&lt;/div&gt;</code></pre>

            <p>{% include button.html text="See the CSS &rarr;" border-color="moon-gray" color="navy" bg-color="yellow" hover-bg-color="washed-yellow" hover-color="navy" url="https://raw.githubusercontent.com/leonp/leonp.github.io/master/_sass/_c-grid.scss" %} (all classes prefixed with a <code>c-</code>)</p>

            <div class="c-dg c-gcg c-gtc-2 c-gtc-3-m c-gtc-5-l">

                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>
                <p class="bg-washed-blue dark-gray pa2 pa4-l f7">Bacon ipsum dolor amet kielbasa picanha cupim jowl, filet mignon shoulder t-bone short loin ground round porchetta flank leberkas pork.</p>

            </div>

        </div>

    </section>

</article>
