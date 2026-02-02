import { OPS_MODULES } from './ops.data.js';

export function renderOpsStrategy() {

  const module = OPS_MODULES.find(m => m.id === 'strategy');
  if (!module) return `<p class="text-ember">Strategy module not found</p>`;

  const { title, preview, context, implementation } = module;

  /* ======================
     CONTEXT BLOCKS
  ====================== */
  const contextHTML = context.map(section => {
    const body = section.body
      ? `<p class="text-bone/80 leading-relaxed">${section.body}</p>`
      : '';

    const list = section.list
      ? `<ul class="list-disc ml-5 space-y-2 text-bone/70 font-script">
          ${section.list.map(item => `<li>${item}</li>`).join('')}
        </ul>`
      : '';

    return `
      <div class="border border-white/10 bg-white/5 p-8 shadow-2xl text-baseblack">
        <h2 class="font-headline text-2xl text-ochre mb-4">
          ${section.heading}
        </h2>
        ${title}
        ${body}
        ${list}
      </div>
    `;
  }).join('');

  /* ======================
     FRAMEWORK CARDS
  ====================== */
  const frameworksHTML = implementation.frameworks.map(card => `
    <div
      class="border border-white/15 bg-baseblack/80 p-8 shadow-xl hover:shadow-2xl transition cursor-pointer group"
      onclick="showOpsFramework('${card.id}')"
    >
      <h3 class="font-headline text-xl text-ember mb-3 group-hover:underline">
        ${card.title}
      </h3>
      <p class="text-bone/70 text-sm leading-relaxed">
        ${card.preview}
      </p>
    </div>
  `).join('');

  return `
    <div class="max-w-6xl mx-auto space-y-16 text-bone">

      <div>
        <button
          onclick="showDepartment('ops')"
          class="font-script uppercase tracking-widest text-xs text-ochre hover:underline mb-6"
        >
          ← Return to Operations
        </button>

        <h1 class="font-headline text-5xl mb-4">${title}</h1>
        <p class="text-bone/70 max-w-2xl leading-relaxed">${preview}</p>
      </div>

      <section class="grid grid-cols-1 md:grid-cols-2 gap-10">
        ${contextHTML}
      </section>

      <section>
        <h2 class="font-headline text-4xl mb-4 text-ember">
          ${implementation.heading}
        </h2>
        <p class="text-bone/70 mb-10 max-w-3xl">
          ${implementation.description}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          ${frameworksHTML}
        </div>
      </section>

    </div>
  `;
}

/* ======================
   FRAMEWORK HANDLERS
====================== */
export function initOpsFrameworkHandlers() {
  window.showOpsFramework = function (frameworkId) {
    const module = OPS_MODULES.find(m => m.id === 'strategy');
    const framework = module.implementation.frameworks.find(
      f => f.id === frameworkId
    );

    if (!framework) return;

    let html = '';

    switch (framework.type) {
      case 'narrative':
        html = renderMasterPlan(framework);
        break;
      case 'phase-table':
        html = renderProcessMap(framework);
        break;
      case 'detailed-table':
        html = renderWBS(framework);
        break;
    }

    document.getElementById('content').innerHTML = html;
  };
}

/* ======================
   MASTER PLAN
====================== */
function renderMasterPlan(framework) {
  return `
    <div class="max-w-5xl mx-auto space-y-16 text-bone">

      <button
        onclick="showModule('ops','strategy')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to Strategy
      </button>

      <h1 class="font-headline text-5xl text-ember">
        ${framework.title}
      </h1>

      ${framework.pillars.map(pillar => `
        <div class="border border-white/10 bg-white/5 p-8 shadow-2xl">
          <h2 class="font-headline text-2xl text-ochre mb-4">
            ${pillar.title}
          </h2>
          <p class="text-bone/80 mb-6 leading-relaxed">
            ${pillar.description}
          </p>

          <ul class="list-disc ml-5 space-y-2 font-script text-bone/70">
            ${pillar.points.map(p => `<li>${p}</li>`).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `;
}

/* ======================
   PROCESS MAP
====================== */
function renderProcessMap(framework) {
  const phases = ['PRE-BARAKOA', 'PERI-BARAKOA', 'POST-BARAKOA'];

  return `
    <div class="max-w-7xl mx-auto space-y-12 text-bone">

      <button
        onclick="showModule('ops','strategy')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to Strategy
      </button>

      <h1 class="font-headline text-5xl text-ember">
        ${framework.title}
      </h1>

      <p class="text-bone/70 max-w-3xl leading-relaxed">
        This map shows how Barakoa is built, held, and released — across time.
      </p>

      ${phases.map(phase => {
        const rows = framework.rows.filter(r => r.phase === phase);
        if (!rows.length) return '';

        return `
          <details class="border border-white/15 bg-white/5 shadow-xl" ${phase === 'PRE-BARAKOA' ? 'open' : ''}>
            <summary class="cursor-pointer px-8 py-6 font-headline text-2xl text-ochre flex justify-between">
              ${phase.replace('-', ' · ')}
              <span class="font-script text-xs text-bone/50">(toggle)</span>
            </summary>

            <div class="p-8 overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead class="border-b border-white/20">
                  <tr>
                    ${framework.columns.map(c => `
                      <th class="p-4 text-left font-script uppercase tracking-widest text-xs text-ember">
                        ${c}
                      </th>
                    `).join('')}
                  </tr>
                </thead>
                <tbody>
                  ${rows.map(r => `
                    <tr class="border-t border-white/10">
                      <td class="p-4">${r.phase}</td>
                      <td class="p-4">${r.stage}</td>
                      <td class="p-4">${r.what}</td>
                      <td class="p-4">${r.who}</td>
                      <td class="p-4 text-bone/70">${r.outputs}</td>
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

/* ======================
   WBS
====================== */
function renderWBS(framework) {
  const phases = ['PRE-BARAKOA', 'PERI-BARAKOA', 'POST-BARAKOA'];

  return `
    <div class="max-w-7xl mx-auto space-y-12 text-bone">

      <button
        onclick="showModule('ops','strategy')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to Strategy
      </button>

      <h1 class="font-headline text-5xl text-ember">
        ${framework.title}
      </h1>

      ${phases.map(phase => {
        const rows = framework.rows.filter(r => r.phase === phase);
        if (!rows.length) return '';

        return `
          <details class="border border-white/15 bg-white/5 shadow-xl" ${phase === 'PRE-BARAKOA' ? 'open' : ''}>
            <summary class="cursor-pointer px-8 py-6 font-headline text-2xl text-ochre">
              ${phase.replace('-', ' · ')}
            </summary>

            <div class="p-8 overflow-x-auto">
              <table class="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    ${framework.columns.map(c => `
                      <th class="p-4 text-left font-script uppercase tracking-widest text-xs text-ember">
                        ${c}
                      </th>
                    `).join('')}
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
export function renderBudget(module) {
  const { workbook } = module;
  const activeSheet = workbook.sheets[0];

  return `
    <div class="max-w-7xl mx-auto space-y-6">
      <button onclick="showDepartment('ops')" class="text-blue-500 hover:underline">
        &larr; Back to Ops
      </button>

      <h1 class="text-3xl font-bold">${module.title}</h1>

      <!-- Tabs -->
      <div class="flex space-x-3 border-b pb-2">
        ${workbook.sheets.map(s => `
          <button
            class="px-4 py-2 text-sm border rounded-t bg-gray-50 hover:bg-gray-100"
            onclick="showBudgetSheet('${s.id}')"
          >
            ${s.label}
          </button>
        `).join('')}
      </div>

      <!-- Main budget canvas -->
      <div id="budget-canvas">
        ${renderTable(activeSheet)}
      </div>
    </div>
  `;
}
export function renderTable(table) {
  return `
    <table class="w-full border-collapse bg-white border">
      <thead>
        <tr>
          ${table.columns.map(c => `
            <th class="p-3 border text-left bg-gray-100">${c}</th>
          `).join('')}
        </tr>
      </thead>
      <tbody>
        ${table.rows.map(r => `
          <tr>
            ${r.map(cell => `
              <td class="p-3 border">${cell}</td>
            `).join('')}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

