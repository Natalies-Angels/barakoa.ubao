// app/authSim.js

// Map passcodes to profiles
const PASSCODE_MAP = {
  'nanga123': { role: 'nanga', name: 'Nanga Office' },
  'MB0N!': { role: 'curator', name: 'Curator Dashboard' }
};

/**
 * Simulate authentication
 * @param {string} passcode
 * @returns profile object {role, name} or null if invalid
 */
export function authSim(passcode) {
  return PASSCODE_MAP[passcode] || null;
}
