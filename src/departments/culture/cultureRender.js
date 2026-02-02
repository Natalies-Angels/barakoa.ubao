import { CULTURE_MODULES, EXPERIENCE_MAPS } from './culture.data.js';

export function renderCulture() {
  const module = CULTURE_MODULES[0];

  return `
    <div class="max-w-6xl mx-auto space-y-8 text-baseblack">

      <button onclick="showDepartment('culture')" class="text-ochre hover:underline">
        &larr; Back to Culture
      </button>

      <h1 class="text-3xl font-bold text-ochre">${module.title}</h1>
      <p class="text-bone">${module.preview}</p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${module.cards.map(card => `
          <div
            class="bg-baseblack p-6 rounded-xl border border-ochre/20 hover:shadow cursor-pointer"
            onclick="showCultureCard('${card.id}')"
          >
            <h2 class="text-xl font-semibold mb-2 text-ochre">${card.title}</h2>
            <p class="text-bone">${card.preview}</p>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

export function initCultureHandlers() {
  window.showCultureCard = function(cardId) {
    const module = CULTURE_MODULES[0];
    const card = module.cards.find(c => c.id === cardId);
    if (!card) return;

    if (card.id === 'experience-map') {
      document.getElementById('content').innerHTML = renderExperienceMap(card);
      return;
    }

    if (card.id === 'cultural-integrity') {
      document.getElementById('content').innerHTML = renderCulturalIntegrity();
    }
  };

  window.showExperiencePhase = function(phaseId) {
    const phase = EXPERIENCE_MAPS[phaseId];
    if (!phase) {
      document.getElementById('content').innerHTML = `<p class="text-bone">Phase not found</p>`;
      return;
    }
    const useCollapsibles = phaseId === 'peri';
    document.getElementById('content').innerHTML =
      renderPhase(phase, useCollapsibles);
  };
}

function renderExperienceMap(card) {
  return `
    <div class="max-w-6xl mx-auto space-y-8 text-baseblack">

      <button onclick="showCultureCard('experience-map')" class="text-ochre hover:underline">
        &larr; Back to Experience Map
      </button>

      <h1 class="text-3xl font-bold text-ochre">${card.title}</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${card.children.map(c => `
          <div
            class="bg-baseblack p-6 rounded-xl border border-ochre/20 hover:shadow cursor-pointer"
            onclick="showExperiencePhase('${c.id}')"
          >
            <h2 class="text-lg font-semibold mb-2 text-ochre">${c.title}</h2>
            <p class="text-bone">${c.preview}</p>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function renderPhase(phase, useCollapsibles = false) {
  let html = `
    <div class="max-w-6xl mx-auto space-y-8 text-baseblack">
      <button onclick="showCultureCard('experience-map')" class="text-ochre hover:underline">
        &larr; Back to Experience Map
      </button>
      <h1 class="text-3xl font-bold text-ochre">${phase.title}</h1>
  `;

  if (useCollapsibles && Array.isArray(phase.collapsibles)) {
    phase.collapsibles.forEach(c => {
      html += `
        <details class="border border-ochre/20 rounded-xl p-4 bg-sand hover:shadow">
          <summary class="cursor-pointer text-lg font-semibold text-ochre">
            ${c.title}
          </summary>

          <div class="mt-4 space-y-4">
            ${c.sections.map(s => `
              <div class="bg-baseblack p-4 rounded-lg space-y-2">
                <h2 class="font-semibold text-xl text-ochre">${s.heading}</h2>

                ${Array.isArray(s.items) ? `
                  <ul class="list-disc ml-5 space-y-1 text-bone">
                    ${s.items.map(i => `<li>${i}</li>`).join('')}
                  </ul>
                ` : `
                  <p class="text-bone">${s.content || ''}</p>
                `}
              </div>
            `).join('')}
          </div>
        </details>
      `;
    });
  } else if (Array.isArray(phase.sections)) {
    phase.sections.forEach(s => {
      html += `
        <div class="bg-sand p-6 rounded-xl border border-ochre/20 space-y-2">
          <h2 class="font-semibold text-xl">${s.title}</h2>
          ${Array.isArray(s.content)
            ? s.content.map(c => `<p class="text-bone">${c}</p>`).join('')
            : `<p class="text-bone">${s.content || ''}</p>`
          }
        </div>
      `;
    });
  }

  html += `</div>`;
  return html;
}

function renderCulturalIntegrity() {
  return `
    <div class="max-w-6xl mx-auto space-y-8 text-baseblack">

      <button onclick="showDepartment('culture')" class="text-ochre hover:underline">
        &larr; Back to Culture
      </button>

      <h1 class="text-3xl font-bold">Cultural Integrity</h1>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${[
          {
            title: 'Respect & Attribution',
            points: [
              'Proper credit to cultural contributors',
              'Consent-based storytelling',
              'No extractive representation'
            ]
          },
          {
            title: 'Contextual Care',
            points: [
              'Cultural framing for audiences',
              'Artist-led narratives',
              'Avoiding spectacle without meaning'
            ]
          },
          {
            title: 'Community Accountability',
            points: [
              'Feedback loops with communities',
              'Post-event reflection',
              'Long-term relationships over one-offs'
            ]
          }
        ].map(card => `
          <div class="bg-baseblack p-6 rounded-xl border border-ochre/20">
            <h2 class="text-xl font-semibold mb-3">${card.title}</h2>
            <ul class="list-disc ml-5 space-y-1 text-bone">
              ${card.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}
