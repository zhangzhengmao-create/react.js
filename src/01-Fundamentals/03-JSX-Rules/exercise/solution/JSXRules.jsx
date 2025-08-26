import { nanoid } from "nanoid";
import React from "react";

const JSXRules = () => {
  return (
    <div>
      <h1>JSXRules</h1>
      <ul>
        <li key={nanoid()}>
          JSX must return a <strong>single parent element</strong>
        </li>
        <li key={nanoid()}>
          JSX elements must be <strong>properly closed</strong>
        </li>
        <li key={nanoid()}>
          JSX attributes are written using <strong>camelCase</strong>{" "}
          (e.g.,"className" instead of "class").
        </li>
      </ul>
    </div>
  );
};

export default JSXRules;
