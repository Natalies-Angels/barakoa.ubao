// src/index.js
import { authSim } from './app/authSim.js';
import { officeRouter } from './app/officeRouter.js';

const root = document.getElementById('root');

function renderLoginForm() {
  root.innerHTML = `
    <div class="flex items-center justify-center h-screen bg-neutral-100">
      <div class="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 class="text-2xl font-bold mb-6 text-center text-baseblack">Barakoa MVP Login</h1>

        <form id="loginForm" class="space-y-4">
          <div>
            <label for="passcode" class="block text-sm font-medium text-gray-700">Passcode</label>
            <input
              type="password"
              id="passcode"
              placeholder="Enter your passcode"
              class="mt-1 block w-full p-2 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>

        <p id="loginError" class="mt-4 text-red-500 text-sm hidden">Invalid passcode</p>
      </div>
    </div>
  `;

  const form = document.getElementById('loginForm');
  const errorEl = document.getElementById('loginError');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const passcode = document.getElementById('passcode').value.trim();
    const profile = authSim(passcode);

    if (profile) {
      // Render the correct office dashboard
      root.innerHTML = officeRouter(profile);
    } else {
      // Show error
      errorEl.classList.remove('hidden');
    }
  });
}

// Initial render
renderLoginForm();
