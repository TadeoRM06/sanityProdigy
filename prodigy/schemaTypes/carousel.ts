export default {
    name: 'carousel',
    title: 'Carrusel',
    type: 'document',
    fields: [
        {
          name: 'nombre',
          title: 'Phrase:',
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
  