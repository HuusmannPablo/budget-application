import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
		<MainHeader title={"Budget"} />
		<DisplayBalance 
			size="small" 
			color="black" 
			align="left" 
			title="Your Balance:" 
			value="2550.53" 
		/>
		<DisplayBalances />

		<MainHeader title={"History"} type={"h3"} />
		<EntryLine
			isExpense={true}		
			description={"Something"}
			value={"10.00"} 
		/>
		<EntryLine
			isExpense={false}		
			description={"Something else"}
			value={"100.00"} 
		/>
		<EntryLine
			isExpense={true}		
			description={"Something"}
			value={"10.00"} 
		/>
		<MainHeader title={"Add new transaction"} type={"h3"} />
		<NewEntryForm />		
    </Container>
  );
}

export default App;
