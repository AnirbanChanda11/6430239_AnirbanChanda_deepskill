import React from "react";

function CourseDetails() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/2021" }
  ];

  return (
    <div className="column">
      <h2>Course Details</h2>
      {courses.map((course, i) => (
        <div key={i}>
          <p><strong>{course.name}</strong></p>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
