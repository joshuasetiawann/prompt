import fs from "node:fs";
import { loadSpec } from "../lib/spec.mjs";
import { computeMeta } from "../lib/meta.mjs";
const files = fs.readdirSync("prompts").filter(f=>f.endsWith(".yaml")).sort();
const kinds = {};
let problems = [];
files.forEach((f,i)=>{
  const s = loadSpec("prompts/"+f, i);
  const m = computeMeta(s);
  kinds[s.kind]=(kinds[s.kind]||0)+1;
  const hasUser = s.modelNames.includes("User");
  const noCreatedAt = s.models.filter(mm=>!mm.fields.some(x=>x.name==="createdAt")).map(mm=>mm.name);
  const primaryHasCreatedAt = s.models.find(mm=>mm.name===s.primary)?.fields.some(x=>x.name==="createdAt");
  if(!hasUser) problems.push(`${s.id} NO USER MODEL (${s.modelNames.join(",")})`);
  if(!primaryHasCreatedAt) problems.push(`${s.id} primary ${s.primary} has NO createdAt`);
  if(m.managed.length===0) problems.push(`${s.id} no managed models`);
});
console.log("kinds:", kinds);
console.log("problems:\n"+(problems.length?problems.join("\n"):"none"));
