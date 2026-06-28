import fs from "node:fs";
import yaml from "js-yaml";
const files = fs.readdirSync("prompts").filter(f=>f.endsWith(".yaml")).sort();
for (const f of files) {
  const y = yaml.load(fs.readFileSync("prompts/"+f,"utf8"));
  const u = (y.database_models||[]).find(m=>m.name==="User");
  const id = String(y.prompt_id).padStart(2,"0");
  if (!u) { console.log(`${id} NO-USER -> ${f}`); continue; }
  const fields = u.fields||[];
  const miss = ["email","passwordHash"].filter(x=>!fields.includes(x));
  if (miss.length) console.log(`${id} User missing [${miss.join(",")}] has[${fields.join(",")}]`);
}
