#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';

const bin = path.resolve('node_modules/esbuild/bin/esbuild');
const args = process.argv.slice(2);
const command = process.platform === 'android' ? process.execPath : bin;
const commandArgs = process.platform === 'android' ? [bin, ...args] : args;
const result = spawnSync(command, commandArgs, { stdio: 'inherit' });
if (result.error) throw result.error;
process.exit(result.status ?? 1);
