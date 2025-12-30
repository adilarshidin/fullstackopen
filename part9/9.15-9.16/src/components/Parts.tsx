import type { JSX } from "react";

import { CoursePart } from "../types";
import Part from "./Part";

interface PartsProps {
  courseParts: CoursePart[];
}

const Parts = (props: PartsProps): JSX.Element => {
  return (
    <div>
      {props.courseParts.map(part =>
        <Part key={part.name} part={part} />
      )}
    </div>
  )
};

export default Parts;
