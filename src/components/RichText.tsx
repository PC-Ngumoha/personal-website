import { RichText as RichTextRenderer } from '@payloadcms/richtext-lexical/react'
import type { DefaultNodeTypes, SerializedBlockNode } from '@payloadcms/richtext-lexical'
import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react'
import { CodeBlock, type CodeBlockFields } from '@/blocks/Code/Component'

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<CodeBlockFields>

const converters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    code: ({ node }: { node: SerializedBlockNode<CodeBlockFields> }) => (
      <CodeBlock {...node.fields} />
    ),
  },
})

export const RichText = ({ data }: { data: any }) => (
  <RichTextRenderer data={data} converters={converters} />
)
