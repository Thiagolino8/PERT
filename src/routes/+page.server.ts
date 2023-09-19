import { superValidate } from 'sveltekit-superforms/server';
import { PERT_schema } from './schema';
import { fail } from '@sveltejs/kit';

export const load = () => {
	return {
		form: superValidate(PERT_schema)
	};
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, PERT_schema);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const result = (form.data.optimistic + (4 * form.data.most_likely) + form.data.pessimistic) / 6;
		return {
			form,
			result
		};
	}
}
