<script lang="ts">
  import { HighlightSwitcher, type StyleName } from '$lib'
  import { theme } from '@jill64/svelte-dark-theme'
  import { HighlightSvelte } from 'svelte-highlight'
  import * as styles from 'svelte-highlight/styles/index'
  import { code } from './code'

  let name: StyleName = $state(theme.isDark ? 'githubDark' : 'github')
</script>

<select bind:value={name}>
  {#each Object.keys(styles) as value (value)}
    <option {value}>{value}</option>
  {/each}
</select>

<HighlightSwitcher {name} />
<HighlightSvelte {code} />

<style>
  select {
    font-size: large;
    background: inherit;
    color: inherit;
    border: none;
  }
</style>
