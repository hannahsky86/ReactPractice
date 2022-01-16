import Product from "./Product";
import React from 'react';

function Props() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        
        <Product
          name="GoogleHome"
          description="Your AI Assistant"
          price={59.99}
        />

        <Product
            name="GoogleHome"
            description="Your AI Assistant"
            price={59.99}
        />

        <Product
            name="GoogleHome"
            description="Your AI Assistant"
            price={59.99}
        />
    </div>
  );
}

export default Props;
