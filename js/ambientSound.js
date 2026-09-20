/**
 * AMBIANCE SYSTEM DISABLED
 * Completely silences and cleans up any Web Audio contexts and storage tokens.
 */

try {
  localStorage.removeItem('indianArt_ambiance_enabled');
} catch (e) {}

export function setupAmbientSound() {
  // Disabled entirely per user request.
}
