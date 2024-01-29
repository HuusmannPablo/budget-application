import React from 'react'
import { Segment, Grid } from 'semantic-ui-react'
import DisplayBalance from './DisplayBalance'

function DisplayBalances({ incomeTotal, expenseTotal }) {
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
						value={`$${incomeTotal}`} 
					/>
				</Grid.Column>
				<Grid.Column>
					<DisplayBalance 
						size="tiny" 
						color="red" 
						align="left" 
						title="Expenses:" 
						value={`$${expenseTotal}`} 
					/>
				</Grid.Column>
			</Grid.Row>
			</Grid>
		</Segment>  )
}

export default DisplayBalances