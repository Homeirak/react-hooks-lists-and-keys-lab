import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  console.log("NavBar component is rendering!");

  //you can have the map method outside JSX, like here or 
  // inside JSX (ret statement) but then you have to put the whole
  //map method and return statement inside curly brackets 
  // return (
  //   <nav>
  //     {links.map((link) => (
  //       <a key={link} href={`#${link}`}>{link}</a>
  //     ))}
  //   </nav>
  // );
  const linkElements = links.map((link) => (
    <a key={link} href={`#${link}`}>{link}</a>
  ));
  
  //JSX requires one parent element to be returned in a React component. This is why <nav> wraps {linkElements}.
  //This is saying:
  // return (
  //   <nav>
  //     <a href="#home">Home</a>  
  //     <a href="#about">About</a>  
  //     <a href="#projects">Projects</a>
  //   </nav>
  // );
  // Now <nav> is the single parent Element, which is wrapping all the oteher elements
  //Since linkElements is a JavaScript array of JSX elements, the curly brackets {} are necessary to insert it inside JSX.
  return (
    <nav>
      {linkElements}
    </nav>
  );
}

export default NavBar;


{/* DOUBLE CURLY BRACKETS!!!
the double curly brackets {{ ... }} in JSX are used for embedding JavaScript expressions inside JSX, and in this case, they define an inline style object. */}

// LN 6 COL 45: 
// you can use curly BroadcastChannel, but then you would have to add 'return' before <a

// using parentheses means -> implicit return

// 🚀 General Rule
// ✔ Everything inside the return (...) of a React component is JSX
// ✔ Any JavaScript inside JSX must be wrapped in {}
// ✔ Before return, everything is just JavaScript

// 🚀 Summary
// ✔ <nav> is needed because JSX must return one parent element.
// ✔ {} are needed because we’re inserting JavaScript inside JSX.
// ✔ Either store .map() in a variable or put it directly inside JSX.