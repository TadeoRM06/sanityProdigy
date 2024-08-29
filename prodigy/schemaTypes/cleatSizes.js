export default {
  name: 'cleatsInStock',
  title: 'Cleats Size In Stock',
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
      inStock: 'inStock',
    },
    prepare(selection) {
      const {size, inStock} = selection
      return {
        title: `${size}`,
        subtitle: inStock ? 'In Stock' : 'Out Of Stock',
      }
    },
  },
}
