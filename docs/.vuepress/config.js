module.exports = {
    base: '/',
    title: 'PDFFiddler',
    description: 'Manipulate PDF document using powerful scripting language',
    themeConfig: {
      logo: '/pdffiddle128.png',
      nav: [
        { text: 'API Documentation', link: '/api/'},
        { text: 'Back to playground', link: 'http://www.pdffiddler.com'},
        { text: 'Github', link: 'https://github.com/pdffiddler/pdffiddler'}
      ],
      plugins: ['@vuepress/back-to-top'],
      sidebar: {
          '/api/': [
            '',
            '/api/docs/BasePoint','/api/docs/Page','/api/docs/String','/api/docs/Document','/api/docs/Image','/api/docs/Font','/api/docs/Number','/api/docs/TextAlign','/api/docs/Permission','/api/docs/EncryptionAlgorithm','/api/docs/List','/api/docs/Boolean','/api/docs/LineCap','/api/docs/DashPattern','/api/docs/TSA','/api/docs/Align','/api/docs/GState','/api/docs/Position','/api/docs/Color','/api/docs/OnChange','/api/docs/OnMatch','/api/docs/Text','/api/docs/Point','/api/docs/Layer','/api/docs/Date','/api/docs/LineJoin','/api/docs/TextMarkupType','/api/docs/SignatureHandler','/api/docs/Signature','/api/docs/Global','/api/docs/PaperSize','/api/docs/Region','/api/docs/Map','/api/docs/BarcodeType','/api/docs/HumanReadableLocation','/api/docs/ChronoUnit'
          ],
          '/guide/': [
            '',
            'demo',
            'coordinates',
            'cookbook'
          ]
      }
    }
  }