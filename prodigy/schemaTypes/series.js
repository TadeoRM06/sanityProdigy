export default {
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    },
    {
      name: 'value',
      title: 'Value',
      type: 'string',
      validation: (Rule) => Rule.required().error('Value is required.'),
    },
  ],
}
