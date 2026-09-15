import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula, monokai, monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export type CodeBlockFields = {
  language: string
  code: string
  filename?: string
}

export function CodeBlock(props: CodeBlockFields) {
  if (!props.code) return null

  return (
    <article className="bg-off-white-dark border border-green-900/10 rounded-xl overflow-hidden shadow-sm ring-1 ring-black/5">
      <header className="w-full flex items-center justify-between gap-3 border-b border-green-900/10 bg-black/5 px-3 py-2">
        {props.filename ? (
          <span className="truncate text-sm font-semibold tracking-wide text-slate-700">
            {props.filename}
          </span>
        ) : (
          <span className="flex-1" aria-hidden="true" />
        )}
        <span
          className="shrink-0 rounded-md border border-green-900/30 bg-white/60 px-2.5 py-1 text-[10px]
        font-medium uppercase tracking-[0.12em] text-slate-700 font-mono"
        >
          {props.language}
        </span>
      </header>
      <div className="overflow-hidden bg-inherit">
        <SyntaxHighlighter
          language={props.language}
          style={monokaiSublime}
          customStyle={{
            margin: 0,
            padding: '1rem',
            // background: 'transparent',
            borderRadius: 0,
            fontSize: '0.875rem',
            lineHeight: '1.6',
          }}
          codeTagProps={{ className: 'font-mono' }}
        >
          {props.code}
        </SyntaxHighlighter>
      </div>
    </article>
  )
}
