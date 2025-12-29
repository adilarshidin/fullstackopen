import type { JSX } from "react";

interface PartsProps {
  courseParts: {
    name: string;
    exerciseCount: number;
  }[];
}

const Parts = (props: PartsProps): JSX.Element => {
  return (
    <div>
      {props.courseParts.map(part =>
        <p key={part.name}>
          {part.name} {part.exerciseCount}
        </p>
      )}
    </div>
  )
};

export default Parts;
