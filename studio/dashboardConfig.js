export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e37e1e22dc1112cd4ba4617',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-vunh9p9f',
                  apiId: '2497e1a7-d1ea-4e47-9d4a-4e7f81ef5909'
                },
                {
                  buildHookId: '5e37e1e26caab65d9b357fcd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jueb343h',
                  apiId: 'f37cd914-ba55-4241-a26e-d7827aac833b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chrisAtDm/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jueb343h.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
