import { OPS_MODULES } from './visualCurator.data.js';
import { CULTURE_MODULES } from '../../departments/culture/culture.data.js';
import { TECH_MODULES } from '../../departments/tech/tech.data.js';
import { CREATIVE_MODULES } from '../../departments/creative/creative.data.js';

const DEPARTMENT_MAP = {
  ops: OPS_MODULES,
  culture: CULTURE_MODULES,
  tech: TECH_MODULES,
  creative: CREATIVE_MODULES
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
      window.showHome = function () {
  const content = document.getElementById('content');
  content.innerHTML = renderHome(profile);
};


    content.innerHTML = `


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
    const mod = modules?.find(m => m.id === moduleId);

    if (!mod) {
      content.innerHTML = `<p class="text-bone">Module not found</p>`;
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

    /* ---- CULTURE ---- */
    if (deptId === 'culture' && moduleId === 'experience') {
      import('../../departments/culture/cultureRender.js').then(
        ({ renderCulture, initCultureHandlers }) => {
          initCultureHandlers();
          content.innerHTML = renderCulture();
        }
      );
      return;
    }

    /* ---- CREATIVE (light placeholder) ---- */
    if (deptId === 'creative') {
      import('../../departments/creative/creativeRender.js').then(
        ({ renderCreativeModule }) => {
          content.innerHTML = renderCreativeModule(mod);
        }
      );
      return;
    }

    /* ---- TECH / OTHER OPS ---- */
    content.innerHTML = renderGenericModule(deptId, mod);
  };

  /* ===============================
     INITIAL VIEW
  =============================== */
 return renderHome(profile);

}

/* ===============================
   GENERIC MODULE RENDERER
   (ONLY for modules with sections)
=============================== */
function renderGenericModule(deptId, mod) {

  if (!Array.isArray(mod.sections)) {
    return `
      <p class="text-bone">
        This module is still being shaped.
      </p>
    `;
  }


  return `
    <div class="max-w-6xl mx-auto space-y-16 text-bone">

      <button
        onclick="showDepartment('${deptId}')"
        class="font-script uppercase tracking-widest text-xs text-ochre hover:underline"
      >
        ← Back to ${deptId}
      </button>

      <div>
        <h1 class="font-headline text-3xl mb-4 text-ember">
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
                    <h3 class="text-xl text-ember mb-3">
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
function renderHome(profile) {
  return `
    <main id="content" class="flex-1 p-10 bg-baseblack text-bone">

      <h1 class="font-headline text-4xl mb-2">
        Welcome, creative human!
      </h1>


      <p class="text-bone/70 mb-12 mt-12 max-w-xl ">
        Here’s what Barakoa needs from you right now.
      </p>



      ${renderTaskCard()}

      <!-- contextual links -->
      <div class="mt-10 flex flex-wrap gap-6 text-sm text-bone/70">
  <button
    onclick="goToVisualWBS()"
    class="hover:underline"
  >
    → View full work breakdown (WBS)
  </button>

  <button
    onclick="goToCreativeBrief()"
    class="hover:underline"
  >
    → Read the creative brief
  </button>
</div>


      ${renderTaskModal()}
    </main>
  `;
}
function renderTaskCard() {
  return `
    <div
      onclick="openTaskModal()"
      class="cursor-pointer border border-white/20 bg-white/5 p-6 shadow-xl hover:shadow-2xl transition max-w-4xl"
    >
      <h2 class="font-headline text-2xl text-ember mb-2">
        Provide Existing Photos for Website & Social Media
      </h2>

      <p class="text-bone/70 text-sm max-w-2xl">
        We need a curated selection of photographs you already have.
        No new shoot required.
      </p>

      <p class="text-xs uppercase tracking-widest text-ochre mt-4">
        Click to view task details
      </p>
    </div>
  `;
}
window.openTaskModal = function () {
  document.getElementById('task-modal').classList.remove('hidden');
  document.getElementById('task-modal').classList.add('flex');
};

window.closeTaskModal = function () {
  document.getElementById('task-modal').classList.add('hidden');
  document.getElementById('task-modal').classList.remove('flex');
};

function renderTaskModal() {
  return `
    <div
      id="task-modal"
      class="fixed inset-0 bg-black/70 hidden items-center justify-center z-50"
    >
      <div class="bg-baseblack border border-white/20 p-8 max-w-xl w-full shadow-2xl">

        <h3 class="font-headline text-2xl text-ember mb-4">
          Photo Assets – Immediate Task
        </h3>

        <div class="space-y-3 text-sm text-bone/80">
          <p>
            Please share <strong>10–15 of your existing photographs</strong>
            that reflect barakoa's visual language.
          </p>

          <p>
            No new shoot required. These will be used for
            website, social media, and partner decks.
          </p>

          <p>
            Here's a moodboard that captures the language and style we're aiming for: <a class="text-ochre hover:underline"
              href="https://pin.it/4Y5Yl2Jlp"
              target="_blank">moodboard</a>
          </p>
        </div>

        <button
          onclick="closeTaskModal()"
          class="mt-8 text-xs uppercase tracking-widest text-bone/60 hover:underline"
        >
          Close
        </button>

      </div>
    </div>
  `;
}
window.goToCreativeBrief = function () {
  const content = document.getElementById('content');

  import('./visualCuratorRender.js').then(
    ({ renderVisualCurator, initVisualFrameworkHandlers }) => {
      initVisualFrameworkHandlers();
      content.innerHTML = renderVisualCurator();

      // wait one tick, then open the narrative framework
      setTimeout(() => {
        window.showVisualFramework('creative-brief');
      }, 0);
    }
  );
};

window.goToVisualWBS = function () {
  const content = document.getElementById('content');

  import('./visualCuratorRender.js').then(
    ({ renderVisualCurator, initVisualFrameworkHandlers }) => {
      initVisualFrameworkHandlers();
      content.innerHTML = renderVisualCurator();

      setTimeout(() => {
        window.showVisualFramework('visual-wbs');
      }, 0);
    }
  );
};

