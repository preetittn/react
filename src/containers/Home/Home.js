import React, { Component } from "react";
import Aux from '../../hoc/Aux/Aux';
import classes from "./Home.module.css";
import watch from '../../assets/images/watch.jpg';
import heels from '../../assets/images/heels.jpg';
import sidebag from '../../assets/images/sidebag.jpg';
import accessories from '../../assets/images/accessories.jpg';
import {Link} from 'react-router-dom';



class Home extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Home}>
                    <center>
                        <div id="demo" className="carousel slide" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#demo" data-slide-to="0" class="active"></li>
                                <li data-target="#demo" data-slide-to="1"></li>
                                <li data-target="#demo" data-slide-to="2"></li>
                                <li data-target="#demo" data-slide-to="3"></li>
                            </ul>

                            <div className="carousel-inner" >
                                <div className="carousel-item active">
                                    <img src={watch} className={classes.Carousel} alt="Los Angeles" />
                                    <div className="carousel-caption">
                                        <h1>Men's Watches</h1>
                                        <p>Accessories trending this summer</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={heels} className={classes.Carousel} alt="Chicago" />
                                    <div className="carousel-caption">
                                        <h1>High Heels</h1>
                                        <p>"You put high heels on and you change."</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={sidebag} className={classes.Carousel} alt="Chicago" />
                                    <div className="carousel-caption">
                                        <h1>Sling bags</h1>
                                        <p>Adding Moments of Styles</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={accessories} className={classes.Carousel} alt="Chicago" />
                                    <div className="carousel-caption">
                                        <h1>Men's Accessories</h1>
                                        <p>True style never dies.</p>
                                    </div>
                                </div>

                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>

                            </div>
                        </div>
                    </center>
                </div>
                {/* next */}
                <hr class="featurette-divider" />
                <div class="row featurette">
                    <div class="col-md-7">
                        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">4s00x300</text></svg>
                    </div>
                </div>
                {/* next */}
                <hr class="featurette-divider" />
                <div class="row featurette">
                    <div class="col-md-7 order-md-2">
                        <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                        <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div class="col-md-5 order-md-1">
                        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 500x500"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">400x300</text></svg>
                    </div>
                </div>
                {/* footer */}
                <footer class="container">
                    <p class="float-right"><a href="#">Back to top</a></p>
                    <p>&copy; 2017-2020 Company, Inc. &middot; <Link to="/">Privacy</Link> &middot; <Link to="/">Terms</Link></p>
                </footer>
            </Aux>
        );
    }
}

export default Home;