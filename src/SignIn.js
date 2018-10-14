import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

class SignIn extends React.Component {
    render() {
         return (
              <div>
              <div class="navbar navbar-inverse navbar-fixed-top headroom" >
                <div class="container">
                  <div class="navbar-header">

                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
                    <a class="navbar-brand" href="/"><img src="assets/images/logo.png" alt="MemoSphere - Héritage moral"/></a>
                  </div>
                  <div class="navbar-collapse collapse">
                    <ul class="nav navbar-nav pull-right">
                    <li class="active"><a href="/">Accueil</a></li>
                      <li><a href="about.html">A propos</a></li>
                      <li><a href="contact.html">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>


              <header id="head" class="secondary"></header>


              <div class="container">

                <ol class="breadcrumb">
                  <li><a href="/">Accueil</a></li>
                  <li class="active">Accès Utilisateur</li>
                </ol>

                <div class="row">


                  <article class="col-xs-12 maincontent">
                    <header class="page-header">
                      <h1 class="page-title">Connection</h1>
                    </header>

                    <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                      <div class="panel panel-default">
                        <div class="panel-body">
                          <h3 class="thin text-center">Votre sphère s’ouvre ici</h3>
                          <p class="text-center text-muted"> </p>
                          <hr/>

                          <form>
                            <div class="top-margin">
                              <label>Email <span class="text-danger">*</span></label>
                              <input type="text" class="form-control"/>
                            </div>
                            <div class="top-margin">
                              <label>Password <span class="text-danger">*</span></label>
                              <input type="password" class="form-control"/>
                            </div>

                            <hr/>

                            <div class="row">
                              <div class="col-lg-8">
                                <b><a href="">Mot de passe oublié?</a></b>
                              </div>
                              <div class="col-lg-4 text-right">
                                <p>  <Link class="btn btn-action btn-lg" to='message'> Connexion </Link></p>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                    </div>

                  </article>


                </div>
              </div>
              </div>
         )
    }
}

export default SignIn
