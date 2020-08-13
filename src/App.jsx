import React, { Component } from 'react'
import { Pictures } from './components/Pictures'
import { Header } from './components/Header'

class App extends Component {
  render(props) {
    return (
      <>
        <Header
          header={
            <header>
              <nav class="header">
                <svg
                  height="32"
                  viewBox="0 0 16 16"
                  width="32"
                  aria-hidden="true"
                  title="GitHub"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
                <p>Octodex</p>

                <a href="https://github.com/FAQ">FAQ</a>
                <a
                  href="https://twitter.com/githubdesign"
                  eslint-disable-next-line
                  target="_blank"
                  rel="noreferrer"
                >
                  Follow us on Twitter
                </a>
                <a href="https://github.com">Back to GitHub.com</a>
              </nav>
            </header>
          }
        />

        <Pictures
          number="150"
          name="Octoqueer"
          picture="https://octodex.github.com//images/Octoqueer.png"
          author1="https://github.com/cameronfoxly.png"
          author2="https://github.com/johncreek.png"
          author3="https://github.com/tonyjaramillo.png"
        />
        <Pictures
          number="149"
          name="Terracottocat"
          picture="https://octodex.github.com/images/Terracottocat_Single.png"
          author1="https://github.com/chubbmo.png"
        />
        <Pictures
          number="148"
          name="Octogatos"
          picture="https://octodex.github.com/images/Octogatos.png"
          author1="https://github.com/cameronfoxly.png"
        />
        <Pictures
          number="147"
          name="Adacats"
          picture="https://octodex.github.com/images/Adacats.png"
          author1="https://github.com/cameronfoxly.png"
        />
        <Pictures
          number="146"
          name="Fintechtocat"
          picture="https://octodex.github.com/images/Fintechtocat.png"
          author1="https://github.com/ceciliorz.png"
        />
        <Pictures
          number="145"
          name="Brennatocat"
          picture="https://octodex.github.com/images/Brennatocat.png"
          author1="https://github.com/johncreek.png"
        />
        <Pictures
          number="144"
          name="Filmtocats"
          picture="https://octodex.github.com/images/filmtocats.png"
          author1="https://github.com/heyhayhay.png"
        />
        <Pictures
          number="143"
          name="Sentrytocat"
          picture="https://octodex.github.com/images/Sentrytocat_octodex.jpg"
          author1="https://github.com/cameronmcefee.png"
        />
        <Pictures
          number="142"
          name="Umbrellatocat"
          picture="https://octodex.github.com/images/boxertocat_octodex.jpg"
          author1="https://github.com/rubyjazzy.png"
        />
        <Pictures
          number="141"
          name="Boxertocat"
          picture="https://octodex.github.com/images/puddle_jumper_octodex.jpg"
          author1="https://github.com/rubyjazzy.png"
        />
        <Pictures
          number="140"
          name="Surftocat"
          picture="https://octodex.github.com/images/surftocat.png"
          author1="https://github.com/jeejkang.png"
        />
        <Pictures
          number="139"
          name="Hulatocat"
          picture="https://octodex.github.com/images/hula_loop_octodex03.gif"
          author1="https://github.com/heyhayhay.png"
        />
      </>
    )
  }
}

export default App
