import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    // const { user } = this.props;

    // if (!user) {
    //   return (
    //     <li>
    //       <Link to="/">
    //         <i class="fa fa-book" />
    //         Public Code
    //       </Link>
    //     </li>
    //   );
    // }

    return (
      <nav>
        <div className="container" />
      </nav>
    );
  }
}

/*<nav class="grey darken-3">
  <div class="container">
    <div class="nav-wrapper">
      <a href="/" class="brand-logo center">code<span class="codestory-span">S</span>tory</a>
      <a href="#" data-activates="main-menu" class="button-collapse show-on-large">
        <i class="fa fa-bars"></i>
      </a>
      <!-- RIGHT NAV -->
      <ul class="right hide-on-small-only">
        {{#if user}}
        <li>
          <a href="/dashboard">Welcome {{user.firstName}}</a>
        </li>
        <li>
          <a href="/auth/logout">
            <i class="fa fa-sign-out"></i> Logout</a>
        </li>
        {{else}}
        <li>
          <a href="/stories">
            <i class="fa fa-book"></i> Public Code</a>
        </li>
        {{/if}}
      </ul>
      <!-- SIDE MENU -->
      <ul class="side-nav" id="main-menu">
        
          {{#if user}} 
          {{else}}
          <li>
            <a class="btn red darken-1" href="/auth/google">
              <i class="fa fa-google left"></i> Login With Google</a>
          </li>
          {{/if}}
            <li><a href="/stories"><i class="fa fa-book"></i> Public Code</a></li>
            {{#if user}}
            <li class="divider"></li>
            <li><a href="/dashboard"><i class="fa fa-cog"></i> Dashboard</a></li>
            <li><a href="/stories/my"><i class="fa fa-user"></i> My Code</a></li>
            <li><a href="/auth/logout"><i class="fa fa-sign-out"></i> Logout</a></li>
            {{/if}}
      </ul>
    </div>
  </div>
</nav>
*/
