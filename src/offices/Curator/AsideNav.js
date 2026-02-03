// AsideNav.js
// Sidebar navigation for Nanga Office
// Clicking a department loads its modules into ContentArea

export function AsideNav(profile) {
  return `
    <aside class="w-64 bg-bone border-r p-4 text-baseblack">
      <h2 class="text-xl font-bold mb-6">barakoa</h2>

      <nav class="space-y-2">
      <button
  onclick="showHome()"
  class="block w-full text-left p-2 hover:bg-ember rounded"
>
  home
</button>

        <button onclick="showDepartment('ops')" class="block w-full text-left p-2 hover:bg-ochre rounded">
          your role
        </button>
        <button onclick="showDepartment('culture')" class="block w-full text-left p-2 hover:bg-ember rounded">
          the barakoa experience
        </button>
        <button onclick="showDepartment('tech')" class="block w-full text-left p-2 hover:bg-ochre rounded">
          tech in barakoa
        </button>
        <button onclick="showDepartment('creative')" class="block w-full text-left p-2 hover:bg-ember rounded">
          creative direction
        </button>
      </nav>
    </aside>
  `;
}
