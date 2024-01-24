import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances() {
  return (
        <Segment textAlign="center">
			<Grid columns={2} divided>
			<Grid.Row>
				<Grid.Column>
					<DisplayBalance 
						size="tiny" 
						color="green" 
						align="left" 
						title="Incoming:" 
						value="1,045.50" 
					/>
				</Grid.Column>
				<Grid.Column>
					<DisplayBalance 
						size="tiny" 
						color="red" 
						align="left" 
						title="Expenses:" 
						value="623.50" 
					/>
				</Grid.Column>
			</Grid.Row>
			</Grid>
		</Segment>  )
}

export default DisplayBalances