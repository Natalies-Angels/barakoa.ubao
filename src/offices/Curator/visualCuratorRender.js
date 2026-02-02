import { OPS_MODULES } from './visualCurator.data.js';

export function renderVisualCurator() {
  const m = OPS_MODULES[0];

  return `
    <div class="max-w-6xl mx-auto space-y-16 text-bone">

      <div>
        <button onclick="showDepartment('ops')" class="font-script uppercase tracking-widest text-xs text-ochre hover:underline mb-6">
          ← Return to Operations
        </button>

        <h1 class="font-headline text-4xl mb-4 text-ember">${m.title}</h1>
        <p class="text-bone/70 max-w-2xl leading-relaxed mb-6">${m.preview}</p>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-10">
          ${m.context.map(section => {
            const body = section.body
              ? `<p class="text-bone/80 leading-relaxed">${section.body}</p>` : '';
            const list = section.list
              ? `<ul class="list-disc ml-5 space-y-2 text-bone/70 font-script">${section.list.map(li => `<li>${li}</li>`).join('')}</ul>`
              : '';
            return `
              <div class="border border-white/10 bg-white/5 p-8 shadow-2xl">
                <h2 class=" font-headline text-xl text-ochre mb-4">${section.heading}</h2>
                ${body}${list}
              </div>
            `;
          }).join('')}
        </section>
      </div>

      <!-- IMPLEMENTATION FRAMEWORKS -->
      <section>
        <h2 class="font-headline text-4xl mb-4 text-ember">${m.implementation.heading}</h2>
        <p class="text-bone/70 mb-10 max-w-3xl">${m.implementation.description}</p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
          ${m.implementation.frameworks.map(fw => `
            <div
              class="border border-white/15 bg-baseblack/80 p-8 shadow-xl hover:shadow-2xl transition cursor-pointer group"
              onclick="showVisualFramework('${fw.id}')"
            >
              <h3 class="font-headline text-xl text-ember mb-3 group-hover:underline">${fw.title}</h3>
              ${fw.preview ? `<p class="text-bone/70 text-sm leading-relaxed">${fw.preview}</p>` : ''}
            </div>
          `).join('')}
        </div>
      </section>
    </div>
  `;
}

/* ======================
   FRAMEWORK HANDLERS
====================== */
export function initVisualFrameworkHandlers() {
  window.showVisualFramework = function (frameworkId) {
    const module = OPS_MODULES[0];
    const framework = module.implementation.frameworks.find(f => f.id === frameworkId);
    if (!framework) return;

    let html = '';
    switch (framework.type) {
      case 'narrative':
        html = renderCreativeBrief(framework);
        break;
      case 'detailed-table':
        html = renderVisualWBS(framework);
        break;
    }

    document.getElementById('content').innerHTML = html;
  };
}

function renderCreativeBrief(fw) {
  return `
    <div class="max-w-5xl mx-auto space-y-16 text-bone">
      <button onclick="showModule('ops','visual-curator')" class="font-script uppercase tracking-widest text-xs text-ochre hover:underline">
        ← Back to Visual Curator
      </button>
      <h1 class="font-headline text-5xl text-ember">${fw.title}</h1>

      ${fw.pillars.map(p => `
        <div class="border border-white/10 bg-white/5 p-8 shadow-2xl">
          <h2 class="font-headline text-2xl text-ochre mb-4">${p.title}</h2>
          <p class="text-bone/80 mb-6 leading-relaxed">${p.description}</p>
          <ul class="list-disc ml-5 space-y-2 font-script text-bone/70">
            ${p.points.map(pt => `<li>${pt}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

function renderVisualWBS(fw) {
  const phases = [...new Set(fw.rows.map(r => r.phase))];

  return `
    <div class="max-w-7xl mx-auto space-y-12 text-bone">
      <button onclick="showModule('ops','visual-curator')" class="font-script uppercase tracking-widest text-xs text-ochre hover:underline">
        ← Back to Visual Curator
      </button>
      <h1 class="font-headline text-5xl text-ember">${fw.title}</h1>

      ${phases.map(phase => {
        const rows = fw.rows.filter(r => r.phase === phase);
        return `
          <details class="border border-white/15 bg-white/5 shadow-xl" ${phase === phases[0] ? 'open' : ''}>
            <summary class="cursor-pointer px-8 py-6 font-headline text-2xl text-ochre">${phase.replace('-', ' · ')}</summary>
            <div class="p-8 overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    ${fw.columns.map(c => `<th class="p-4 text-left font-script uppercase tracking-widest text-xs text-ember">${c}</th>`).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${rows.map(r => `
                    <tr class="border-t border-white/10">
                      <td class="p-4">${r.timing}</td>
                      <td class="p-4">${r.task}</td>
                      <td class="p-4 font-semibold text-ochre">${r.owner}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </details>
        `;
      }).join('')}
    </div>
  `;
}
