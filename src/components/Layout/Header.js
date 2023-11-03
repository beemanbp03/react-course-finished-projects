import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';

import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt='a spread of various dishes of food' />
            </div>
        </Fragment>
    );
}

export default Header;