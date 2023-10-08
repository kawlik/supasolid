// @solid
import { Outlet, useNavigate } from "solid-start";

// @root
import { supabase } from "~/supabase/app";

export default function () {
	// component hooks
	const navigate = useNavigate();

	// component logic
	supabase.auth.onAuthStateChange((_, session) => {
		if (!!session?.user) navigate("/home/ledgers");
	});

	// component layout
	return (
		<main class="grid h-full w-full place-content-center">
			<Outlet />
		</main>
	);
}
