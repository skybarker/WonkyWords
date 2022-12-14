import { useState } from "react";

export default function useDef() {
  const [definition, setDef] = useState();

  return [definition, setDef];
}
