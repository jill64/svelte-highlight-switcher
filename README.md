<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-highlight-switcher

[![npm-version](https://img.shields.io/npm/v/svelte-highlight-switcher)](https://npmjs.com/package/svelte-highlight-switcher) [![npm-license](https://img.shields.io/npm/l/svelte-highlight-switcher)](https://npmjs.com/package/svelte-highlight-switcher) [![npm-download-month](https://img.shields.io/npm/dm/svelte-highlight-switcher)](https://npmjs.com/package/svelte-highlight-switcher) [![npm-min-size](https://img.shields.io/bundlephobia/min/svelte-highlight-switcher)](https://npmjs.com/package/svelte-highlight-switcher) [![ci.yml](https://github.com/jill64/svelte-highlight-switcher/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-highlight-switcher/actions/workflows/ci.yml)

📍 Safe svelte-highlight dynamic style switching

<!----- END GHOST DOCS HEADER ----->

Hides the use of `@html` and reduces the risk of XSS.

## Installation

```sh
npm i svelte-highlight-switcher
```

## Example

```svelte
<script>
  import { HighlightSwitcher } from 'svelte-highlight-switcher'

  let isDarkMode = false
</script>

<HighlightSwitcher name={isDarkMode ? 'githubDark' : 'github'} />
```

↓ This is equivalent to the following code

```svelte
<script>
  import * as styles from 'svelte-highlight/styles'

  let isDarkMode = false
</script>

<svelte:head>
  {@html isDarkMode ? styles['githubDark'] : styles['github']}
</svelte:head>
```

As long as the contents of [`svelte-highlight/styles`](https://github.com/metonym/svelte-highlight#svelte-highlight) are secure, there is no risk of XSS.
