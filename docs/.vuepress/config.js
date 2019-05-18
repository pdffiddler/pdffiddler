module.exports = {
    base: '/pdffiddler/',
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
            '/api/docs/BaseScript','/api/docs/Document','/api/docs/Page','/api/docs/OnChange','/api/docs/OnMatch','/api/docs/Region','/api/docs/Point','/api/docs/Image','/api/docs/Font','/api/docs/Text','/api/docs/Date','/api/docs/PaperSize','/api/docs/Color','/api/docs/BarcodeType','/api/docs/TextMarkupType','/api/docs/BasePoint','/api/docs/ChronoUnit','/api/docs/Position','/api/docs/HumanReadableLocation','/api/docs/List','/api/docs/Map','/api/docs/String','/api/docs/Number','/api/docs/Boolean'
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