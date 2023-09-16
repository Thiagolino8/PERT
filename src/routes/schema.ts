import { z } from 'zod';

export const PERT_schema = z.object({
	optimistic: z.coerce.number(),
	most_likely: z.coerce.number(),
	pessimistic: z.coerce.number()
});

export type PERT_schema_Type = typeof PERT_schema;