import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: 'https://eu1-beloved-mayfly-38849.upstash.io',
  token:
    'AZfBASQgY2U0OGUzMmMtNmQ5ZC00NWRjLTljMmMtYzJkOTQwMTYwZmE5ZGE2ZGJmMDE2NzZjNDRiMGExN2E0YmYzZjE5ZjcwNjI=',
})
