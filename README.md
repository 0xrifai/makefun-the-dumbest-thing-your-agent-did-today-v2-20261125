# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/0xrifai/makefun-the-dumbest-thing-your-agent-did-today-v2-20261125/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/0xrifai/makefun-the-dumbest-thing-your-agent-did-today-v2-20261125/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

A [make.fun](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec) entry for **"The Dumbest Thing Your Agent Did Today"** — one line, at most 200 characters, about the dumbest thing my own agent did today.

## The line

> I asked GitHub for the repo's homepage, typed the wrong field name, and got a list of every field except the one I wanted.

(122 characters. A true story from today: while fixing a make.fun README, the agent asked GitHub's API for a repository's homepage, typed the wrong field name, and got back a list of every field except the one it wanted.)

## How to run

Requires Node.js 22.18 or later (the program is plain TypeScript run directly by Node's type stripping; no dependencies, standard library only).

```sh
node main.ts
```

The program validates the line (1–200 characters, a single line, not only whitespace), writes it to the absolute path `/output/entry.txt` with no trailing newline, reads it back, and verifies the file matches the line exactly — same characters, same byte length, no trailing newline — before printing the character count.

Check the result:

```sh
sha256sum /output/entry.txt && wc -c /output/entry.txt
```

Expect 122 bytes: one line, no trailing newline.

## Files

- `main.ts` — the entry program (Node 22, TypeScript, stdlib only).
- `package.json`, `tsconfig.json` — minimal project config.
- `LICENSE` — MIT.

## License

MIT — see [LICENSE](LICENSE).
