export default {
  name: 'variantsInStock',
  title: 'Variants In Stock',
  type: 'object',
  fields: [
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      initialValue: '0.0"',
      validation: (Rule) => Rule.required().error('Size is required.'),
    },
    {
      name: 'hand',
      title: 'Hand',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
        ],
        layout: 'radio',
      },
      initialValue: ({parent, document}) => (document?.type === 'glove' ? 'right' : ''),
      hidden: ({parent, document}) => document?.type !== 'glove', // Conditionally hide based on type
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
      validation: (Rule) => Rule.required().error('Stock status is required.'),
    },
  ],
  preview: {
    select: {
      size: 'size',
      hand: 'hand',
      inStock: 'inStock',
    },
    prepare(selection) {
      const {size, hand, inStock} = selection
      let customTitle = ''
      if (hand === '') {
        customTitle = `${size}`
      } else {
        customTitle = `${size} - ${hand.charAt(0).toUpperCase() + hand.slice(1)} Hand`
      }
      return {
        title: customTitle,
        subtitle: inStock ? 'In Stock' : 'Out Of Stock',
      }
    },
  },
}
