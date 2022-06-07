import React from "react";
import blogData from "../data/blog";
import Header from './Header.js';
import About from './About.js';
import ArticleList from './ArticleList.js';


console.log(blogData);

function App() {
  return (
    <div id="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about} />
      <ArticleList />
    </div>
  );
}

export default App;
