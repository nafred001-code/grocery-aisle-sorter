#!/usr/bin/env node
// grocery-aisle-sorter
// Usage: node index.js <path-to-input-file>
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { loadModel, completion, unloadModel, LLAMA_3_2_1B_INST_Q4_0 } from '@qvac/sdk';

const inputPath = process.argv[2] || "groceries.example.txt";

if (!existsSync(inputPath)) {
  console.error('Usage: node index.js <path-to-input-file>');
  process.exit(1);
}

const input = readFileSync(inputPath, 'utf-8').trim();

console.log('Loading language model on-device...');
const modelId = await loadModel({ modelSrc: LLAMA_3_2_1B_INST_Q4_0 });

const prompt = `Group this grocery list by typical supermarket section (Produce, Bakery, Pantry, Dairy, Frozen, Household) in the order a shopper would walk them. Output markdown headings with bullet items.

${input}`;

const { tokenStream } = completion({ modelId, history: [{ role: 'user', content: prompt }], stream: true });

let output = '';
console.log('\nResult:\n');
for await (const token of tokenStream) {
  process.stdout.write(token);
  output += token;
}
console.log();

writeFileSync("sorted-list.md", output.trim() + '\n');
console.log('\nSaved to sorted-list.md');

await unloadModel({ modelId });
