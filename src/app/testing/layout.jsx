import { MantineProvider } from "@mantine/core";
import React from "react";
// import "@mantine/tiptap/styles.css";

export default function Layout({ children }) {
  return <MantineProvider>{children}</MantineProvider>;
}
