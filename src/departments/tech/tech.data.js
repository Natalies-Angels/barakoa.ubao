export const TECH_MODULES = [
  {
    id: 'infrastructure',
    title: 'Infrastructure & Systems',
    preview: 'Core technical systems enabling Barakoa across planning, live execution, and post-festival continuity.',

    sections: [
      {
        type: 'cards',
        heading: 'System Domains',
        items: [
          {
            title: 'Digital Infrastructure',
            description: 'Foundational systems supporting communication, coordination, and data.',
            points: [
              'Website & internal dashboard',
              'Data storage & backups',
              'Access control & permissions'
            ]
          },
          {
            title: 'Live Systems',
            description: 'On-site technical systems during the festival.',
            points: [
              'Sound & signal routing',
              'Power redundancy',
              'Live documentation systems'
            ]
          },
          {
            title: 'Post-Gig Systems',
            description: 'Continuity after the event.',
            points: [
              'Archival & media storage',
              'Reporting dashboards',
              'Feedback collection'
            ]
          }
        ]
      },

      {
        type: 'table',
        heading: 'Core Tools & Platforms',
        columns: ['System', 'Purpose', 'Owner', 'Status'],
        rows: [
          ['Internal Dashboard', 'Ops + Culture visibility', 'Tech', 'Active'],
          ['Ticketing System', 'Audience access', 'Ops', 'Configured'],
          ['Media Archive', 'Post-gig documentation', 'Tech', 'Planned']
        ]
      },

    ]
  },

  {
    id: 'risk-resilience',
    title: 'Risk & Resilience',
    preview: 'Identifying, mitigating, and responding to technical risks across all phases.',

    sections: [
      {
        type: 'table',
        heading: 'Technical Risk Register',
        columns: ['Risk', 'Impact', 'Mitigation', 'Owner'],
        rows: [
          ['Power failure', 'High', 'Redundant generators', 'Tech'],
          ['Network outage', 'Medium', 'Offline-first systems', 'Tech'],
          ['Data loss', 'High', 'Automated backups', 'Tech']
        ]
      }
    ]
  }
];
