// offices/Curator/CuratorOffice.js
import { AsideNav } from './AsideNav.js';
import { ContentArea } from './ContentArea.js';

export function CuratorOffice(profile) {
  return `
    <div class="flex h-screen">
      ${AsideNav(profile)}
      ${ContentArea(profile)}
    </div>
  `;
}
