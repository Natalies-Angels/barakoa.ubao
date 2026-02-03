import { OPS_MODULES } from './visualCurator.data.js';
import { CULTURE_MODULES } from '../../departments/culture/culture.data.js';
import { TECH_MODULES } from '../../departments/tech/tech.data.js';
import { CREATIVE_MODULES } from '../../departments/creative/creative.data.js';

const DEPARTMENT_MAP = {
  ops: OPS_MODULES,
  culture: CULTURE_MODULES,
  tech: TECH_MODULES,
  creative: CREATIVE_MODULES,
};

export function ContentArea(profile) {

  /* ===============================
     DEPARTMENT LANDING
  =============================== */
  window.showDepartment = function (deptId) {
    const content = document.getElementById('content');
    const modules = DEPARTMENT_MAP[deptId];

    if (!modules) {
      content.innerHTML = `<p class="text-bone">Department not found</p>`;
      return;
    }

    content.innerHTML = `
      <h1 class="font-headline text-4xl text-ochre mb-10">
        ${deptId.toUpperCase()} Department
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${modules.map(m => `
          <div
            class="border border-white/15 bg-white/5 p-6 shadow-xl cursor-pointer hover:shadow-2xl transition"
            onclick="showModule('${deptId}','${m.id}')"
          >
            <h2 class="font-headline text-xl text-ember mb-3">
              ${m.title}
            </h2>
            <p class="text-bone/70 text-sm leading-relaxed">
              ${m.preview}
            </p>
          </div>
        `).join('')}
      </div>
    `;
  };

  /* ===============================
     MODULE VIEW
  =============================== */
  window.showModule = function (deptId, moduleId) {
    const content = document.getElementById('content');
    const modules = DEPARTMENT_MAP[deptId];
    const mod = modules.find(m => m.id === moduleId);

    if (!mod) {
      content.innerHTML = `<p class="text-bone">Module not found</p>`;
      return;
    }

    /* ---- OPS (custom) ---- */
    if (deptId === 'ops' && moduleId === 'strategy') {
      import('./opsRender.js').then(
        ({ renderOpsStrategy, initOpsFrameworkHandlers }) => {
          initOpsFrameworkHandlers();
          content.innerHTML = renderOpsStrategy();
        }
      );
      return;
    }

    /* ---- OPS: Visual Curator ---- */
    if (deptId === 'ops' && moduleId === 'visual-curator') {
      import('./visualCuratorRender.js').then(
        ({ renderVisualCurator, initVisualFrameworkHandlers }) => {
          initVisualFrameworkHandlers();
          content.innerHTML = renderVisualCurator();
        }
      );
      return;
    }

    /* ---- DEFAULT RENDER (Culture / Tech / Creative) ---- */
    content.innerHTML = renderGenericModule(deptId, mod);
  };

  /* ===============================
     INITIAL VIEW
  =============================== */
  return `
    <main id="content" class="flex-1 p-10 bg-sand text-baseblack">
      <h1 class="font-headline text-4xl text-bone mb-4">
        Welcome, ${profile.name}
      </h1>
      <p class="text-bone/70">
        Select a department from the sidebar to begin.
      </p>
    </main>
  `;
}

/* ===============================
   GENERIC MODULE RENDERER
=============================== */
function renderGenericModule(deptId, mod) {
  return `
    <div class="max-w-6xl mx-auto space-y-16 text-bone">

      <button
        onclick="showDepartment('${deptId}')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to ${deptId}
      </button>

      <div>
        <h1 class="font-headline text-5xl mb-4 text-ember">
          ${mod.title}
        </h1>
        <p class="text-bone/70 max-w-2xl leading-relaxed">
          ${mod.preview}
        </p>
      </div>

      ${mod.sections.map(sec => {

        /* ---- CARDS ---- */
        if (sec.type === 'cards') {
          return `
            <section>
              <h2 class="font-headline text-3xl mb-6 text-ochre">
                ${sec.heading}
              </h2>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${sec.items.map(card => `
                  <div class="border border-white/15 bg-white/5 p-6 shadow-xl">
                    <h3 class="font-headline text-xl text-ember mb-3">
                      ${card.title}
                    </h3>
                    ${card.description
                      ? `<p class="text-bone/70 mb-4 text-sm">${card.description}</p>`
                      : ''
                    }
                    <ul class="list-disc ml-5 space-y-2 font-script text-bone/70">
                      ${card.points.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </section>
          `;
        }

        /* ---- TABLE ---- */
        if (sec.type === 'table') {
          return `
            <section>
              <h2 class="font-headline text-3xl mb-6 text-ochre">
                ${sec.heading}
              </h2>

              <div class="overflow-x-auto border border-white/15 bg-white/5 shadow-xl">
                <table class="w-full text-sm border-collapse">
                  <thead>
                    <tr>
                      ${sec.columns.map(c => `
                        <th class="p-4 text-left font-script uppercase tracking-widest text-xs text-ember">
                          ${c}
                        </th>
                      `).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${sec.rows.map(r => `
                      <tr class="border-t border-white/10">
                        ${r.map(cell => `<td class="p-4">${cell}</td>`).join('')}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </section>
          `;
        }

        return '';
      }).join('')}
    </div>
  `;
}
