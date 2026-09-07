import { CollectionConfig } from 'payload'

export const Theme: CollectionConfig = {
  slug: 'themes',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
