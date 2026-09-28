import type { Observation, Pattern } from './types';
const OBS='cranium_mapper_observations_v1'; const PAT='cranium_mapper_patterns_v1';
export function load<T>(key:string, fallback:T):T { try { const raw=localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; } catch { return fallback; } }
export function save(key:string,value:unknown){ localStorage.setItem(key,JSON.stringify(value)); }
export const loadObservations=()=>load<Observation[]>(OBS,[]);
export const saveObservations=(v:Observation[])=>save(OBS,v);
export const loadPatterns=()=>load<Pattern[]>(PAT,[]);
export const savePatterns=(v:Pattern[])=>save(PAT,v);
