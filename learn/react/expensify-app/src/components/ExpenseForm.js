import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? props.expense.note : '',
            note: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}));
        }
    }

    onNoteChange = (e) => {
        //e.target.value 'yi direk set state icine yazamayiz e aktif edilmedigi icin hata aliriz. Ya e.persist() ile eventi aktif edip icine yazacagiz yada disarda bir degiskene atayip degiskeni setstate icinde kullanacagiz.
        const note = e.target.value;
        this.setState(() => ({note}));
    }

    onDateChange = (createdAt) => {
        if( createdAt ) {
            this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ( { focused } ) => { // focused 'i prewState den cekiyor
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount ) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render () {
        return (
            <div>
                {
                    this.state.error !== '' && <p>{this.state.error}</p>
                }
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt} //Nereden baslayacagimizi temsil eden bir moment objesi
                        onDateChange={this.onDateChange} //Yarattigimiz bir fonksiyon
                        focused={this.state.calendarFocused} //State'de true yada fals donen olsuturdugumzu state degeri
                        onFocusChange={this.onFocusChange} // yarattigimiz bir fonksiyon
                        numberOfMonths={1} //default 2 dir. Picker 2 aylik liste goruntusu gosterirken artik 1 ay 1 ay gosterecek
                        isOutsideRange={(day) => false} //false donerek gecmis tarihleride secebiliriz
                    />
                    <textarea 
                        placeholder="Add a note for your expense"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                        
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}