import { createClient } from "@supabase/supabase-js";

// console.log("ALL VITE ENV:", import.meta.env);

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
// console.log(
//   "Supabase Key exists:",
//   !!import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
// );

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);

