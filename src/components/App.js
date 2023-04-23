import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";


console.log(blogData);

function App(props) {
  return (
    <div className="App">
    <Header name={blogData.name} />
    <About image={blogData.image} about={blogData.about} />
    <ArticleList posts={blogData.posts} />
    </div>
  );
}


export default App;





/*
function App() {
  return (
    <div className="App">
      <Header name="My Blog" />
      <main>
        <About
          image="logo.svg"
          about="Welcome to my blog! Here, you'll find articles on various topics."
        />
        <ArticleList>
          {blogData.posts.map((post) => (
            <Article
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}
            />
          ))}
        </ArticleList>
      </main>
    </div>
  );
}

export default App;
*/
