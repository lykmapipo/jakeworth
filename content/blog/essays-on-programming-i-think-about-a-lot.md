---
title: 'Essays on Programming I Think About a Lot'
date: '2020-10-29T00:00:00-06:00'
---

Programming is a game of abstractions, and we programmers traffic in ideas.
When I find an idea that resonates with me, I turn into an evangelist for it to
everyone who works with me.

Here are my favorites. Some of these essays are purely about technology, and
some are about programming culture. The longer I work in this field, the more
these two domains merge in my mind.

Thanks to [Ben Kuhn](https://www.benkuhn.net/progessays/) for this idea.

### Essays

Jeff Atwood, [The First Rule of Programming: It's Always Your Fault][your-fault]. I
like to answer questions on Stack Overflow, and an amazing amount of questions
on that website have a title like "Found a bug in React?" paired with an
introductory sentence: "I'm brand new to React." It's human to assume there's a
problem with your tools or materials. To me, this essay's point is that it's
more profitable to assume the opposite, because your code hasn't stood up to
anything close to the scrutiny of the code from a popular software project.

> If you truly aspire to being a humble programmer, you should have no qualms
about saying "hey, this is my fault-- and I'll get to the bottom of it."
-- Jeff Atwood

I tried to make this argument myself before reading the canonical Atwood post,
which you can read here: [Examine Your Assumptions](/examine-your-assumptions).

---

Shawn Wang, [Learn in Public][lip]. Be public, leverage the encouragement and
criticism of others, and build a footprint for yourself on the internet. There
are a bunch of detours you can take as a junior developer that waste time and
potentially graduate you to [expert beginner][expert-beginner] status; one of
them is hiding your work in an attempt to avoid criticism. I think one of the
smartest parts of argument this can be summed up in the adage: "The fastest way
to get the right answer to a question is to post the wrong answer on the
internet."

> People think you suck? Good. You agree. Ask them to explain, in detail, why
you suck. You want to just feel good or you want to be good? No objections, no
hurt feelings. Then go away and prove them wrong.
-- Shawn Wang

---

David B. Hayes, [Rubber Duck Debugging: The Psychology of How it
Works](https://www.thoughtfulcode.com/rubber-duck-debugging-psychology/).
Trying to understand these ideas, which humans aren't inclined to understand,
has been the most positive influence overall on my debugging skills.

> Because of the psychology of how we humans relate, you???re forced to think
fresh when you invoke your little rubber ducky, and your problem may be quite
simply solved.
-- David B. Hayes

---

[XY Problem](http://xyproblem.info/). When you're asking for programming help
from someone, start by easing them into your situation, stating the problem,
your assumptions, and what you've tried and learned. Give them the chance to
poke holes in your logic.

> Remember that if your diagnostic theories were accurate, you wouldn't be asking for help right?

---

Dan McKinley, [Choose Boring
Technology](https://mcfunley.com/choose-boring-technology). As I've cycled
through side projects in Phoenix, Rails, and React this year, this post has
resonated with me. Picking the right technology with which to build your
project is massively important, and I believe we as a community place far too
much value on tools that are new. How do we make pragmatic choices? Consider
Dan's concept of 'innovation tokens':

> Let???s say every company gets about three innovation tokens. You can spend
these however you want, but the supply is fixed for a long while. You might get
a few more after you achieve a certain level of stability and maturity, but the
general tendency is to overestimate the contents of your wallet.
-- Dan McKinley

---

Elisabeth Hendrickson, [Momentum >
Urgency](https://testobsessed.com/2020/02/momentum-urgency/). I found this post
recently, and it describes the best teams I've worked with. Effective teams
focus on process, not outcome. Managers of such teams know that a team member
being blocked isn't a frustrating detail that that team member will have to
remedy, but rather a process failure that was luckily exposed while many more
remain hidden. They'll use their managerial clout to fight with you against
that obstacle, considering it a top priority.

> What I've learned is that if we want things to go fast, a sense of momentum
is much more effective than a sense of urgency.
-- Elisabeth Hendrickson

---

Scott Hanselman, [Do they deserve the gift of your
keystrokes?](https://www.hanselman.com/blog/do-they-deserve-the-gift-of-your-keystrokes)
This post isn't just for programmers, but the statistical nature of it
resonated with me. Since reading it, I often consider the reach of my chosen
communication method, and whether I'm making efficient use of time.

> Assuming you want your message to reach as many people as possible, blog it. You only have so many hours in the day.
-- Scott Hanselman

---

Joel Spolsky, [The Iceberg Secret,
Revealed](https://www.joelonsoftware.com/2002/02/13/the-iceberg-secret-revealed/).
Programmers know that what we can see on a web page can represent a small
fraction or none of the true functionality, completeness, and complexity of the
application. People who don't write software don't automatically know that.
Factor this into all communication.

>  Customers Don???t Know What They Want. Stop Expecting Customers to Know What
They Want. It???s just never going to happen. Get over it.
-- Joel Spolsky

> Understand that any demos you do in a darkened room with a projector are
going to be all about pixels. If you can, build your UI in such a way that
unfinished parts look unfinished.
-- Joel Spolsky

A quote I find relevant, from _It???s Not How Good You Are, It???s How Good You
Want To Be_ by Paul Arden: "The more strikingly visual your presentation is,
the more people will remember it." Every visual detail you add will translate
to a working, MVP feature in the eyes of some stakeholders.

---

Paul Slaughter, [Conventional comments](https://conventionalcomments.org/). I
believe code reviews can raise quality, share information, and help people
grow. But they can go wrong in so many ways. This technique??? labeling comments
to help the recipient contextualize your feedback??? has had a positive impact on
several teams I've been a part of.

> Labeling comments saves hours of undercommunication and misunderstandings.
They are also parseable by machines!
-- Paul Slaughter

In Bitbucket and GitHub, you can take the `suggestion:` prefix a step farther
by embedding a code suggestion in your comment. If the reviewer likes your
proposal, they can click a button and merge your change! This really reduces
the extra conversation around a suggestion.

---

Kent C. Dodds, [AHA Programming](https://kentcdodds.com/blog/aha-programming).
The AHA (Avoid Hasty Abstractions) concept has had a huge impact on my
development approach in the last few months. Kent quotes Sandi Metz as an
inspiration: "Prefer duplication over the wrong abstraction." I'd add two more
favorite Sandi quotes to the mix: "We'll never know less than we know right
now," and so you should "[a]lways delay making design decisions until you need
to." DRY is a technique, not a law of nature.

> Now, don't get me wrong, I'm not suggesting anarchy. I'm just suggesting that
we should be mindful of the fact that we don't really know what requirements
will be placed upon our code in the future.
-- Kent C. Dodds

---

Paul Graham, [Schlep Blindness](http://www.paulgraham.com/schlep.html). Fixing
online payments was a massive business idea that was just sitting there,
waiting be solved. So why didn't anyone solve it before Stripe? Because it was
a hard problem, full of tedious drudgery and unknowns. Paul argues that our
brains want to protect us from failure, and thus won't even let us see these
kind of problems.

> Your unconscious won't even let you see ideas that involve painful schleps.
> That's schlep blindness.
-- Paul Graham

What's the workaround? Think about problems that you wish *someone else* would
solve.

---

Adam Wathan, [CSS Utility Classes and "Separation of
Concerns."](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)
This post makes a thorough, thoughtful case against the dominant CSS strategies
of today, and a case for a functional, utility-first style exemplified in
Wathan's library TailwindCSS. I've fought some of these battles myself, the
advice rings true, and the patterns he describes feel really comfortable to me.

> When you think about the relationship between HTML and CSS in terms of
> "separation of concerns", it's very black and white. You either have
> separation of concerns (good!), or you don't (bad!). This is not the right
> way to think about HTML and CSS. Instead, think about dependency direction.
-- Adam Wathan

---

Charity Majors, [The Trap of the Premature
Senior](https://charity.wtf/2020/11/01/questionable-advice-the-trap-of-the-premature-senior/).
True seniority is earned by moving around and continuing to grow and prove
yourself on several teams.

> After you have gotten a new job or two, and proven to yourself that you can
> level up again and master new stacks and technologies, that fretful inner
> voice questioning whether you deserve the respect you receive or not will
> calm down. You will have proven to yourself that your success wasn't just a
> one-off, that you can be dropped into any situation, learn the local ropes
> and succeed. You will be a senior engineer.
-- Charity Majors

---

Shawn Wang, [The Meta-Creator Ceiling][ceiling]. Creating content about
creating, e.g. writing a "How Elon Musk thinks" blog post, can be a limiting
path because it's available to everyone and zero-sum. You could be missing an
opportunity to create something truly original.

> Assume you will be successful at whatever game you play. Are you playing a
> game you want to win?
-- Shawn Wang

---

Zed Shaw via Abhishek Nagekar, [Advice From An Old Programmer][zed]. There will
likely come a day when you find programming to be a little bit boring. It will
cease to be joyful as a pure exercise. What do you do then? It's a question I'm
grappling with. I'm choosing to use that skill to build things I care about,
and help others become programmers through volunteering.

> Programming as a profession is only moderately interesting. It can be a good
job, but you could make about the same money and be happier running a fast food
joint. You???re much better off using code as your secret weapon in another
profession.
-- Zed Shaw

### Conclusion

I plan to keep this list updated as I continue to read.

[ceiling]: https://www.swyx.io/meta-creator-ceiling/
[expert-beginner]: https://daedtech.com/how-developers-stop-learning-rise-of-the-expert-beginner/
[lip]: https://www.swyx.io/writing/learn-in-public/
[twitter]: https://twitter.com/jwworth
[your-fault]: https://blog.codinghorror.com/the-first-rule-of-programming-its-always-your-fault/
[zed]: https://www.nagekar.com/2018/06/advice-from-an-old-programmer-zed-shaw.html
