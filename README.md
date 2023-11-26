# 👋 SVG Gobbler

![SVG Gobbler Graphic!](./assets/local/read-me.png)

## 🚀 Where to install

This extension is available on:

- [Chrome Web store](https://chrome.google.com/webstore/detail/svg-gobbler/mpbmflcodadhgafbbakjeahpandgcbch)
- [Firefox Addon Marketplace (locked to v3)](https://addons.mozilla.org/firefox/addon/svg-gobbler/)

---

SVG Gobbler is a browser extension that finds the SVG content in your current tab and lets you
optimize, download, copy, edit, or export.

### Find SVGs

- Gathers SVGs from a tab by various placement methods like `base64` or `background src`
- Quickly find, view, organize, and refine SVGs from a page
- Handle CORs restricted SVGs from a page
- Find individual sprite SVG instances

### Organize SVGs

- Group and categorize SVGs by their primary domain or custom collection name
- Move, copy, duplicate, and optimize icons before sharing
- Save and store a set of uploaded SVGs for optimization

### Optimize SVGs

- Copy SVGs to clipboard for immediate use
- Download SVGs to your computer
- Data Conversion: Transform SVGs into minified Data URIs
- React Integration: Transform SVGs into React components with SVGR
- Optimize and minify SVGs with SVGO

---

## Local development

Before making edits you will need to build the extension locally and side load it as a developer
extension to test any changes.

### 1. Clone the repo

Clone the repo to your local machine and navigate into the root directory.

```shell
cd svg-gobbler
```

### 2. Install dependencies

SVG Gobbler uses yarn to build the necessary dependencies.

```shell
yarn
```

### 3. Start and watch a build

For development with hot reloading use Vite:

```bash
yarn dev
```

This will build to the `dist` folder. To load the extension, open the Extensions Dashboard, enable
"Developer mode", click "Load unpacked", and choose the `dist` folder.

When you make changes in src the background script and any content script will reload automatically.

### 4. Start the server

For a majority of the functionality you won't need a server. If you want to make some local fetch
calls related to Node processes in a separate terminal session cd into the `server` directory.

```bash
cd server
```

Install the necessary dependencies

```bash
yarn
```

From this directory, compile the server function to the `dist` folder.

```bash
yarn build
```

In a separate terminal session serve the function on a local server.

```bash
yarn serve
```

This will startup the server and restart it any time a change is recompiled.

---

## About

5 versions ago, this started as a pet project to improve the
[SVG Crowbar](https://github.com/nytimes/svg-crowbar) tool that is no longer being maintained by NY
Times.

### Powered by

This project benefits from some incredibly talented folks.

- [Vite](https://vitejs.dev/): Frontend tooling and build processes
- [Tailwind CSS](https://tailwindcss.com/): CSS styling around the app
- [SVGR](https://react-svgr.com/): SVG to React component transformation
- [SVGO](https://github.com/svg/svgo): SVG optimization scripts
- [Codemirror](https://codemirror.net/): Extensible code editor
- [Radix UI](https://www.radix-ui.com/): Accessible component library primitives
- [JSZip](https://stuk.github.io/jszip/): Zipping files for download
- [Mini SVG Data URI](https://github.com/tigt/mini-svg-data-uri): Minify SVG data URIs
- [React Router](https://reactrouter.com/en/main): App routing

### Open source

This extension is open source and doesn't collect any information from users. It's free, and made
available because I enjoy making useful things for the web. Please consider contributing with an
idea, bug fix, or feature request.

### Contribute

Feel free to submit a pull request if you've made an improvement of some kind. This is an open
source project and any help is very appreciated.

---

## More apps by me

I like making things. [Check out what I'm up to lately](https://rossmoody.com).
