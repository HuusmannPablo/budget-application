import { Container, Grid, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';

function App() {
  return (
    <Container>
		<MainHeader title={"Budget"} />
		<Statistic size="small">
			<Statistic.Label>
				Your Balance:
			</Statistic.Label>
			<Statistic.Value>
				2,550.53
			</Statistic.Value>
		</Statistic>
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
		</Segment>

		<MainHeader title={"History"} type={"h3"} />
		<Segment color="red">
			<Grid columns={3} textAlign="right">
			<Grid.Row>
				<Grid.Column width={10} textAlign='left'>
					Something
				</Grid.Column>
				<Grid.Column width={3} textAlign='right'>
					$10.00
				</Grid.Column>
				<Grid.Column width={3}>
				<Icon name="edit" bordered />
				<Icon name="trash" bordered />
				</Grid.Column>
			</Grid.Row>
			</Grid>
		</Segment>
		<Segment color="green">
			<Grid columns={3} textAlign="right">
			<Grid.Row>
				<Grid.Column width={10} textAlign='left'>
					Something else
				</Grid.Column>
				<Grid.Column width={3} textAlign='right'>
					$100.00
				</Grid.Column>
				<Grid.Column width={3}>
				<Icon name="edit" bordered />
				<Icon name="trash" bordered />
				</Grid.Column>
			</Grid.Row>
			</Grid>
		</Segment>
		<Segment color="red">
			<Grid columns={3} textAlign="right">
			<Grid.Row>
				<Grid.Column width={10} textAlign='left'>
					Something
				</Grid.Column>
				<Grid.Column width={3} textAlign='right'>
					$20.00
				</Grid.Column>
				<Grid.Column width={3}>
				<Icon name="edit" bordered />
				<Icon name="trash" bordered />
				</Grid.Column>
			</Grid.Row>
			</Grid>
		</Segment>
		<MainHeader title={"Add new transaction"} type={"h3"} />
		<NewEntryForm />		
    </Container>
  );
}

export default App;
