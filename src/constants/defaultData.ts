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

console.log(DEFAULT_DATA);
