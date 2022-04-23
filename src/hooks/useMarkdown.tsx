import {
  createElement,
  Fragment,
  ReactFragment,
  useEffect,
  useState,
} from "react";

import { unified } from "unified";

import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse/lib";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeReact from "rehype-react/lib";

import "highlight.js/styles/github.css";

const useMarkdown = (markdownSource: string) => {
  let [parsed, setParsed] = useState<ReactFragment>();

  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeReact, {
        createElement,
        Fragment,
      })
      .process(markdownSource)
      .then(
        (f) => {
          setParsed(f.result as ReactFragment);
        },
        (err) => console.log(`Error while parsing markdown: ${err}`)
      );
  }, [markdownSource]);

  return parsed;
};

/**
 * components: {
          code: ({
            node,
            inline,
            className,
            children,
            ...props
          }: PropsWithoutRef<HTMLProps<HTMLElement>> & {
            node: any;
            inline: any;
          }) => {
            let match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={syntaxStyle}
                language={match[1]}
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        },
 */

export default useMarkdown;
