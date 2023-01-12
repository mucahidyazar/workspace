import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {

    state = {
        calenderFocused: null,
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }));
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))} />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if(e.target.value === "date"){
                            this.props.dispatch(sortByDate())
                        } else if (e.target.value === 'amount') {
                            this.props.dispatch(sortByAmount())
                        }
                    }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    filters: state.filters
})
//aslinda filtersin yaninda birde her zaman gizli bir dispatch props 'u vardir.
//Eger connect icinde yukaridaki mapStatetoprops olmasada dispatch 'e baglanabiliriz. Onun icin yukaridaki fonsiyonu silebiliriz eger hic bir state degeri kullanmayacaksak
export default connect(mapStateToProps)(ExpenseListFilters);