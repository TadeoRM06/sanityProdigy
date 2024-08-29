export default {
  name: 'seller',
  title: 'Best Seller',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'imagen',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{type: 'product'}],
    },
    {
      name: 'sortOrder',
      title: 'Sort Order',
      type: 'number',
      description: 'Order in which this item appears in the list.',
      validation: (Rule: any) => Rule.required().integer().min(1),
    },
  ],
}