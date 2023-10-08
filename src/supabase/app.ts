// @node
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
	"https://onuoccssiizygvavskal.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9udW9jY3NzaWl6eWd2YXZza2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MDM0MDcsImV4cCI6MjAxMTM3OTQwN30.gG_sbi9SRBDD8Tek9AJf9dIkwnh4lsFfmPU-elgcnY8",
);
