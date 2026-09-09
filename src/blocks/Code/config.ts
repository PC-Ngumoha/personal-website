import { Block } from 'payload'

const PROGRAMMING_LANGUAGES = [
  'typescript',
  'javascript',
  'python',
  'php',
  'c++',
  'rust',
  'go',
  'html',
  'css',
  'bash',
  'java',
]

export const CodeBlock: Block = {
  slug: 'code',
  labels: {
    singular: 'Code Block',
    plural: 'Code Blocks',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'filename',
          type: 'text',
        },
        {
          name: 'language',
          type: 'select',
          defaultValue: 'typescript',
          options: PROGRAMMING_LANGUAGES,
        },
      ],
    },
    {
      name: 'code',
      type: 'code',
      label: false,
      required: true,
    },
  ],
}
