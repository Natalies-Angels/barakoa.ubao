// AsideNav.js
// Sidebar navigation for Nanga Office
// Clicking a department loads its modules into ContentArea

export function AsideNav(profile) {
  return `
    <aside class="w-64 bg-bone border-r p-4 text-baseblack">
      <h2 class="text-xl font-bold mb-6">${profile.name}</h2>

      <nav class="space-y-2">
        <button onclick="showDepartment('ops')" class="block w-full text-left p-2 hover:bg-ochre rounded">
          Ops
        </button>
        <button onclick="showDepartment('culture')" class="block w-full text-left p-2 hover:bg-ember rounded">
          Culture
        </button>
        <button onclick="showDepartment('tech')" class="block w-full text-left p-2 hover:bg-ochre rounded">
          Tech
        </button>
        <button onclick="showDepartment('creative')" class="block w-full text-left p-2 hover:bg-ember rounded">
          Creative
        </button>
      </nav>
    </aside>
  `;
}
