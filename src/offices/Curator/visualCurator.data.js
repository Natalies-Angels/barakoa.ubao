// OPS_MODULES: Visual Curator content
export const OPS_MODULES = [
  {
    id: 'visual-curator',
    title: 'Visual Curator & Talent Scout',
    preview: 'How Barakoa is seen, remembered, and positioned — with care, intimacy, and restraint.',

    context: [
      
    ],

    implementation: {
    //   heading: "here's how we implement visual curation",
    //   description:
    //     'Tasks and timing for pre, during, and post-Barakoa visual curation.',

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
              points: 
                ['Role: Visual Curator & Talent Scout',
                 'Objective: To anchor Barakoa within the underground creative ecosystem through intentional talent discovery, evocative visual storytelling, and community-driven amplification.',
'1. Talent Scouting & Scene Connection',
'The Mission: Identifying the "unseen" talent—indie artists and performers who mirror Barakoa’s raw, sacred approach to art.',
'Action: Act as a bridge between disparate creative circles, ensuring the lineup reflects a diverse, high-caliber underground ethos.',
'2. Visual Narrative & Content Contribution',
'The Mission: Providing a distinct aesthetic lens for Barakoa’s digital and physical presence.',
'Action: Contributing high-quality, credited photography for web, social media, and promotional posters that align with the brand\'s specific "sacred/energy" visual identity.',
'3. Documentation & Preservation',
'The Mission: Capturing the ephemeral nature of the gathering.',
'Action: Providing full-spectrum creative documentation—capturing the "before, during, and after" through photography and video to ensure the event lives on as a digital artifact.',
'4. Ecosystem Positioning (Amplification)',
'The Mission: Growing the tribe through organic, high-trust advocacy.',
'Action: Leveraging the Wagwan Eld community and personal circles to position Barakoa as the premier space for authentic creative gathering.'

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
