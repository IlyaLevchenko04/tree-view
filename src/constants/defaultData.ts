export const DEFAULT_DATA = {
  key1: 'value1',
  key2: [1, 2, { value: 1 }],
  key3: {
    nestedKey1: 'nestedValue1',
    nestedKey2: [1, 2, 3],
    someKey: 34,
  },
  key4: {
    nestedKey3: {
      deeplyNestedKey: 'deeplyNestedValue',
      anotherObject: {
        value1: 'someValue1',
        value2: 34,
        value3: {
          subValue3: 3,
        },
      },
    },
    nestedKey4: false,
  },
};

export const NEW_DEFAULT_DATA = [
    {
      title: 'Applications',
      data: [
        {
          title: 'Calendar',
          value: 'Google calendar'
        },
        {
          title: 'Chrome',
          value: 'Browser'
        },
        {
          title: 'Dog',
          value: 'Gav'
        }
      ]
    },
    {
      title: 'Documents',
      data: [
        {
          title: 'React',
          data:[ {
            title: 'Next',
            data: [{
              title: 'HTML/CSS',
              value: 'I think its beetter'
            }]
          },
          {
            title: 'Astro',
            data: [{
              title: 'Parrot',
              value: 'Caramba'
            }]
          }
        ]
        },
        {
          title: 'Cat',
          value: 'Meow'
        }
      ]
    },
   {
    title: 'Really small info',
    value: 'smaaal'
   } 
  ]


console.log(DEFAULT_DATA);
