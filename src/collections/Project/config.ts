import { FixedToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig, slugField } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'projectImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField({ position: 'main' }),
    {
      name: 'summary',
      type: 'textarea',
    },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
      }),
    },
    {
      name: 'techStack',
      type: 'array',
      fields: [
        {
          name: 'technology',
          type: 'text',
        },
      ],
    },
    {
      name: 'links',
      type: 'group',
      fields: [
        {
          name: 'repo',
          type: 'text',
          required: true,
        },
        {
          name: 'live',
          type: 'text',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'In Progress', value: 'in progress' },
        { label: 'Live', value: 'live' },
        { label: 'Shelved', value: 'shelved' },
        { label: 'Archived', value: 'archived' },
      ],
      defaultValue: 'in progress',
    },
    {
      name: 'projectType',
      type: 'select',
      options: [
        { label: 'Portfolio', value: 'portfolio' },
        { label: 'Learning', value: 'learning' },
      ],
      defaultValue: 'portfolio',
    },
  ],
}
