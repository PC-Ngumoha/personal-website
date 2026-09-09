import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export type CodeBlockFields = {
  language: string
  code: string
  filename?: string
}

export function CodeBlock(props: CodeBlockFields) {
  if (!props.code) return null

  return (
    <SyntaxHighlighter language={props.language} style={darcula}>
      {props.code}
    </SyntaxHighlighter>
  )
}
