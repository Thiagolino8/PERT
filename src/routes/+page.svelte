<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import type { SuperValidated } from 'sveltekit-superforms';
	import * as Card from '../lib/components/ui/card';
	import { PERT_schema, type PERT_schema_Type } from './schema';
	import FormUnwrapper from './FormUnwrapper.svelte';
	import { writable } from 'svelte/store';

	export let form: SuperValidated<PERT_schema_Type> & { result?: number };

	const superForm = writable<typeof form['data']>(form?.data)
</script>

<Card.Root>
	<Card.Header>
		<Tooltip.Root>
			<Tooltip.Trigger>
				<h1 class="text-3xl font-bold">PERT</h1>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Program Evaluation and Review Technique</p>
			</Tooltip.Content>
		</Tooltip.Root>
		<p>Use this technique to estimate the time needed to complete a task or project</p>
	</Card.Header>
	<Card.Content>
		<Form.Root method="POST" {form} schema={PERT_schema} let:config>
			<FormUnwrapper form={config.form.form} {superForm}>
			<Form.Field {config} name="optimistic">
				<Form.Item>
					<Form.Label>Optimistic</Form.Label>
					<Form.Input min="0" type="number" />
					<Form.Description>Time required if everything goes optimally</Form.Description>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="most_likely">
				<Form.Item>
					<Form.Label>Most Likely</Form.Label>
					<Form.Input min={$superForm?.optimistic ?? 0} type="number" />
					<Form.Description
						>You have a 50% chance of completing the task at this time
					</Form.Description>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Field {config} name="pessimistic">
				<Form.Item>
					<Form.Label>Pessimistic</Form.Label>
					<Form.Input min={$superForm?.most_likely ?? 0} type="number" />
					<Form.Description>
						Includes everything that could go wrong when performing this task
					</Form.Description>
					<Form.Validation />
				</Form.Item>
			</Form.Field>
			<Form.Button>Submit</Form.Button>
		</FormUnwrapper>
		</Form.Root>
	</Card.Content>
	{#if form?.result}
		<Card.Footer>
			<p class="text-lg font-semibold">
				The expected time to complete the task is {form.result.toFixed(2)} days
			</p>
		</Card.Footer>
	{/if}
</Card.Root>
