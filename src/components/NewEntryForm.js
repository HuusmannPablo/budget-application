import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm({ addEntry }) {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');

	return (
		<Form unstackable>
			<Form.Group>
				<Form.Input
					placeholder="New thing"
					icon="tags"
					width={12}
					label="Description"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
				<Form.Input
					placeholder="100.00"
					icon="dollar"
					iconPosition='left'
					width={4}
					label="Value"
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
			</Form.Group>
			<ButtonSaveOrCancel 
				addEntry={addEntry} 
				description={description}
				value={value}
			/>
		</Form>  )
}

export default NewEntryForm