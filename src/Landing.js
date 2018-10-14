import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Landing extends React.Component {
    render() {
         return (
              <div>
              <div class="navbar navbar-inverse navbar-fixed-top headroom" >
                <div class="container">
                  <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                    <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" alt="MemoSphere - Héritage moral"/></a>
                  </div>
                  <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav pull-right">
                    <li class="active"><a href="#">Accueil</a></li>
                      <li><a href="about.html">A propos</a></li>
                      <li><a href="contact.html">Contact</a></li>
                      <li><Link to='signUp'> Ouvrez votre Sphère </Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <header id="head">
                <div class="container">
                  <div class="row">
                    <h1 class="lead">MemoSphere</h1>
                    <p class="tagline">La plateforme de création d’héritage moral à destination de ceux que vous aimez.</p>
                    <br/>
                    <p>  <Link class="btn btn-action btn-lg" to='signUp'> Ouvrez votre Sphère </Link></p>
                    <br/>
                    <br/>
                    <br/>
                    <p class="warn"> Attention ce site est une démonstration aucune donnée n'est récoltée </p>

                  </div>
                </div>
              </header>
              </div>
         )
    }
}

export default Landing;
