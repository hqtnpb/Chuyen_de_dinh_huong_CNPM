import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">Pathway</div>
        <nav className="nav">
          <a href="#destinations">Destinations</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
        </nav>
        <div className="auth-buttons">
          <button className="login">Log in</button>
          <button className="signup">Sign up</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1>Connecting People & Places</h1>
          <p>
            Though exploration is often associated with places, at its very heart, it’s about the people. For nearly 70 years, this person-to-person experience has been at the very core of Liberty Travel’s mission.
          </p>
        </section>

        <section className="journey">
          <div className="content">
            <h2>Our journey begins with travel</h2>
            <div className="story">
              <p>
                <strong>Our Story</strong><br />
                In 1951 we opened our doors in New York City, with a clear focus on customer service as we offered the very first complete vacation package. Soon after, we were helping Americans discover the world with international trips. Today, from being a part of one of the world’s largest travel companies, Flight Centre Travel Group to supporting small travel businesses within dependent by Liberty Travel, our commitment to creating connections, providing one-on-one service, and crafting the perfect vacation remains stronger than ever.
              </p>
            </div>
          </div>
        </section>

        <section className="team">
          <h2>Meet the team</h2>
          <div className="team-members">
            <div className="member">
              <img src="https://via.placeholder.com/150" alt="David Warner" />
              <p>David Warner</p>
            </div>
            <div className="member">
              <img src="https://via.placeholder.com/150" alt="Aaron Finch" />
              <p>Aaron Finch</p>
            </div>
            <div className="member">
              <img src="https://via.placeholder.com/150" alt="Steven Smith" />
              <p>Steven Smith</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
