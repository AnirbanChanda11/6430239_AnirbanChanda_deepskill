import React from "react";

function BlogDetails() {
  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!"
    },
    {
      title: "Installation",
      author: "Schwezdenier",
      content: "You can install React from npm."
    }
  ];

  return (
    <div className="column">
      <h2>Blog Details</h2>
      {blogs.map((blog, i) => (
        <div key={i}>
          <h3>{blog.title}</h3>
          <p><strong>{blog.author}</strong></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
