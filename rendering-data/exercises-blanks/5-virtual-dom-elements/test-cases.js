'use strict';

const testCases = [
  [
    {
      name: 'input',
      attributes: {
        value: 'hi',
        placeholder: 'bye',
      },
    },
  ],
  [
    {
      name: 'input',
      attributes: {
        value: 'welcome to DOM!',
        placeholder: 'enter some text',
      },
    },
  ],
  [
    {
      name: 'details',
      attributes: {
        open: '',
      },
      children: [
        'hi',
        {
          name: 'summary',
          children: ['bye'],
        },
      ],
    },
  ],
  [
    {
      name: 'details',
      children: [
        'hi',
        {
          name: 'summary',
          children: ['bye'],
        },
      ],
    },
  ],
  [
    {
      name: 'a',
      attributes: {
        target: '_blank',
        href: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png',
        class: 'thumbnail-container',
      },
      children: [
        {
          name: 'img',
          attributes: {
            src: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png',
            alt: 'the color black',
            class: 'thumbnail to-the-right',
          },
        },
      ],
    },
  ],
];
