import { createClient } from '@supabase/supabase-js'

// Reemplaza con tus credenciales reales de Supabase (Project Settings > API)
const SUPABASE_URL = 'https://pslyvnxrqiatrvydayva.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_5sgUYnJlv7EaKYZVWq_iJg_zib6UrnZ'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)