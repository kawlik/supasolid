// @solid
import { For } from "solid-js";

export function AlertFailure(props: { ref: HTMLDialogElement }) {
	// component logic

	// component layout
	return (
		<dialog class="modal backdrop-blur" ref={props.ref}>
			<div class="modal-box flex max-w-sm flex-col gap-6">
				<img alt="Failure" src="/public/failure.svg" />
				<div>
					<h3 class="text-2xl font-bold">Failure!</h3>
					<p class="text-justify text-lg font-thin">
						Sorry, something went wrong. Make sure that none of the following
						situations occurred, and then try to sign in again.
					</p>
				</div>
				<Accordion
					name="failure-couse"
					list={[
						{
							head: "Invalid email address",
							more: "The email address may appear to be valid for your browser, but to ensure maximum security, it is also validated by our system. If the email address comes from an untrusted source, it may be rejected by the system.",
						},
						{
							head: "No internet connection",
							more: "Make sure your device has internet access. Without it, we cannot verify you and synchronize your data.",
						},
						{
							head: "Too many failed attempts",
							more: "If you make too many failed attempts, you will be temporarily disconnected from this ability. This is necessary to protect our users from malicious bots.",
						},
					]}
				/>
				<form class="mx-auto w-2/3" method="dialog">
					<input
						class="btn btn-warning w-full rounded-full normal-case text-base-100"
						type="submit"
						value="Got it!"
					/>
				</form>
			</div>
		</dialog>
	);
}

function Accordion(props: {
	name: string;
	list: {
		head: string;
		more: string;
	}[];
}) {
	// component logic

	// component layout
	return (
		<div class="join join-vertical w-full">
			<For each={props.list}>
				{(item) => (
					<div class="collapse join-item collapse-arrow border">
						<input type="radio" name={props.name} />
						<div class="collapse-title">
							<h4 class="font-semibold">{item.head}</h4>
						</div>
						<div class="collapse-content">
							<p class="text-justify">{item.more}</p>
						</div>
					</div>
				)}
			</For>
		</div>
	);
}
