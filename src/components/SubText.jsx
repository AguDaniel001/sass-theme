import React from 'react';

function SubText({ tag: Tag, text, className }) {
  return (
    <Tag className={`textt ${className}`}>{text}</Tag>
  );
}

export default SubText;