// app/officeRouter.js
import { NangaOffice } from '../offices/Nanga/NangaOffice.js';
import { CuratorOffice } from '../offices/Curator/CuratorOffice.js';

/**
 * Return the office view for the given profile
 * @param {object} profile - {role, name}
 */
export function officeRouter(profile) {
  if (!profile) return `<p class="p-4 text-red-500">Unauthorized — invalid passcode</p>`;

  if (profile.role === 'nanga') return NangaOffice(profile);
  if (profile.role === 'curator') return CuratorOffice(profile);

  return `<p class="p-4 text-red-500">Unauthorized — unknown role</p>`;
}
