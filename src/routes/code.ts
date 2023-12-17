export const code = /* html */ `
<script lang="ts">
  import { HighlightSwitcher, type StyleName } from 'svelte-highlight-switcher'
  import { theme } from '@jill64/svelte-dark-theme'
  import { HighlightSvelte } from 'svelte-highlight'
  import * as styles from 'svelte-highlight/styles/index'

  let name: StyleName = $theme === 'dark' ? 'githubDark' : 'github'
</script>

<select bind:value={name}>
  {#each Object.keys(styles) as value}
    <option {value}>{value}</option>
  {/each}
</select>

<HighlightSwitcher {name} />
<HighlightSvelte code={''} />

<style>
  select {
    font-size: x-large;
    background: inherit;
    color: inherit;
    border: none;
  }
</style>
`
