export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f8d5d06fe9a5214d1b8fa62',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tcpy44cw',
                  apiId: '6776259a-ce09-4e2a-bd2f-0ac74f722993'
                },
                {
                  buildHookId: '5f8d5d06d58b6512a17ec738',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u52sq5t4',
                  apiId: '9711f91b-04a9-45c0-a2a8-9ce1535b9bc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stefl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u52sq5t4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
