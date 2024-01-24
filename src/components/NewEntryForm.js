import React from 'react'
import { Form } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

function NewEntryForm() {
  return (
        <Form unstackable>
			<Form.Group>
			<Form.Input
				placeholder="New thing"
				icon="tags"
				width={12}
				label="Description"
			/>
			<Form.Input
				placeholder="100.00"
				icon="dollar"
				iconPosition='left'
				width={4}
				label="Value"
			/>
			</Form.Group>
			<ButtonSaveOrCancel />
		</Form>  )
}

export default NewEntryForm