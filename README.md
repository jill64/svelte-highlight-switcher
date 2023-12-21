<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-highlight-switcher


<!----- BEGIN GHOST DOCS BADGES ----->
<a href="https://npmjs.com/package/svelte-highlight-switcher"><img src="https://img.shields.io/npm/v/svelte-highlight-switcher" alt="npm-version" /></a> <a href="https://npmjs.com/package/svelte-highlight-switcher"><img src="https://img.shields.io/npm/l/svelte-highlight-switcher" alt="npm-license" /></a> <a href="https://npmjs.com/package/svelte-highlight-switcher"><img src="https://img.shields.io/npm/dm/svelte-highlight-switcher" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/svelte-highlight-switcher"><img src="https://img.shields.io/bundlephobia/min/svelte-highlight-switcher" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-highlight-switcher/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-highlight-switcher/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a> <a href="https://svelte-highlight-switcher.jill64.dev"><img src="https://img.shields.io/website?up_message=working&down_message=down&url=https%3A%2F%2Fsvelte-highlight-switcher.jill64.dev" alt="website" /></a>
<!----- END GHOST DOCS BADGES ----->


📍 Safe svelte-highlight dynamic style switching

## [Demo](https://svelte-highlight-switcher.jill64.dev)

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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
