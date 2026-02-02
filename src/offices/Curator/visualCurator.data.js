// OPS_MODULES: Visual Curator content
export const OPS_MODULES = [
  {
    id: 'visual-curator',
    title: 'Visual Curator & Talent Scout',
    preview: 'How Barakoa is seen, remembered, and positioned — with care, intimacy, and restraint.',

    context: [
      {
        id: 'role',
        heading: 'Your Role',
        list:
          [
            'Shape how Barakoa is seen, remembered, and positioned underground, by directing visual curation, and collaborating with other visual creatives.',
            'Scout aligned indie talent from the underground scene for performance and creative roles.'
          ]
      },
      {
        id: 'not',
        heading: 'What You Are Not',
        list: [
          'Just a photographer or videographer. Your work takes a more directive, curatorial approach.',
          'A content farm'
        ]
      },
      {
        id: 'principle',
        heading: 'Working Principle',
        body:
          'You work with intimacy, not spectacle.'
      }
    ],

    implementation: {
      heading: "here's how we implement visual curation",
      description:
        'Tasks and timing for pre, during, and post-Barakoa visual curation.',

      frameworks: [
        {
          id: 'creative-brief',
          title: 'Creative Brief',
          preview: 'High-level guidance for visual curation and talent scouting.',
          type: 'narrative',
          pillars: [
            {
              id: 'brief',
              title: 'Creative Brief',
              description: 'Visual direction and talent focus for this edition.',
              points: [
                'Maintain underground, intimate tone',
                'Highlight process over spectacle',
                'Document with consent and care',
                'Scout aligned indie performers and creatives'
              ]
            }
          ]
        },
        {
          id: 'visual-wbs',
          title: 'Work Breakdown Structure (Filtered)',
          preview: 'Detailed tasks and timing for visual curation and talent scouting.',
          type: 'detailed-table',
          columns: ['date', 'Task', 'how you come in'],
          rows: [
            // PRE-BARAKOA
            { phase: 'PRE-BARAKOA', timing: '(W1)', task: 'Provide assets for Barakoa\'s digital identity', owner: 'Contributor' },
            { phase: 'PRE-BARAKOA', timing: '(W2)', task: 'Identify and recommend aligned indie talent', owner: 'Lead' },
            { phase: 'PRE-BARAKOA', timing: '(W3)', task: 'Align visual tone with inquiry', owner: 'Contributor' },

            // PRE-GATHERINGS & TEASERS
            { phase: 'TEASERS & BTS CONTENT CREATION', timing: '(W4)', task: 'Creation of digital media content to build anticipation', owner: 'Lead' },
            { phase: 'TEASERS & BTS CONTENT CREATION', timing: '(W5)', task: 'Documentation of any behind-the-scenes moments', owner: 'Lead' },
            { phase: 'TEASERS & BTS CONTENT CREATION', timing: '(W6)', task: 'Spread the word about Barakoa', owner: 'Support' },

            // PERI-BARAKOA
            { phase: 'PERI-BARAKOA (MAY & JUNE)', timing: 'Event Day', task: 'Oversee visual documentation and editing', owner: 'Lead' },
            { phase: 'PERI-BARAKOA (MAY & JUNE)', timing: 'Event Day', task: 'Collaborate with other Visual Curators for shared documentation', owner: 'Contributor' },
            { phase: 'PERI-BARAKOA (MAY & JUNE)', timing: 'Event Day', task: 'Hold intimacy & consent in visuals', owner: 'Lead' },

            // POST-BARAKOA
            { phase: 'POST-BARAKOA', timing: 'Week 3–4', task: 'Deliver visual archive', owner: 'Lead' },
            { phase: 'POST-BARAKOA', timing: 'Week 5–6', task: 'Provide advocacy-ready imagery', owner: 'Contributor' }
          ]
        }
      ]
    }
  }
];
