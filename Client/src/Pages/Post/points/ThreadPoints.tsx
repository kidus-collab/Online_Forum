import React, { FC } from "react";

// component for the like count  & icon

interface ThreadPointsProps {
  points: number;
}

const ThreadPoints: FC<ThreadPointsProps> = ({ points }) => {
  return <div>ThreadPoints</div>;
};

export default ThreadPoints;
