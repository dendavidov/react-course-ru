import React from 'react';
import News from './News';
import Comments from './Comments';

const App = React.createClass({
  render: function() {
    return (
      <div className="App">
        App Comp
        <News />
        <Comments />
      </div>
    );
  }
});

export default App
