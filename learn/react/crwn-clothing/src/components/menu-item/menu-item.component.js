import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
    <div 
        className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`) } //${match.url} = Anasayfa yani / demektir. ${linkUrl}'de props 'dan geliyor.
    >
    <div 
        className="background-image" 
        style={{background: `url(${imageUrl})`}} 
    />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);
//withRouter React-Router-Dom 'dan geliyor.
//Bir Higher Order Component. HOC = Componentlari duzenlenmis, modifiye edilmis sekilde bize geri donduren yani return eden fonksiyon componentlardir.