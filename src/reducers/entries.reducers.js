const reducer = (state = initialEntries, action) => {
    console.log(action);
    let newEntries;
    switch(action.type){
        case 'ADD_ENTRY':
            newEntries = state.concat({...action.payload});
            return newEntries;
        
        case 'REMOVE_ENTRY':
            newEntries = state.filter((entry) => entry.id !== action.payload.id);
            return newEntries;
            
        default:
            return state;
    };
};

export default reducer;

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
