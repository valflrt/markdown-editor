import React, { ChangeEvent, useState } from "react";

import Markdown from "../../components/Markdown";

import styles from "./Editor.module.css";
import "github-markdown-css/github-markdown-light.css";

const Editor = () => {
  let [textAreaValue, setTextAreaValue] = useState("");

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.textZoneWrapper}>
        <div className={styles.textZone}>
          <textarea
            className={styles.textZoneTextArea}
            value={textAreaValue}
            onInput={(e: ChangeEvent<HTMLTextAreaElement>) => {
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
          <Markdown markdownString={textAreaValue} />
        </div>
      </div>
    </div>
  );
};

export default Editor;
