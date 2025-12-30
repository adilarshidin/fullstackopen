import { JSX } from "react";

import { CoursePart } from "../types";

const Part = ({ part }: { part: CoursePart}): JSX.Element => {
  switch (part.kind) {
    case "basic":
      return <p>{part.name} {part.exerciseCount} {part.description}</p>
    case "group":
      return <p>{part.name} {part.exerciseCount} {part.groupProjectCount}</p>
    case "background":
      return <p>{part.name} {part.exerciseCount} {part.description} {part.backgroundMaterial}</p>
    case "special":
    return <p>{part.name} {part.exerciseCount} {part.description} {part.requirements.join(', ')}</p>
  }
};

export default Part;
