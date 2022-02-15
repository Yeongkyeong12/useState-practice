import React, { useState } from "react";
import "./Tag.css";

export default function Tag() {
  const [tags, setTags] = useState(["CodeStates", "JJang", "Coding"]);
  const addTag = (e) => {
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
      }
    }
  };
  const deleteTag = (deletedTag) => {
    const newTags = tags.filter((tag) => tag !== deletedTag);
    setTags(newTags);
  };
  return (
    <div className="App">
      <div className="tag-container">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {tag} <span onClick={() => deleteTag(tag)}>x</span>
            </div>
          );
        })}

        <input onKeyDown={addTag} />
      </div>
    </div>
  );
}
