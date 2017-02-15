import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Brand</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Link 1 <span className="sr-only">(current)</span></a></li>
        <li><a href="#">Link 2 </a></li>
        <li>Link</li>
      </ul>
      
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Link 3 </a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="#">Action 1 </a></li>
            <li><a href="#">Another Action 2</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        );
    }
}