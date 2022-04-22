import React, { FC, useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import remarkGfm from "remark-gfm";
import remarkHighlightjs from "remark-highlight.js";
import rehypeSanitize from "rehype-sanitize";

import ErrorBoundary from "./ErrorBoundary";

const Markdown: FC<{
  markdownString: string;
}> = ({ markdownString }) => {
  let [markdownElements, setMarkdownElements] = useState<JSX.Element>();
  let [error, setError] = useState(false);
  useEffect(() => {
    let testMd = (
      <ErrorBoundary
        onError={() => {
          console.log("ERROR !");
          setError(true);
        }}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkHighlightjs]}
          rehypePlugins={[rehypeSanitize]}
        >
          {markdownString}
        </ReactMarkdown>
      </ErrorBoundary>
    );
    if (!error) setMarkdownElements(testMd);
  }, [markdownString]);
  return markdownElements ?? null;
};

export default Markdown;
