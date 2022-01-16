import React from 'react';
import Product from "./Product";
import styles from "./App.module.css"

function StylingComp() {
  return (
    <div>
        <h1>Hello World</h1>
        <h2 className={styles.error}>An error occured</h2>
        
        <Product
          name="GoogleHome"
          description="You AI Assistant"
          price={59.99}
        />

        <Product
            name="GoogleHome"
            description="You AI Assistant"
            price={59.99}
        />

        <Product
            name="GoogleHome"
            description="You AI Assistant"
            price={59.99}
        />
    </div>
  );
}

export default StylingComp;
