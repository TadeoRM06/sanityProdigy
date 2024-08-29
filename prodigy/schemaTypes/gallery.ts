export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
          name: 'nombre',
          title: 'Name',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        },
        
        {
          name: 'imagen',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true
          },
          validation: (Rule: any) => Rule.required()
        },
    
      ]
  };
  