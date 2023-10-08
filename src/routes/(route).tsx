// @solid
import { redirect } from "solid-start";

// @root
import { supabase } from "~/supabase/app";

export async function GET() {
	// component logic
	const user = await supabase.auth.getUser();

	if (!!user) {
		return redirect("/home/ledgers");
	} else {
		return redirect("/auth/sign-in");
	}
}
