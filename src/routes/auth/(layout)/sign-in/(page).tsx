// @solid
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

// @root
import { supabase } from "~/supabase/app";

// @view
import { AlertFailure } from "./(page).alert-failure";
import { AlertSuccess } from "./(page).alert-success";

export default function () {
	// component logic
	let alertFailure!: HTMLDialogElement;
	let alertSuccess!: HTMLDialogElement;

	const [formLock, setFormLock] = createSignal(false);
	const [formData, setFormData] = createStore({
		email: "",
	});

	const handleSignIn = async () => {
		setFormLock(true);

		const signIn = await supabase.auth.signInWithOtp({
			email: formData.email,
		});

		if (!!signIn.error) {
			alertFailure.showModal();
		} else {
			alertSuccess.showModal();
		}

		setFormLock(false);
	};

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		await handleSignIn();
	};

	// component layout
	return (
		<>
			<AlertFailure ref={alertFailure} />
			<AlertSuccess ref={alertSuccess} />
			<div class="flex max-w-sm flex-col flex-nowrap gap-6 overflow-y-auto p-4">
				<img alt="Welcome" src="/welcome.svg" />
				<div class="text-center">
					<h2 class="text-4xl font-bold">Hello, Stranger!</h2>
					<p class="text-lg font-thin">Why don't you introduce yourself?</p>
				</div>
				<form
					class="flex flex-col flex-nowrap items-stretch gap-2"
					onSubmit={handleSubmit}
				>
					<input
						class="input input-bordered rounded-full"
						disabled={formLock()}
						onChange={(e) => setFormData({ email: e.target.value })}
						placeholder="Your e-mail address"
						type="email"
					/>
					<input
						class="btn btn-primary rounded-full normal-case text-base-100"
						disabled={formLock()}
						type="submit"
						value="Sign In"
					/>
					<aside class="flex justify-center">
						<a class="btn btn-link btn-sm normal-case">Therms of service</a>
						<a class="btn btn-link btn-sm normal-case">Privacy policy</a>
					</aside>
				</form>
			</div>
		</>
	);
}
