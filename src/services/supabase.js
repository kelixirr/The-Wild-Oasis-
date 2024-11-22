import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://byfcjfmczytmeijruwwi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5ZmNqZm1jenl0bWVpanJ1d3dpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NTE3MjUsImV4cCI6MjA0NzQyNzcyNX0.wiWL_3F2tAoaEpOuUzy6YAGwSzi3qUa2Enij2wgjN_w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
