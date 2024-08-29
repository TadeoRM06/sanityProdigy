export default {
  name: 'athletes',
  title: 'Athletes',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Name Player:',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'imagen',
      title: 'Image Player',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'linkInstagram',
      title: 'Instagram Link',
      type: 'url',
      validation: (Rule: any) => Rule.uri({
        scheme: ['http', 'https'],
        allowRelative: false,
      }).required()
    }
  ]
};
