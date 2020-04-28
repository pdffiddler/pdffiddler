module.exports = {
  base: '/',
  title: 'PDFFiddler',
  description: 'Manipulate PDF document using powerful scripting language',
  head: [
    ['link', {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/icons/apple-touch-icon.png"
    }],
    ['link', {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/icons/favicon-32x32.png"
    }],
    ['link', {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/icons/favicon-16x16.png"
    }],
    ['link', {
      rel: "manifest",
      href: "/icons/site.webmanifest"
    }],
    ['link', {
      rel: "shortcut icon",
      href: "/icons/favicon.ico"
    }]
  ],
  plugins: {
    '@vuepress/back-to-top': {},
    '@vuepress/google-analytics': {'ga': 'UA-155922590-2'},
    'sitemap': {
      hostname: 'https://docs.pdffiddler.com'
    }
  },
  themeConfig: {
    logo: '/pdffiddlerBlue.png',
    nav: [{
        text: 'API Documentation',
        link: '/api/'
      },
      {
        text: 'Back to playground',
        link: 'https://playground.pdffiddler.com'
      },
      {
        text: 'Github',
        link: 'https://github.com/pdffiddler/pdffiddler'
      }
    ],
    sidebar: {
      '/guide/': [
        '',
        'demo',
        'coordinates',
        'cookbook'
      ],
      '/api/': [{
        title: 'API Documentation',
        path: '/api',
        collapsable: false,
        children: [
          '/api/docs/Global','/api/docs/Document','/api/docs/Page','/api/docs/OnChange','/api/docs/OnMatch','/api/docs/Region','/api/docs/Point','/api/docs/Image','/api/docs/Font','/api/docs/Text','/api/docs/GState','/api/docs/BarcodeStyle','/api/docs/PaperSize','/api/docs/EmbeddedFile','/api/docs/Permission','/api/docs/RSplit','/api/docs/Layer','/api/docs/Signature','/api/docs/SignatureHandler','/api/docs/TSA','/api/docs/TextField','/api/docs/CheckBox','/api/docs/RadioButton','/api/docs/ListBox','/api/docs/ComboBox','/api/docs/RadioOption','/api/docs/SelectOption','/api/docs/FieldStyle','/api/docs/Button','/api/docs/SignatureField','/api/docs/Action','/api/docs/Border','/api/docs/DashPattern','/api/docs/List','/api/docs/Map','/api/docs/Number','/api/docs/String','/api/docs/Boolean','/api/docs/Color','/api/docs/Date','/api/docs/MarkupBuilderHelper','/api/docs/ColorSpace','/api/docs/CompilanceLevel','/api/docs/BarcodeType','/api/docs/TextMarkupType','/api/docs/BasePoint','/api/docs/Align','/api/docs/TextAlign','/api/docs/ChronoUnit','/api/docs/Position','/api/docs/HumanReadableLocation','/api/docs/LineCap','/api/docs/LineJoin','/api/docs/EncryptionAlgorithm','/api/docs/CheckboxRadioStyle','/api/docs/HighlightMode','/api/docs/BorderStyle','/api/docs/SubmitFormat'
        ]
      }]
    }
  }
}