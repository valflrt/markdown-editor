import React, { ChangeEvent, useState } from "react";

import useMarkdown from "../../hooks/useMarkdown";

/* import ReactSyntaxHighlighter from "react-syntax-highlighter";
import mdStyle from "react-syntax-highlighter/dist/esm/styles/hljs/github"; */

import styles from "./Editor.module.css";
import "github-markdown-css/github-markdown-light.css";

/* <ReactSyntaxHighlighter
            language={"markdown"}
            style={mdStyle}
            showLineNumbers={true}
          >
            {textAreaValue}
          </ReactSyntaxHighlighter> */

const Editor = () => {
  let [textAreaValue, setTextAreaValue] = useState("");
  let parsedMarkdown = useMarkdown(textAreaValue);

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.textZoneWrapper}>
        <div className={styles.textZone}>
          <textarea
            className={styles.textZoneTextArea}
            value={textAreaValue}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setTextAreaValue(e.target.value);
            }}
            /* onKeyPress={(e) => {
              console.log(e.key);
            }} */
          ></textarea>
        </div>
      </div>
      <div className={styles.mdZoneWrapper}>
        <div className={styles.mdZone.concat(" markdown-body")}>
          {parsedMarkdown}
        </div>
      </div>
    </div>
  );
};

export default Editor;
