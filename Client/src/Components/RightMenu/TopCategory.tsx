import React, { FC, useState, useEffect } from "react";
import { getTopCategories } from "../../Services/DataService";

interface topCategoryProps {
  ThreadId: string;
  category: string;
  ThreadTitle: string;
}

const TopCategory: FC<topCategoryProps> = () => {
  return <div>TopCategory</div>;
};

export default TopCategory;
