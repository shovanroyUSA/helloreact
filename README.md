# Style this  React application
import React from 'react';


    <div >
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


## To render the provided React code in a browser, We will need to integrate the given code into the React application and then style it appropriately. Here are the steps:
### 1. Creating a New React Component:
#### First, we need to create a new React component to encapsulate the provided code. For instance, let's call this component StylingAssignment.js
#### import React from 'react';

#### const StylingAssignment = () => {
  #### return (
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

### 2. Include this new component in the main app file App.js
import React from 'react';
import StylingAssignment from './component/StylingAssignment';

const App = () => {
  return (
    <div>
      <StylingAssignment />
    </div>
  );
};

export default App;

### 3. Styling the Component:

Create a new CSS file (.css) and import it into your .js

## Output will look like:
<img width="944" alt="image" src="https://github.com/shovanroyUSA/helloreact/assets/116796946/5f3f45b8-f534-4380-95d1-cacff9bc6fcf">


