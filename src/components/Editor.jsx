"use client";
import React from "react";

import { Editor } from "@tinymce/tinymce-react";

export default function MyEditor({ setContent }) {
  return (
    <>
      <Editor
        // onInit={(evt, editor) => setContent(editor.getContent())}
        onChange={(e) => setContent(e.lastLevel.content)}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "a11ychecker",
            "advlist",
            "advcode",
            "advtable",
            "autolink",
            "checklist",
            "export",

            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",

            "powerpaste",
            "fullscreen",
            "formatpainter",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
          ],

          toolbar:
            "undo redo | casechange blocks | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />

      {/* <button onClick={log} type="button">
        Log editor content
      </button> */}
    </>
  );
}
