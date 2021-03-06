---
title: 'How I Talk: My Guide to Tech Public Speaking'
date: '2017-08-09T22:41:42-05:00'
---

I've been giving technical talks for a few years; I keep a list of each one
[here](/about/). Speaking makes me nervous, and it's a major time investment if
I'm doing it right. But it's worth the effort because it's fueled my growth as
a developer.

I'm speaking at the Vim Chicago Meetup next month about integrating React.js
with Vim, and I'd like to use that as an excuse to write about my speaking
preparation process.

Some smart people have written on these subjects, and anything I'd have to say
leverages these ideas:

- [Conference Prompts: Or How to Submit Proposals and Influence People][noel]
- [Fix Your Presentations: 21 Quick Tips][geoffrey]
- [How to Prepare a Talk][gary]
- [Improve Your Presentations In Under $50][rails-tips]
- [Speaking.io][speaking]
- [What I learned from reading 429 conference proposals][noel-2]
- [What Your Conference Proposal Is Missing][sarah]

Several of these writers talk about submitting conference proposals, AKA CFPs.
I don't plan to cover that in-depth. Why not? I believe once you can write a
compelling proposal, getting accepted is the product of a variety of factors
you can't control. So, submit many proposals, and be like Thomas Jefferson, who
once said: "I'm a great believer in luck, and I find the harder I work the more
I have of it." And in the meantime, learn to give a great talk.

I break my speaking process into four phases:

1. Finding an idea
1. Brainstorming
1. Researching and preparing slides
1. Practice and Delivery

I can't claim these steps as essential; they just help me. My target reader is
somebody who wants to speak and has never done so before. I want you to walk
away with encouragement and a step-by-step, jargon-free checklist for preparing
a technical talk.

---

### Finding an idea

Talks are entertainment, and with the right passion, familiarity, and
freshness, I hope to produce something worth listening to.

Here's a great primer on why you, reader, have valuable ideas:

- [Conference Prompts: Or How to Submit Proposals and Influence People][noel]

What ideas lead to great talks? My strongest talks share the following traits:

1. I'm passionate about the idea
1. I know the subject well enough to master it in the allotted time
1. I've practiced the subject in the recent past

To lend context, I'll take a case study from the talk I'm preparing for next
month's Vim Chicago and React Chicago Meetups, titled _React.js + Vim_.

#### Passion

I love Vim. Learning this 25-year-old text editor changed my career. I went
[all-in](/vim-or-bust) on Vim three years ago and have translated my passion
into organizing the Vim Chicago Meetup. And, I also love React. React is my
tool of choice for the frontend.

Like any technical ability, writing React code well in Vim exists on a spectrum
ranging from barely-getting-it-done to ninja-flow-state.

It takes work to build your Vim into the perfect React development environment.
Writing React code means that I seek that perfection. What mappings, plugins,
and workflow hacks can I use to get there? It's a subject that I care about,
and that's the most important trait of a good talk.

#### Familiarity

An idea explored in [Speaking.io][speaking] is that aspirational talks, i.e.???
"I want to know about this subject, so I'll sign up for a talk and learn it by
the deadline"??? can backfire. I've heard this idea referred to as Talk Driven
Development, and if it works for you, great.

I have to start with a foundation of understanding. I need to already be at
least at the same level as the average listener. Only then do I have a chance
at pushing myself and my listeners, with enough time and work, beyond that
level into unfamiliar ground.

#### Freshness

For passion to translate to an interesting talk, I need to have done the work
recently. When somebody is speaking about an idea that's fresh in their mind,
the talk is better.

The ideas also have to be relevant to a developer working in the world right
now. In the case of React.js, the JavaScript ecosystem is constantly changing,
and any techniques I haven't validated recently will likely be outdated.

Another benefit of talking about recently _completed_ work is that I've had
time to recognize the things I could have done better. Those are often the most
valuable points.

---

### Brainstorming

Thinking about a subject, while also being a sponge, combined with an effective
system of note-taking, is how I get from an idea to the first draft of my
talks.

Brainstorming is the most important part of the process because it's the
foundation for everything that follows. For me it has two parts:

1. Thinking about the subject in an open-minded way, paying attention to ideas
that cross my mind, ideas in the world, and relevant ideas of my colleagues and
friends.
1. Recording _everything_.

Here's a little more about each step.

#### Thinking

To prepare a good talk, I generate a lot of ideas. Stephen King's _On Writing:
A Memoir of the Craft_ contains a useful anecdote. As a young writer, King
faced rejection after rejection. After many failures, one editor offered King
some advice, writing on his manuscript "Get rid of 10%." King removed 10% of
the words from his manuscript, began submitting it again, and soon landed his
first publishing deal. Cutting 10%, repeatedly, became one of his most
valuable tools.

For every idea that makes it into a talk, I've rejected five. This slaughter is
possible because I think about a subject for hours in an open-minded way.
Listening to technical news and blog posts and the people around me, reading
code, and writing things down. With this mindset, I cultivate a long list of
ideas that will help me fill time.

Leading up to a talk, I like to solicit ideas from my coworkers and the
programming community. I've had some great conversations and received many
ideas through our company Slack. Borrowing ideas from others makes your talk
stronger against.

Here is some of my current brainstorming list for my talk next month. I check
off an idea when I've researched it. Stuff that I want to pursue further gets
marked `[x]`, and the rest gets marked `[-]`.

```markdown
### Reactjs + Vim Talk Ideas

- [x] Build the talk from a blank virtual box
- [ ] Writing JS in Vim ??? Alex LaFroscia ??? Medium
- [ ] Investigate `.eshintrc` settings
- [ ] Go top to bottom through a JSX file and find optimizations
- [ ] Vim nnoremap: `\p ??? :! prettier %`
- [ ] Technologist often arrive at the same idea independently (PrettierJS)
- [ ] Linting solves needless churn and technical debating
- [ ] Ale plugin
- [ ] CLTab
- [ ] `CTRL X + CTRL L` - tab complete import statements
- [ ] Vim-surround plugin for JSX
```

Most of these ideas aren't good. But they give me options.

This is a brain exercise, so don't be tired, distracted, or under any kind of
pressure.

#### Record Everything

I use [GTD][gtd] for taking notes in a physical notebook. Whatever your method,
be sure to capture every one of the great ideas you generate. Without a
rigorous system of note-taking, I would forget a lot of ideas.

---

### Researching and Preparing Slides

Researching and preparing the slides is a unique process and these ideas have
worked for me in the past. Experimenting with and automating my process has
helped me to develop talks that are detailed and hopefully interesting to
watch.

#### Research

When possible, I start in an unusual place for tech: the library. Libraries
contain a wealth of information on many technical subjects. Connecting a
topical web development subject to the history of computers or human inquiry is
something Sandi Metz, a speaker I admire, does well. Even when the material
isn't there waiting to be found, there's always something, as well as
professionals who can help you devise a research strategy.

Technical talks, often mislabeled 'hard' talks, are what I prepare most often.
They require experimentation. I use the ideas I found to try a lot of
experiments in my text editor or REPL. Which are worth explaining?

#### Preparing Slides

After trying PowerPoint, Keynote, and even Vim buffers navigated with `]f` and
`[f` (an idea I borrowed from Steve Klabnik; not recommended unless you're an
unflappable speaker), I discovered [Deckset][deckset].

Deckset is a feature-rich markdown slide builder, and I love it. If you know
markdown, Deckset is fantastic. It lets me crank out ideas and
proofs-of-concept right in my editor. If you feel that the hardest part of
preparing a talk is putting together the visuals and notes you need to speak,
then Deckset is worth trying.

As for slide design, I follow the guidelines put forth in
[Speaking.io][speaking] and the Chicago Ruby Meetup speaking guidelines. To
summarize:

1. Make your text as big as you can.
1. Use the most basic code examples that you can.
1. Use high contrast colors, like black text on a white background. Subtle
monochrome palettes are unreadable on a projector.
1. Don't show code unless you want your audience to read every line, because they will.

My talks don't feature funny GIFs, pictures, or videos. Why? I don't trust
myself to be funny and don't want to invest any of the time I have to develop
that quadrant. It's a strategy.

I structure my talks like essays, with an introduction, thesis, three-four
supporting points, and a conclusion. Formulaic but effective.

Something I often ponder is: could this be a blog post? One of the less
effective types of presentations could be summarized as a person reading a blog
post they wrote. A telltale sign of such a talk is when the speaker concludes
with a link to a blog post with the same title as the talk. I've given a few
like this that I didn't love. A good talk isn't a recipe for solving some
narrow problem, it's a performance that would fall flat on a page.

---

### Practice and Delivery

#### Practice

Practice is everything. I run through the entire talk without stopping at least
10-20 times before any presentation. I do every rehearsal with a visible
timer, standing at a podium, projecting my slides onto something, even just a
television screen, even wearing the type of clothing I'll be wearing at the
presentation.

I practice setting up my equipment, plugging in the HDMI cable or Airplay,
putting my devices into Airplane/Do Not Disturb/silent mode, setting up live
coding sessions, and switching display preferences. I practice handling the loss of
Internet, my presentation software crashing, and even losing my computer. These
little things can be hard to do smoothly when standing in front of 300 people. 

I practice staying in a time window by writing timestamps such as _T: 10:30_ in
the presenter notes of each transition point in the talk. If I'm ahead of the
timestamp, which is usually the case, I breathe, drink water, walk around. If
I'm behind, I speed up. At a Meetup you can get away with going long or short;
conferences are expecting you to be pretty close to time because you're just a
small part of a much bigger schedule.

If you get a chance, deliver the talk once to a real audience. For a Meetup
talk, deliver it first to your coworkers or friends. For a conference talk,
deliver it once at a Meetup, the bigger the better. Just give it to somebody.
Leave time for Q & A in the practice run; the questions your audience asks can
be very valuable. Answer them preemptively on the next run, or add a section
addressing common counterarguments or edge cases. The result will be a
stronger argument.

Why do I rehearse so much? I get nervous, like everyone. When you're nervous,
you revert to what you have rehearsed. If you've rehearsed sitting down and
mumbling, that's what you'll revert to. If you rehearsed going too slow and
fidgeting with your slides, that's what you'll revert to. So, practice a lot,
and each time act like it's the real thing.

There's another benefit to this process: after running through a talk ten
times, weaker pieces start to stand out. Remove them. In this phase, I tend to
get some of my best ideas doing mundane tasks like cooking. I can't get into
that kind of creative zone unless I've thought through the obvious parts
of my idea and become almost a bit bored by it. And that just takes reps. A
pertinent quote:

> If I have ever made any valuable discoveries, it has been due more to patient
> attention, than to any other talent.
-- Isaac Newton

#### Delivery

If I've been practicing, delivery is an afterthought. Knowing that I've put in
the time makes me feel unstoppable. My only advice is to practice. Practice, so
that you can enjoy the moment.

Two techniques I avoid: live coding or technical theatrics of any kind, and
audience Q & A in the final performance. When talks fall flat, it's usually
because an element like this doesn't go as planned. Eliminate uncertainty.

---

### Conclusion

I'll conclude with this Tweet from Saron:

<blockquote class="twitter-tweet" data-lang="en">
  <p lang="en" dir="ltr">
    Reminder: you don&#39;t have to be amazing to apply. Plenty of
    mediocre people with impressively high self confidence win everyday because
    they applied and you didn&#39;t. Throw your hat in the ring.
  </p>
  &mdash; Saron (@saronyitbarek)
  <a href="https://twitter.com/saronyitbarek/status/969737202216271872?ref_src=twsrc%5Etfw">
    March 3, 2018
   </a>
</blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Public speaking isn't magic. It's a skill anybody can get better at. The
personal and professional benefits I've accrued have been worth every moment of
self-doubt and nervousness. Give it a try, and let me know how you do.

[deckset]: https://www.decksetapp.com/
[gary]: https://www.deconstructconf.com/blog/how-to-prepare-a-talk
[geoffrey]: http://www.inc.com/geoffrey-james/how-to-fix-your-presentations-21-tips.html
[gtd]: http://gettingthingsdone.com/
[noel-2]: http://www.noelrappin.com/railsrx/2014/3/17/what-i-learned-from-reading-429-conference-proposals
[noel]: http://www.noelrappin.com/railsrx/2014/1/18/conference-prompts-or-how-to-submit-proposals-and-influence-people
[rails-tips]: http://www.railstips.org/blog/archives/2010/05/05/improve-your-presentations-in-under-50/
[railsconf]: http://confreaks.tv/videos/railsconf2017-observing-chance-a-gold-master-test-in-practice
[sarah]: http://www.sarahmei.com/blog/2014/04/07/what-your-conference-proposal-is-missing
[speaking]: http://speaking.io
