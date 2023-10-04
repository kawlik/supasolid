export function AlertFailure(props: { ref: HTMLDialogElement }) {
	// component logic

	// component layout
	return (
		<dialog class="modal backdrop-blur" ref={props.ref}>
			<div class="modal-box">
				<h2>Failure!</h2>
				<form method="dialog">
					<input
						class="btn btn-warning rounded-full text-base-100"
						type="submit"
						value="ok"
					/>
				</form>
			</div>
		</dialog>
	);
}
