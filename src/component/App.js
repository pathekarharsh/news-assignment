import React from 'react';
import Card from './Card';
import News from '../News';

function App() {
  return (
    <div>
      <h1 classtitle="heading">NEWS</h1>
      <Card
        img={News[0].img}
        title={News[0].title}
        description={News[0].description}
        newsURL={News[0].newsURL}
      />
      <Card
        title={News[1].title}
        img={News[1].img}
        description={News[1].description}
        newsURL={News[1].newsURL}
      />
      <Card
        title={News[2].title}
        img={News[2].img}
        description={News[2].description}
        newsURL={News[2].newsURL}
      />
      <Card
        title={News[3].title}
        img={News[3].img}
        description={News[3].description}
        newsURL={News[3].newsURL}
      />
      <Card
        title={News[4].title}
        img={News[4].img}
        description={News[4].description}
        newsURL={News[4].newsURL}
      />
    </div>
  );
}

export default App;
