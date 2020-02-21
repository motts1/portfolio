import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'
import Banner from '../components/Banner'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const AboutMe = (props) => (
    <Layout>
        <Helmet>
            <title>About Me</title>
            <meta name="description" content="aboutme Page" />
        </Helmet>

        <BannerLanding />

        <div id="main" style={{backgroundImage: `${'https://media.giphy.com/media/2qVKivAeI8mmk/giphy.gif'}`}}>
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>About Sierra?</h2>
                    </header>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link><img src={`${'https://media.giphy.com/media/oVzBPkoAa7QSQ/giphy.gif'}`}/></Link>
                    
                    <div className="content">
                        <div className="inner">
                            
                            <p>The reality is, everybody is an artist. Bringing passion, dedication, and attention to the things I love, is what I love to do. Everything is art therefore I decorate the opportunity with detail. From web design to fashion to writing music, I believe in making a statement. The brightest and darkest of colors stain my skin and paint my story. I have recently been blessed with the opportunity to start a life in a different city. Before my incarceration, I had no idea what coding was, no idea what programming looked like, I had never heard of JavaScript. Coding took my ability to problem solve, and upgraded it. Coding took my ability to foresee a vision, and revolutionized it. Technology proves that knowledge is forever evolving, reminding me to always do the same. </p>
                        </div>
                    </div>
                </section>
                {/* <section>
                    <Link to="/divinity" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/divinity" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/divinity" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/divinity" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section> */}
            </section>
        </div>

    </Layout>
)

export default AboutMe