import type { Observation, Pattern } from './types';
const rules:[RegExp,string,string][]=[
 [/\b(decid|decided|decision|choose|chose|choice)\b/i,'Decision','decision'],
 [/\b(research|looked up|search|searched|read|compare|comparison)\b/i,'Information seeking','information'],
 [/\b(avoid|avoided|put off|procrastin|hesitat|delay)\b/i,'Avoidance / delay','behavior'],
 [/\b(anxious|anxiety|worried|worry|fear|afraid|nervous|overwhelmed)\b/i,'Uncertainty / threat response','emotion'],
 [/\b(angry|anger|irritat|frustrat|resent)\b/i,'Frustration response','emotion'],
 [/\b(happy|joy|excited|relieved|calm|grateful)\b/i,'Positive affect','emotion'],
 [/\b(agree|disagree|changed my mind|reconsider|contradict)\b/i,'Belief revision','decision']
];
export function extractObservation(text:string):Observation { const tags:string[]=[]; let category='conversation'; for(const [r,label,c] of rules) if(r.test(text)){tags.push(label);category=c;} return {id:crypto.randomUUID(),createdAt:new Date().toISOString(),source:'conversation',text,tags,confidence:.55,status:'candidate'}; }
export function derivePatterns(observations:Observation[]):Pattern[]{
 const buckets=new Map<string,Observation[]>(); for(const o of observations){for(const tag of o.tags){const a=buckets.get(tag)||[];a.push(o);buckets.set(tag,a);}}
 return [...buckets].filter(([,items])=>items.length>=2).map(([label,items])=>({id:`pattern-${label.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`,label,description:`This theme has appeared across ${items.length} observations. It is a pattern candidate, not a diagnosis.`,evidenceIds:items.map(i=>i.id),confidence:Math.min(.95,.45+items.length*.08),category:label.includes('emotion')?'emotion':label.includes('Decision')||label.includes('revision')?'decision':label.includes('Information')?'information':'behavior',status:'hypothesis'}));
}
