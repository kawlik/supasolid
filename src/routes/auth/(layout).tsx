// @solid
import { onCleanup } from "solid-js";
import { Outlet, useNavigate } from "solid-start";

// @root
import { supabase } from "~/supabase/app";

export default function () {
	// component logic
	const navigate = useNavigate();
	const register = supabase.auth.onAuthStateChange((_, session) => {
		if (!!session?.user) navigate("/home/ledgers");
	});

	onCleanup(() => register.data.subscription.unsubscribe());

	// component layout
	return (
		<main class="grid h-full w-full place-content-center">
			<Outlet />
		</main>
	);
}
