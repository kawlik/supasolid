export function AlertSuccess(props: { ref: HTMLDialogElement }) {
	// component logic

	// component layout
	return (
		<dialog class="modal backdrop-blur" ref={props.ref}>
			<div class="modal-box">
				<h2>Success!</h2>
				<form method="dialog">
					<input
						class="btn btn-success rounded-full text-base-100"
						type="submit"
						value="ok"
					/>
				</form>
			</div>
		</dialog>
	);
}
