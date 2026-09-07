import { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'siteName',
      type: 'text',
    },
    {
      name: 'tagline',
      type: 'text',
    },
    {
      name: 'socials',
      type: 'group',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
        },
        {
          name: 'github',
          type: 'text',
        },
        {
          name: 'twitter',
          type: 'text',
        },
        {
          name: 'email',
          type: 'text',
        },
      ],
    },
    {
      name: 'navbar',
      label: {
        singular: 'Navigation',
        plural: 'Navigations',
      },
      type: 'group',
      fields: [
        {
          name: 'logo',
          type: 'text',
        },
        {
          name: 'navLinks',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'uri',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'homePage',
      type: 'group',
      fields: [
        {
          name: 'currentlyExploring',
          type: 'text',
        },
        {
          name: 'mainTagline',
          type: 'text',
        },
        {
          name: 'introduction',
          type: 'textarea',
        },
        {
          name: 'cta',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
            },
            {
              name: 'uri',
              type: 'text',
            },
          ],
          maxRows: 2,
        },
      ],
    },
    {
      name: 'blogPage',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'text',
        },
      ],
    },
    {
      name: 'projectPage',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'subtitle',
          type: 'text',
        },
      ],
    },
  ],
}
