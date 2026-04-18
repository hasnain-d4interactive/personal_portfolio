import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="blog-content text-[var(--text-muted)]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mt-10 text-[2.9rem] font-bold text-[var(--text-strong)]">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="mt-10 text-[2.35rem] font-bold text-[var(--text-strong)]">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="mt-8 text-[1.9rem] font-bold text-[var(--text-strong)]">{children}</h3>
          ),
          p: ({ children }) => <p className="mt-5 text-base leading-8">{children}</p>,
          ul: ({ children }) => <ul className="mt-5 list-disc space-y-3 pl-6 text-base leading-8">{children}</ul>,
          ol: ({ children }) => <ol className="mt-5 list-decimal space-y-3 pl-6 text-base leading-8">{children}</ol>,
          li: ({ children }) => <li>{children}</li>,
          a: ({ href, children }) => (
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-[var(--text-strong)] underline decoration-[var(--accent)] underline-offset-4"
            >
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="mt-6 rounded-[1.5rem] border border-[var(--border-soft)] bg-[var(--surface-primary)] px-6 py-5 text-base leading-8 text-[var(--text-strong)]">
              {children}
            </blockquote>
          ),
          pre: ({ children }) => (
            <pre className="mt-6 overflow-x-auto rounded-[1.5rem] bg-[var(--button-dark)] px-5 py-4 text-sm leading-7 text-white">
              {children}
            </pre>
          ),
          code: ({ children, className }) => {
            const isBlock = Boolean(className);

            if (isBlock) {
              return <code className={className}>{children}</code>;
            }

            return (
              <code className="rounded-md bg-[var(--surface-primary)] px-2 py-1 text-[0.92em] text-[var(--text-strong)]">
                {children}
              </code>
            );
          },
          img: ({ src, alt }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src || ""}
              alt={alt || ""}
              className="mt-6 w-full rounded-[1.75rem] border border-[var(--border-soft)] bg-[var(--surface-soft)] object-cover shadow-[var(--shadow-soft)]"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
