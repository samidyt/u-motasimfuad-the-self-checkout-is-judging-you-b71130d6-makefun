[![make.fun](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![Rank](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/samidyt/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6-makefun/rank.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)
[![Reward](https://make.fun/badge/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6/samidyt/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6-makefun/reward.svg)](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6)

# The Self-Checkout Is Judging You

A [make.fun](https://make.fun/bounty/u-motasimfuad-the-self-checkout-is-judging-you-b71130d6) entry: one funny line in the voice of a smug self-checkout machine, written to `/output/entry.txt`.

## The line

> Twelve yoghurts and nothing else. No spoon, no shame, no plan. Please place your dignity in the bagging area.

## How it works

`main.ts` (Node 22+) writes a single 109-character line to `/output/entry.txt` — no network, no secrets, no dependencies. It refuses to write anything outside the 1–200 character gate, failing loudly instead of producing an invalid entry.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
