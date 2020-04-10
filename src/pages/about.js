import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/Layout'
import Project from '../components/Project'
import SEO from '../components/seo'
import projects from '../data/projects'

const About = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const about = data.markdownRemark

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="About" keywords={['about']} />
      <h1>About</h1>
      <div className="hey">
        <p>Hi there! I’m Jake. 👋</p>
        <p>
          I am an Army veteran, self-taught programmer, and consultant working
          remotely at <a href="https://hashrocket.com/">Hashrocket</a>.
        </p>
        <p>
          I strive to be reliable, positive, systematic, a great listener and
          problem solver. My teammates would describe me as an expert
          communicator, methodical and rigorous, but also fun and empathetic in
          writing and conversation. I’m an inquisitive person who{' '}
          <a href="https://www.swyx.io/writing/learn-in-public/">
            learns in public
          </a>
          — I level up quickly, and bring those around me along for the ride.
        </p>
        <p>
          Check out my <a href="/">blog</a> to explore my writing,{' '}
          <a href="/now/">now</a> to see what I’m currently jazzed about, and my
          projects, talks, and profiles below. I’m most proud of my volunteer
          work at <a href="https://www.codeplatoon.org/">Code Platoon</a>,
          presenting at RailsConf 2017, and building{' '}
          <a href="https://til.hashrocket.com/">Today I Learned</a>, a popular
          blog that’s the number-one referrer of traffic to my company website.
        </p>
        <p>Thanks for stopping by!</p>
        <p>Jake</p>
      </div>
      <h3>Projects</h3>
      <ul>
        {projects.map(props => (
          <Project {...props} />
        ))}
        <li>
          <a href="https://www.thebellisringing.com/">The Bell</a>: My COVID-19
          social-distancing project— a way to stay connected when you’re apart.
          Written in Elixir.
        </li>
        <li>
          <a href="https://conway.now.sh/">Game of Life</a>: My implementation
          Conway’s Game of Life. Written in React.js and TypeScript.
        </li>
        <li>
          <a href="https://javascript-equality.now.sh/">JavaScript Equality</a>:
          This application shows the JavaScript value-comparison operators{' '}
          <code className="language-text">==</code> and{' '}
          <code className="language-text">===</code> in action, and is inspired
          by the{' '}
          <a href="https://dorey.github.io/JavaScript-Equality-Table/">
            JavaScript Equality Table
          </a>
          . Written in React.js and TypeScript.
        </li>
        <li>
          <a href="http://novel.herokuapp.com">Ceramic Nation</a>: A Markov
          Chain generated novel. Written in Ruby.
        </li>
      </ul>
      <h3>Talks</h3>
      <ul>
        <li>
          <em>SQL Workshop</em>, Code Platoon (Bravo, Charlie, Delta, Foxtrot,
          Golf, Hotel, India, Juliet, Kilo, Lima, and Mike cohorts), 2017—2020.
        </li>
        <li>
          <em>WebAssembly 101</em>, Hashrocket Winter Miniconf, 2019.
        </li>
        <li>
          <em>Functioning in React: A Deep-Dive into useState</em>, Chicago
          JavaScript Meetup / Ancient City Ruby, 2019.
        </li>
        <li>
          <em>Hashrocket Developer Survey 2019</em>, Hashrocket Summer Miniconf,
          2019.
        </li>
        <li>
          <em>Writing a Programming Language</em>, Hashrocket Winter Miniconf,
          2018.
        </li>
        <li>
          <em>Introducing Hooks</em>, React Chicago Meetup, 2018.
        </li>
        <li>
          <em>Weekly Team Retros</em>, Hashrocket Summer Miniconf, 2018.
        </li>
        <li>
          <p>
            <em>Format Your Elixir Code Now</em>, Chicago Elixir Meetup /
            ElixirDaze / Atlanta Elixir Meetup, 2018.
          </p>
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dwphyQmD6n8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </li>
        <li>
          <em>React.js + Vim</em>, React Chicago Meetup, Vim Chicago Meetup,
          2017.
        </li>
        <li>
          <em>From Troops to Tech: A Panel of Chicago Veterans In Tech</em>,
          Chicago Veteran Developers Meetup, 2017.
        </li>
        <li>
          <em>State of the TIL</em>, Hashrocket Summer Miniconf, 2017.
        </li>
        <li>
          <p>
            <em>Observing Change: A Gold Master Test in Practice</em>, RailsConf
            / Sauce Labs (webinar), 2017.
          </p>
          <div class="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/D9awDBUQvr4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </li>
        <li>
          <em>Integration Testing with Wallaby</em>, Chicago Elixir Meetup,
          2017.
        </li>
        <li>
          <em>Git + Vim with Vim-Fugitive</em>, Vim Chicago Meetup, 2016.
        </li>
        <li>
          <em>Dive into Vim Language Plugins</em>, Vim Chicago Meetup, 2016.
        </li>
        <li>
          <em>Military to Programmer</em>, Code Platoon (Alpha cohort), 2016.
        </li>
        <li>
          <em>Test Driven Development/Pair Programming Workshop</em>, Code
          Platoon (Alpha cohort), 2016.
        </li>
        <li>
          <em>Introduction to Vim</em>, Vim Chicago Meetup, 2015.
        </li>
        <li>
          <em>Capybara Driver Benchmarking</em>, Hashrocket Summer Miniconf,
          2015.
        </li>
      </ul>
      <h3>Profiles</h3>
      <ul>
        <li>
          <a href="https://github.com/jwworth">GitHub</a>: Home to most of my
          code.
        </li>
        <li>
          <a href="https://hashrocket.com/blog/rocketeers/jake-worth">
            Hashrocket Blog
          </a>
          : Writing about code and culture for Hashrocket.
        </li>
        <li>
          <a href="https://stackoverflow.com/users/2112512/jake-worth">
            Stack Overflow
          </a>
          : Helping people fix React and Ruby code.
        </li>
        <li>
          <a href="https://til.hashrocket.com/authors/jakeworth">
            Today I Learned
          </a>
          : Writing about what I learn each day.
        </li>
        <li>
          <a href="https://twitter.com/jwworth">Twitter</a>: Announcements,
          conversations, and ideas.
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jakeworth">LinkedIn</a>: My
          professional profile.
        </li>
        <li>
          <a href="https://speakerdeck.com/jwworth">Speaker Deck</a>: Slides
          from my better talks.
        </li>
        <li>
          <a href="https://exercism.io/profiles/jwworth">Exercism</a>: My
          solutions to small code challenges in a variety of languages.
        </li>
        <li>
          <a href="https://www.meetup.com/members/12542589/">Meetup</a>: Meet me
          IRL at Vim Chicago and other Meetups.
        </li>
      </ul>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
