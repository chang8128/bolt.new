import { atom } from 'nanostores';

export const kPersonality = 'bolt_personality';

function init() {
  if (!import.meta.env.SSR) {
    return localStorage.getItem(kPersonality) ?? '';
  }

  return '';
}

export const personalityStore = atom<string>(init());

export function setPersonality(prompt: string) {
  personalityStore.set(prompt);

  if (!import.meta.env.SSR) {
    localStorage.setItem(kPersonality, prompt);
  }
}
