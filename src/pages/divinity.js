import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import pic12 from '../assets/images/pic12.png'

const Divinity = (props) => (
    <Layout>
        <Helmet>
            <title>Divinity</title>
            <meta name="description" content="Divinity Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Divinity</h1>
                    </header>
                    <a href='https://master.d3uqfmh9kgwwjw.amplifyapp.com/'>Divinity</a>
                    {/* <span className="image main"><img src={pic12} alt="" /></span> */}
                    <p>Having a dream, a vision, a reason, is why I wanted to build this website for my sister and her dream business. Divinity is an e-commerce website. Using React for the front-end, MongoDb and Sanity for the back-end, Divinity is a one page application that was my first major project. </p>
                   
                </div>
            </section>
        </div>

    </Layout>
)

export default Divinity