import React, { ChangeEvent, useState } from "react";

import styles from "./Editor.module.css";

//let characters = lines.map((l) => l.split(""));

const Editor = () => {
  let [textAreaValue, setTextAreaValue] = useState("");
  let [mdZoneLines, setMdZoneLines] = useState<string[]>([]);

  return (
    <div className={styles.editorWrapper}>
      <div className={styles.textZoneWrapper}>
        <div className={styles.textZone}>
          <textarea
            className={styles.textZoneTextArea}
            value={textAreaValue}
            onInput={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setTextAreaValue(e.target.value);
              setMdZoneLines(e.target.value.split(/\n/));
              console.log(mdZoneLines, mdZoneLines.join("\n"));
            }}
            onKeyPress={(e) => {
              console.log(e.key);
            }}
          ></textarea>
        </div>
      </div>
      <div className={styles.mdZoneWrapper}>
        <div className={styles.mdZone}>{mdZoneLines.join("\n")}</div>
      </div>
    </div>
  );
};

export default Editor;
