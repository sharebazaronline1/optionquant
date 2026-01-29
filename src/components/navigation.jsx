import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-fixed-top optionquant-nav">
      <div className="container">
        {/* Brand + mobile toggle */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>

         <a className="navbar-brand page-scroll" href="/">
  <span className="brand-o">O</span>
  <span className="brand-text">ption</span>
  <span className="brand-q">Q</span>
  <span className="brand-text">uaant</span>
</a>

        </div>

        {/* Navigation links */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#features" className="page-scroll">Features</a></li>
            <li><a href="#how-to-trade" className="page-scroll">How It Works</a></li>
            <li><a href="#contact" className="page-scroll">Contact</a></li>
          
          </ul>
        </div>
      </div>
    </nav>
  );
};
