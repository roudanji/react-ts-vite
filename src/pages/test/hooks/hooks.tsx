import { useState } from "react";
import { TestContextType } from "../type/contextType";

export default (): TestContextType => {
  const [data] = useState(1);

  return data;
};
