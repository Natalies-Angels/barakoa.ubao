import { authSim } from './authSim.js';
import { officeRouter } from './officeRouter.js';

export default function App() {
  const profile = authSim(); // your authSim works as before

  return `
    <div class="h-screen flex">
      ${officeRouter(profile)} <!-- renders sidebar + main content based on profile -->
    </div>
  `;
}
