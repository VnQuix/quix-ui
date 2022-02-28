import { useContext } from "react";

import { SaveContext } from "contexts/Save";

const useSave = () => {
  return { ...useContext(SaveContext) };
};

export default useSave;
