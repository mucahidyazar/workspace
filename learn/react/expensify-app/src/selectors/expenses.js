import moment from 'moment';

// Get vısıble expenses
//Bu 2 argument alacak. 1. si tamamlanmis filtrelenmis ve siralanmis sortinglenmis dizi olacak yani expenses, Ve ikincisidde filters lari bilmeliyiz. Ve bunlari kullanarak gorunecek expensesleri aliriz.
//Ve daha sonra asagidaki .subscvribe icinde bunu tanimliyorum
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1 //Eger bu kosul saglanirsa 1 olur ve b ilk siralanir, saglanmazsa -1 olur ve a ilk siralanir.
        }
        if(sortBy === 'amount'){
            return (a.amount > b.amount) ? -1 : 1
        }
    })
}

export default getVisibleExpenses;