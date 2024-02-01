import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpense] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [entryId, setEntryId] = useState();
	const [incomeTotal, setIncomeTotal] = useState(0);
	const [expenseTotal, setExpenseTotal] = useState(0);
	const [total, setTotal] = useState(0);
	const entries = useSelector((state) => state.entries);

	function addEntry() {
		const result = entries.concat({
			id: entries.length + 1,
			description,
			value,
			isExpense
		});
		// setEntries(result);
		resetEntry();
	}

	function editEntry(id) {
		console.log(id);
		if(id){
			const index = entries.findIndex((entry) => entry.id === id);
			const entry = entries[index];
			setEntryId(id);
			setDescription(entry.description);
			setValue(entry.value);
			setIsExpense(entry.isExpense);
			setIsOpen(true);
		}
	}

	function resetEntry() {
		setDescription('');
		setValue('');
		setIsExpense(true);
	}

	useEffect(() => {
		if(!isOpen && entryId){
			const index = entries.findIndex((entry) => entry.id === entryId);
			const newEntries = [...entries];
			newEntries[index].description = description;
			newEntries[index].value = value;
			newEntries[index].isExpense = isExpense;
			// setEntries(newEntries);
			resetEntry();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	useEffect(() => {
		let totalIncomes = 0;
		let totalExpense = 0;
		entries.map((entry) => {
			if(entry.isExpense){
				return (totalExpense += Number(entry.value));
			}
			return (totalIncomes += Number(entry.value));
		})
		setTotal(totalIncomes - totalExpense);
		setExpenseTotal(totalExpense);
		setIncomeTotal(totalIncomes);
	}, [entries]);

	return (
		<Container>

			<MainHeader title={"Budget"} />
			<DisplayBalance 
				size="small" 
				color="black" 
				align="left" 
				title="Your Balance:" 
				value={`$${total}`} 
			/>
			<DisplayBalances 
				expenseTotal={expenseTotal}
				incomeTotal={incomeTotal}
			/>

			<MainHeader title={"History"} type={"h3"} />
			
			<EntryLines 
				entries={entries} 
				editEntry={editEntry}
			/>

			<MainHeader title={"Add new transaction"} type={"h3"} />
			<NewEntryForm 
				addEntry={addEntry}
				description={description}
				setDescription={setDescription}
				value={value}
				setValue={setValue}
				isExpense={isExpense}
				setIsExpense={setIsExpense}
			/>		
			<ModalEdit 
				isOpen={isOpen} 
				setIsOpen={setIsOpen}
				addEntry={addEntry}
				description={description}
				setDescription={setDescription}
				value={value}
				setValue={setValue}
				isExpense={isExpense}
				setIsExpense={setIsExpense}/>
		</Container>
	);
}

export default App;
