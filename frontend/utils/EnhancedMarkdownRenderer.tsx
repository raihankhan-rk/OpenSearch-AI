import React, { ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const BolderStrong = ({ children }: { children: ReactNode }) => (
  <strong className="extra-bold">{children}</strong>
);

const CustomParagraph = ({ children }: { children: ReactNode }) => {
  const lines = React.Children.toArray(children).flatMap(child =>
    // @ts-ignore
    typeof child === 'string'
      ? child.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />}
            <span>{line}</span>
          </React.Fragment>
        ))
      : [child]
  );
// @ts-ignore
  return <p className="mb-2">{lines}</p>;
};

const CustomListItem = ({ children }: { children: ReactNode }) => (
  <li className="mb-1">{children}</li>
);

const EnhancedMarkdownRenderer = ({ content }: { content: string }) => {
  const safeContent = content.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');

  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
            // @ts-ignore
            strong: BolderStrong,
            // @ts-ignore
            p: CustomParagraph,
            // @ts-ignore
          li: CustomListItem,
        }}
      >
        {safeContent}
      </ReactMarkdown>
      <style jsx global>{`
        .markdown-content {
          word-wrap: break-word;
        }
        .extra-bold {
          font-weight: 600;
          color: white;
        }
        .markdown-content ul, .markdown-content ol {
          padding-left: 1.5em;
          margin-top: 1em;
          margin-bottom: 0.5em;
        }
        .markdown-content li > p {
          margin-bottom: 20px;
        }
        code {
          background-color: #333;
          color: white;
          padding: 0.2rem 0.4rem;
          border-radius: 0.2rem;
        }
      `}</style>
    </div>
  );
};

export default EnhancedMarkdownRenderer;