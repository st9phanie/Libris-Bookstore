import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.SUPABASE_URL!,
    process.env.DB_SECRET_KEY!
  )
}