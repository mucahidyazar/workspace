import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({description, amount, createdAt, dispatch, id}) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>{amount} - {createdAt}</p>
    </div>
)



export default (ExpenseListItem);