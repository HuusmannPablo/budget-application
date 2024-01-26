import React, { useState } from 'react'
import { Checkbox, Form, Segment } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';
import EntryForm from './EntryForm';

function NewEntryForm({ addEntry }) {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpense] = useState(true);

	return (
		<Form unstackable>
			<EntryForm 
				description={description}
				setDescription={setDescription}
				value={value}
				setValue={setValue}
				isExpense={isExpense}
				setIsExpense={setIsExpense}
			/>
			<ButtonSaveOrCancel 
				addEntry={addEntry} 
				description={description}
				value={value}
				isExpense={isExpense}
			/>
		</Form>  )
}

export default NewEntryForm