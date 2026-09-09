import { FixedToolbarFeature, lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'
import { CollectionConfig, slugField } from 'payload'
import { CodeBlock } from '@/blocks/Code/config'

export const Post: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    components: {
      edit: {
        beforeDocumentControls: ['/fields/PublishButtonComponent'],
      },
    },
  },
  fields: [
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        width: '40%',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'published_at',
          label: 'Published At',
          type: 'date',
          admin: {
            readOnly: true,
          },
        },
        {
          name: 'status',
          type: 'select',
          admin: {
            readOnly: true,
          },
          options: [
            {
              label: 'Draft',
              value: 'draft',
            },
            {
              label: 'Published',
              value: 'published',
            },
          ],
          // defaultValue: 'draft',
        },
      ],
    },
    {
      name: 'theme',
      type: 'relationship',
      relationTo: 'themes',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    slugField({ position: 'main' }), // Auto-generated slug from 'title' field
    {
      name: 'body',
      type: 'richText' as const,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          FixedToolbarFeature(),
          BlocksFeature({ blocks: [CodeBlock] }),
        ],
      }),
    },
  ],
}
