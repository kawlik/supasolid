// @types
import { type User } from "@supabase/supabase-js";

declare global {
	type SupabaseUser = User;
}
