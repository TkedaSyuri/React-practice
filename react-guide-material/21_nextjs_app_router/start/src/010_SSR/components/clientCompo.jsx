"use client";

import React from "react";
import { useEffect, useState } from "react";

export default function ClientCompo() {
  const [state, setState] = useState(undefined);
  useEffect(() => {
    setState("client");
  }, []);

  return(
    <div>{state}</div>
  )
};

