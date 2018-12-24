import * as React from 'react';
import Counter from './Counter';
import Heading from './Heading';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Heading />
        <Counter label={'Current'} />
      </div>
    );
  }
}

export default App;
