# grocery-aisle-sorter

Sorts a jumbled grocery list into store-aisle order so you walk the store once, on-device. Built with [Tether's QVAC SDK](https://github.com/tetherto/qvac) — the model runs on-device, so nothing leaves your machine.

## What it does

Sorts a jumbled grocery list into store-aisle order so you walk the store once, on-device.

**QVAC functions used:** `loadModel` and `completion`.

![grocery-aisle-sorter demo](demo.png)

## Why I built it

I always remember the eggs after I've reached the checkout on the other side of the store.

## Requirements

- Node.js >= 22
- `@qvac/sdk` `^0.19.0` (installed automatically via `npm install`)

## Install

```bash
git clone https://github.com/nafred001-code/grocery-aisle-sorter.git
cd grocery-aisle-sorter
npm install
```

## Run

```bash
npm start
```

An example input is included: `groceries.example.txt`.

See the comments at the top of `index.js` for the exact input this app expects. On first run, QVAC downloads the model it needs once and caches it locally; every run after that is fully offline.

## SDK version used

`@qvac/sdk` `0.19.1`

## License

MIT — see [LICENSE](LICENSE).
