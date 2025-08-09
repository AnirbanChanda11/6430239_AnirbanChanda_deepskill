import React, { useState } from "react";
import CourseDetails from "./components/CourseDetails";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import "./App.css";

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div className="container">
      {/* Buttons to toggle components */}
      <div className="buttons">
        <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>
        <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>
      </div>

      <div className="content">
        {/* Method 1: If statement before rendering */}
        {(() => {
          if (showCourses) {
            return <CourseDetails />;
          }
        })()}

        {/* Method 2: Logical AND rendering */}
        {showBooks && <BookDetails />}

        {/* Method 3: Ternary operator */}
        {showBlogs ? <BlogDetails /> : <h3 style={{ color: "red" }}>Blogs are hidden</h3>}
      </div>
    </div>
  );
}

export default App;

