import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Message extends React.Component {
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
                      <li><a href="about.html">Partager</a></li>
                      <li><a href="about.html">Raconter</a></li>
                      <li><a href="about.html">Accompagner</a></li>
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


                <article class="col-sm-9 maincontent">
                  <header class="page-header">
                    <h1 class="page-title">Partager</h1>
                  </header>

                  <p>
                    «Les mots de la vie doivent nous consoler de la mort.»
                  </p>
                  <br/>
                    <form>
                      <div class="row">
                        <div class="col-sm-4">
                          <label>Laissez un message à </label>
                          <input class="form-control" type="text" placeholder="Héritier"/>
                        </div>


                      </div>
                      <br/>
                      <div class="row">
                        <div class="col-sm-12">
                          <textarea placeholder="Type your message here..." class="form-control" rows="9"></textarea>
                        </div>
                      </div>
                      <br/>
                      <div class="row">
                      
                        <div class="col-sm-6 text-right">
                          <input class="btn btn-action" type="submit" value="Enregistrer le message"/>
                        </div>
                      </div>
                    </form>

                </article>



                </div>
              </div>
              </div>
         )
    }
}

export default Message
