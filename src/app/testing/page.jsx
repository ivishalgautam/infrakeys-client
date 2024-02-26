import Tiptap from "@/components/TipTapEditor";
import React from "react";

export default function page() {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "1rem",
        margin: "1rem",
        padding: "1rem",
      }}
    >
      <Tiptap />
    </div>
  );
}
