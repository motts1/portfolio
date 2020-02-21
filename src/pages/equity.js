import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

const Equity = (props) => (
    <Layout>
        <Helmet>
            <title>Divinity</title>
            <meta name="description" content="Equity Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Equity</h1>
                    </header>
                    {/* <a href='https://master.d3uqfmh9kgwwjw.amplifyapp.com/'>duh</a> */}
                    {/* <span className="image main"><img src={pic12} alt="" /></span> */}
                    <p>Equity is a social media platform to connect artists with other artists. The ability to discover fresh, new talent and upcoming artists as well as various art forms. A way for a producer to connect with the perfect guitarist for a sample, or the perfect singer to tie the piece together.  The ability to find a videographer, photographer, or a studio to record in, within minutes. This app takes who you need to know, and puts them all at your fingertips, to help make your visions and dreams a reality. </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Equity


