import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit';

import './App.css';

function App() {
	const [entries, setEntries] = useState(initialEntries);
	const [description, setDescription] = useState('');
	const [value, setValue] = useState('');
	const [isExpense, setIsExpense] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [entryId, setEntryId] = useState();
	const [incomeTotal, setIncomeTotal] = useState(0);
	const [expenseTotal, setExpenseTotal] = useState(0);
	const [total, setTotal] = useState(0);

	function addEntry() {
		const result = entries.concat({
			id: entries.length + 1,
			description,
			value,
			isExpense
		});
		setEntries(result);
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

	function deleteEntry(id) {
		const result = entries.filter((entry) => entry.id !== id);
		setEntries(result);
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
			setEntries(newEntries);
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
				deleteEntry={deleteEntry}
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

var initialEntries = [
	{
		id: 1,
		description: "Work income",
		value: 1000.00,
		isExpense: false
	},
	{
		id: 2,
		description: "Water bill",
		value: 20.00,
		isExpense: true
	},
	{
		id: 3,
		description: "Rent",
		value: 300.00,
		isExpense: true
	},
	{
		id: 4,
		description: "Power bill",
		value: 50.00,
		isExpense: true
	},
	{
		id: 5,
		description: "Groceries",
		value: 250.00,
		isExpense: true
	},
	{
		id: 6,
		description: "Fuel",
		value: 50.00,
		isExpense: true
	}
];
