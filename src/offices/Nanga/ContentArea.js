// ContentArea.js
// Renders modules for each department
// Department modules come from Barakoa data in departments/*/*.data.js

import { OPS_MODULES } from '../../departments/ops/ops.data.js';
import { CULTURE_MODULES } from '../../departments/culture/culture.data.js';
import { TECH_MODULES } from '../../departments/tech/tech.data.js';
import { CREATIVE_MODULES } from '../../departments/creative/creative.data.js';

// Map department id to its data
const DEPARTMENT_MAP = {
  ops: OPS_MODULES,
  culture: CULTURE_MODULES,
  tech: TECH_MODULES,
  creative: CREATIVE_MODULES,
};

export function ContentArea(profile) {
  // This function will be global so buttons in AsideNav can call it
  window.showDepartment = function(deptId) {
    const content = document.getElementById('content');
    const modules = DEPARTMENT_MAP[deptId];

    if (!modules) {
      content.innerHTML = `<p>Department not found</p>`;
      return;
    }

    // Render department landing page with clickable module cards
    let html = `
      <h1 class="text-2xl font-bold mb-4">${deptId.toUpperCase()} Department</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    `;

    modules.forEach((mod) => {
      html += `
        <div class="border rounded p-4 bg-gray-50 cursor-pointer hover:shadow-lg transition" 
             onclick="showModule('${deptId}', '${mod.id}')">
          <h2 class="font-semibold mb-2">${mod.title}</h2>
          <p class="text-gray-600">${mod.preview}</p>
        </div>
      `;
    });

    html += `</div>`;
    content.innerHTML = html;
  };

  // Function to show module details
window.showModule = function(deptId, moduleId) {
  const content = document.getElementById('content');
  const modules = DEPARTMENT_MAP[deptId];
  const mod = modules.find((m) => m.id === moduleId);

  if (!mod) {
    content.innerHTML = `<p>Module not found</p>`;
    return;
  }
if (deptId === 'culture') {
  import('../../departments/culture/cultureRender.js').then(
    ({ renderCulture, initCultureHandlers }) => {

      initCultureHandlers();
      content.innerHTML = renderCulture();
    }
  );
  return;
}


  // If this is OPS Strategy, use styled render function
if (deptId === 'ops' && moduleId === 'strategy') {
  import('../../departments/ops/opsRender.js').then(
    ({ renderOpsStrategy, initOpsFrameworkHandlers }) => {

      initOpsFrameworkHandlers(); 
      content.innerHTML = renderOpsStrategy();
    }
  );
  return;
}
if (deptId === 'ops' && moduleId === 'budget') {
  import('../../departments/ops/opsRender.js').then(
    ({ renderBudget }) => {
      content.innerHTML = renderBudget(mod);
    }
  );
  return;
}



  // Default: render plain sections
  let html = `
    <button onclick="showDepartment('${deptId}')" class="mb-4 text-blue-500 hover:underline">&larr; Back to ${deptId} Department</button>
    <h1 class="text-2xl font-bold mb-4">${mod.title}</h1>
  `;

mod.sections.forEach((sec) => {

  if (sec.type === 'cards') {
    html += `
      <h2 class="text-xl font-semibold mt-6 mb-4">${sec.heading}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${sec.items.map(card => `
          <div class="border rounded p-4 bg-gray-50">
            <h3 class="font-semibold mb-2">${card.title}</h3>
            ${card.description ? `<p class="text-sm mb-2">${card.description}</p>` : ''}
            <ul class="list-disc ml-5 text-sm">
              ${card.points.map(p => `<li>${p}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
    `;
    return;
  }

  if (sec.type === 'table') {
    html += `
      <h2 class="text-xl font-semibold mt-6 mb-4">${sec.heading}</h2>
      <table class="w-full border bg-white">
        <thead>
          <tr>
            ${sec.columns.map(c => `<th class="p-3 border text-left">${c}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${sec.rows.map(r => `
            <tr>
              ${r.map(cell => `<td class="p-3 border">${cell}</td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    return;
  }

  if (sec.type === 'checklist') {
    html += `
      <h2 class="text-xl font-semibold mt-6 mb-4">${sec.heading}</h2>
      <ul class="space-y-2">
        ${sec.items.map(i => `
          <li>
            <input type="checkbox" ${i.checked ? 'checked' : ''} disabled />
            <span class="ml-2">${i.label}</span>
          </li>
        `).join('')}
      </ul>
    `;
    return;
  }

});

  content.innerHTML = html;
};
window.showBudgetSheet = function(sheetId) {
  import('../../departments/ops/opsRender.js').then(
    ({ renderTable }) => {

      const module = OPS_MODULES.find(m => m.id === 'budget');
      const sheet = module.workbook.sheets.find(s => s.id === sheetId);

      if (!sheet) return;

      document.getElementById('budget-canvas').innerHTML =
        renderTable(sheet);
    }
  );
};


  // Initial content when dashboard loads
  return `
    <main id="content" class="flex-1 p-8">
      <h1 class="text-2xl font-bold mb-2">Welcome, ${profile.name}</h1>
      <p class="text-gray-600">
        Select a department from the sidebar to view its overview.
      </p>
    </main>
  `;
}
