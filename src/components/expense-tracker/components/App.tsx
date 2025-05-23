// Note:  Copy paste this code into App.txs file

// import { useState } from "react";
// import ExpenseList from "./components/expense-tracker/components/ExpenseList";
// import Filter from "./components/expense-tracker/components/Filter";
// import CreateExpense from "./components/expense-tracker/components/CreateExpense";
// import type { ZodFormData } from "./components/expense-tracker/components/CreateFormZodFormSchema";

// export interface ExpenseItem {
//   id: number;
//   description: string;
//   category: string;
//   amount: number;
// }

// export const categories = ["Food", "Housing", "Bills", "Travel", "Leisure"];

// function App() {
//   const expenseItems: ExpenseItem[] = [
//     { id: 1, description: "Groceries", category: "Food", amount: 50 },
//     { id: 2, description: "Rent", category: "Housing", amount: 1200 },
//     { id: 3, description: "Utilities", category: "Bills", amount: 200 },
//     { id: 4, description: "Transportation", category: "Travel", amount: 100 },
//     { id: 5, description: "Entertainment", category: "Leisure", amount: 150 },
//     { id: 6, description: "Dining Out", category: "Food", amount: 75 },
//   ];

//   const [items, setItems] = useState<ExpenseItem[]>(expenseItems);

//   const handleDelete = (id: number) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const handleSubmitExpense = (data: ZodFormData) => {
//     const newExpenseItem: ExpenseItem = {
//       id: items.length + 1,
//       description: data.description,
//       category: data.category,
//       amount: data.amount,
//     };
//     setItems((prevItems) => [...prevItems, newExpenseItem]);
//   };

//   const handleCateogryChange = (category: string) => {
//     console.log(category);
//     if (category === "All") {
//       setItems(expenseItems);
//     } else {
//       setItems(expenseItems.filter((item) => item.category === category));
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 gap-20">
//       <div>
//         <CreateExpense onFormSubmit={handleSubmitExpense} />
//       </div>
//       <div>
//         <Filter onCategoryChange={handleCateogryChange} />
//         <ExpenseList items={items} onDelete={handleDelete} />
//       </div>
//     </div>
//   );
// }

// export default App;
