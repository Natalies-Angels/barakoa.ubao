// culture.data.js
export const CULTURE_MODULES = [
  {
    id: 'experience',
    title: 'The Barakoa Experience',
    preview: 'A cultural ritual, told in time — from pre-arrival to the echo after.',
    cards: [
      {
        id: 'experience-map',
        title: 'Experience Map',
        preview: 'Journey through Pre, Peri, and Post Barakoa in immersive cards and collapsibles.',
        children: [
          {
            id: 'pre',
            title: 'Before: The Quiet Arrival (Pre-Barakoa)',
            preview: 'Months before the gathering, the world begins listening and shaping itself.',
            type: 'experience-card'
          },
          {
            id: 'peri',
            title: 'During: Entering the World (Peri-Barakoa)',
            preview: 'Arrival, tuning, the main ceremony, rituals, and soft release.',
            type: 'experience-card'
          },
          {
            id: 'post',
            title: 'After: The Echo (Post-Barakoa)',
            preview: 'Reflection, memory, and continuity after the festival dissolves.',
            type: 'experience-card'
          }
        ]
      },
      {
        id: 'cultural-integrity',
        title: 'Cultural Integrity',
        preview: 'Principles and practices that protect meaning, respect, and ethical cultural expression.',
        type: 'integrity-cards'
      }
    ]
  }
];

export const EXPERIENCE_MAPS = {
  pre: {
    title: 'Before: The Quiet Arrival (Pre-Barakoa)',
    sections: [
      {
        title: 'The Quiet Arrival',
        type: 'card',
        content: [
          'Months before the gathering, the inquiry is set — Love, Fear & the Quiet.',
          'This shapes the sound, clothing, spaces, and pace.',
          'Collaborators meet slowly. Sound is tested in fragments.',
          'Clothing is imagined as feeling, not costume.',
          'The masks are defined by behavior, not appearance.',
          'Small pre-gatherings happen to sense the emotional temperature.',
          'By the time you hear about Barakoa, the world is already breathing.',
          'You don’t arrive curious. You arrive oriented.'
        ]
      }
    ]
  },

  peri: {
    title: 'During: Entering the World (Peri-Barakoa)',
    collapsibles: [
      {
        id: 'early-may',
        title: 'May: The Soft Opening',
        type: 'card',
        sections: [
          {
            heading: 'Tuning & Conversation',
            items: [
              'A small gathering of collaborators, artists, thinkers, and carefully invited guests.',
              'No performance pressure. Just tuning, conversation, and early fragments of the world.',
              'Barakoa checks its own pulse.'
            ]
          }
        ]
      },
      {
        id: 'june-19',
        title: 'June 19: Arrival Day & Invite-Only Session',
        type: 'card',
        sections: [
          {
            heading: 'Arrival Culture',
            items: [
              'Creatives arrive in Eldoret.',
              'Transport and accommodation handled with care.',
              'Time to land, breathe, and remember your body before your role.',
              'Non-participating creatives guided into rest spaces, quiet zones, or city.',
              'Everyone knows where they belong.'
            ]
          },
          {
            heading: 'Barakoa Day Session',
            items: [
              'Guests arrive into a calm, considered space.',
              'Arrival is gentle — no queues, no rush.',
              'Clear orientation.',
              'Assigned seating.',
              'A sensory reset — sound and light already holding you.',
              'Drunken Lecture: playful exploration of sound, rhythm, meaning.',
              'Beer Crafting Session: hands-on, slow, communal.',
              'Inclusive learning kits.',
              'Music as soft ambience.'
            ]
          },
          {
            heading: 'Closing the Day',
            items: [
              'Guests leave gradually; transport and accommodation supported.',
              'Gift bags for care, memory, and grounding.',
              'Team closes together with brief debrief. Rest matters.'
            ]
          }
        ]
      },
      {
        id: 'june-20',
        title: 'June 20: Full Ceremony',
        type: 'card',
        sections: [
          {
            heading: 'Morning: Building the World (up to noon)',
            items: [
              'Vendors arrive.',
              'Sound checked.',
              'Space slowly wakes up.',
              'No rushing or panic.'
            ]
          },
          {
            heading: '12:00 – 5:00 PM: The World Opens',
            items: [
              'Sound drifts and shifts.',
              'Food available gently, continuously.',
              'Support groups and panels happen quietly.',
              'Art installations live alongside people.',
              'Maskots appear and disappear.',
              'Ridiculous Comfort: water, bitings, seating, napping zones, clothing vendors, refresh stations.'
            ]
          },
          {
            heading: 'Rituals & Performances',
            items: [
              'Ritual I – Before Food (5:00 PM): 15-minute collective breath, then buffet.',
              '6:00 – 8:00 PM: The Play, theatre with care for access.',
              'Ritual II – Transition (8:00 – 8:15 PM).',
              '8:15 – 11:00 PM: Dunda, Softly — music, flash fashion, pop-ups.',
              '11:00 PM – Late: The Quiet Release — silent disco, rest spaces, accommodation.'
            ]
          }
        ]
      }
    ]
  },

  post: {
    title: 'After: The Echo (Post-Barakoa)',
    sections: [
      {
        title: 'Post-Barakoa',
        type: 'card',
        content: [
          'After Barakoa, there is space. No rush to post, explain, or package.',
          'Collaborators check in, reflections gathered gently.',
          'A Listening Book is created. Visual archives compiled.',
          'The inquiry is revisited: Did the masks soften? Did people feel choice? Did quiet survive?',
          'Relationships continue. The world dissolves, but something stays.'
        ]
      }
    ]
  }
};
