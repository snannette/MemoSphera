import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Form extends React.Component {
    render() {
         return (
              <div>
                    Bonjour Soukaena
                  <Link to='dash'> Cliquer ici </Link>
              </div>
         )
    }
}

export default Form