// StylingAssignment.js

import React from 'react';

const StylingAssignment = () => {
  return (
    <div>
      <header>
        <h1>Welcome to the React Styling Assignment</h1>
        <p>Explore and enhance your styling skills!</p>
      </header>

      <section>
        <article>
          <h2>Article 1</h2>
          <p>This is the content of the first article. Add your own text here.</p>
        </article>

        <article>
          <h2>Article 2</h2>
          <p>This is the content of the second article. Add your own text here.</p>
        </article>

        <article>
          <h2>Article 3</h2>
          <p>This is the content of the third article. Add your own text here.</p>
        </article>
      </section>

      <aside className="sidebar">
        <section>
          <h2>Categories</h2>
          <ul>
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </section>

        <section>
          <h2>Tags</h2>
          <ul>
            <li>Tag 1</li>
            <li>Tag 2</li>
            <li>Tag 3</li>
          </ul>
        </section>
      </aside>

      <footer>
        <p>&copy; 2023 React Styling Assignment</p>
      </footer>
    </div>
  );
};

export default StylingAssignment;
