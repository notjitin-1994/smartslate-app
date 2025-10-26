import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { env } from '@/config/env'

let cachedClient: SupabaseClient | null = null

export function getSupabase(): SupabaseClient {
  if (cachedClient) return cachedClient

  const supabaseUrl = env.supabaseUrl
  const supabaseAnonKey = env.supabaseAnonKey

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Application not configured. Please contact support.')
  }

  cachedClient = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
  return cachedClient
}

/**
 * Check if Supabase client can be initialized
 */
export function canInitializeSupabase(): boolean {
  return !!(env.supabaseUrl && env.supabaseAnonKey)
}


