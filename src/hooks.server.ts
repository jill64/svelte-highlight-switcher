import { init } from '@jill64/sentry-sveltekit-cloudflare/server'
import { onRender } from '@jill64/svelte-dark-theme'

const { onHandle, onError } = init(
  'https://0d99253dac311b3ba6c8f2634e1cfc6c@o4505814639312896.ingest.sentry.io/4506336898383872'
)

export const handle = onHandle(onRender())
export const handleError = onError()
