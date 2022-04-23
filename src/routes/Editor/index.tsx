import React, { ChangeEvent, useEffect, useState } from "react";

import useMarkdown from "../../hooks/useMarkdown";

import styles from "./Editor.module.css";
import "github-markdown-css/github-markdown-light.css";

/*
possible way to display the textarea with its content highlighted:

import ReactSyntaxHighlighter from "react-syntax-highlighter";
import editorStyle from "react-syntax-highlighter/dist/esm/styles/hljs/github";

<ReactSyntaxHighlighter
  language={"markdown"}
  style={editorStyle}
  showLineNumbers={true}
>
  {textAreaValue}
</ReactSyntaxHighlighter>
*/

const Editor = () => {
  let [textAreaValue, setTextAreaValue] = useState("");
  let parsedMarkdown = useMarkdown(textAreaValue);

  useEffect(() => {
    console.log(textAreaValue);
  }, [textAreaValue]);

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.textZoneWrapper}>
        <h3>Write your raw Markdown here:</h3>
        <textarea
          className={styles.textZoneTextArea}
          value={textAreaValue}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setTextAreaValue(e.target.value);
          }}
          onKeyDown={(e) => {
            // adds two spaces when pressing "tab" (and shift key is not pressed)
            if (!e.shiftKey && e.key === "Tab") {
              e.preventDefault();
              let [start, end] = [
                e.currentTarget.selectionStart,
                e.currentTarget.selectionEnd,
              ];
              setTextAreaValue(
                textAreaValue
                  .substring(0, start)
                  .concat("  ")
                  .concat(textAreaValue.substring(end, textAreaValue.length))
              );
              e.currentTarget.setRangeText("  ", start, end, "end");
            }
          }}
        />
      </div>
      <div className={styles.mdZoneWrapper}>
        <h3>The parsed and colored output is here:</h3>
        <div className={styles.mdZone.concat(" markdown-body")}>
          {parsedMarkdown}
        </div>
      </div>
    </div>
  );
};

export default Editor;
