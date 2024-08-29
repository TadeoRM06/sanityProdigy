export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Thumbnail is required.'),
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Glove', value: 'glove' },
          { title: 'Cleats', value: 'cleats' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Type is required.'),
    },
    {
      name: 'cleatModel',
      title: 'Cleat Model',
      type: 'string',
      hidden: ({ document }) => document?.type === 'glove',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document.type === 'cleats' && !value) {
            return 'Model Name is required for cleats'
          }
          return true
        }),
    },
    {
      name: 'position',
      title: 'Position',
      type: 'reference',
      to: [{ type: 'position' }],
      hidden: ({ document }) => document?.type === 'cleats',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document.type === 'glove' && !value) {
            return 'Position is required for gloves'
          }
          return true
        }),
    },
    {
      name: 'series',
      title: 'Series',
      type: 'reference',
      to: [{ type: 'series' }],
      hidden: ({ document }) => document?.type === 'cleats',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (context.document.type === 'glove' && !value) {
            return 'Series is required for gloves'
          }
          return true
        }),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'availableVariants',
      title: 'Available Variants',
      type: 'array',
      of: [{ type: 'variantsInStock' }],
      validation: (Rule) => Rule.required().min(1).error('At least one variant must be added.'),
    },
  ],
  preview: {
    select: {
      title: 'series.title',
      subtitle: 'position.title',
      type: 'type',
      cleatModel: 'cleatModel',
      name: 'name',
    },
    prepare(selection) {
      const { title, subtitle, type, cleatModel, name } = selection

      let customTitle = ''
      if (name && name != ' ') {
        customTitle = name;
      } else {
        if (type === 'glove') {
          customTitle = `${title} - ${subtitle}`
        } else if (type === 'cleats') {
          customTitle = `${cleatModel} - Cleats`
        }
      }
      return {
        title: customTitle,
        subtitle: type ? `${type.charAt(0).toUpperCase() + type.slice(1)}` : 'Product',
      }
    },
  },
}
