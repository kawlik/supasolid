// @solid
import { onCleanup } from "solid-js";
import { Outlet, useNavigate } from "solid-start";

// @root
import { supabase } from "~/supabase/app";

// @view
import { Footer } from "./(layout).footer";
import { Header } from "./(layout).header";

export default function () {
	// component logic
	const navigate = useNavigate();
	const register = supabase.auth.onAuthStateChange((_, session) => {
		if (!session?.user) navigate("/auth/sign-in");
	});

	onCleanup(() => register.data.subscription.unsubscribe());

	// component layout
	return (
		<main class="flex h-full w-full flex-col justify-between">
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
}
