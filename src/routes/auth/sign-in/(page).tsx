// @solid
import { createSignal } from "solid-js";

// @view
import { AlertFailure } from "./(page).alert-failure";
import { AlertSuccess } from "./(page).alert-success";

export default function () {
	// component logic
	let alertFailure!: HTMLDialogElement;
	let alertSuccess!: HTMLDialogElement;

	// form:store
	const [email, setEmail] = createSignal("");

	// form:submit
	const submitForm = (e: SubmitEvent) => {
		e.preventDefault();
	};

	// component layout
	return (
		<main class="grid h-full w-full place-content-center">
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
					onSubmit={submitForm}
				>
					<input
						class="input input-bordered rounded-full"
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Your e-mail address"
						type="email"
					/>
					<input
						class="btn btn-primary rounded-full normal-case text-base-100"
						type="submit"
						value="Sign In"
					/>
				</form>
			</div>
		</main>
	);
}
