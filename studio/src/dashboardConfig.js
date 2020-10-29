export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f9b0b6ee65b7c370c641e39',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pq7xgd43',
                  apiId: '55301ae2-0d55-4219-b9e0-d7f38a7cf4e3'
                },
                {
                  buildHookId: '5f9b0b6e07830d36ba382cc8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dceu2z6c',
                  apiId: 'fafcc667-5403-4823-a5bf-b242938f591b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonhoem/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dceu2z6c.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
