import { useState } from "react";

export default function Count({ count }) {
  console.log("Component rendering...");

  return <p className="count">{count}</p>;
}
