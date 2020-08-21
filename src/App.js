import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './Components/Header';
import Cards from './Components/Cards'
import { fetchData } from './api';

class App extends Component {
    state = {
        data: ''
    }
    async componentDidMount() {
        const data = await fetchData();
        this.setState({ data })
    }
    render() {
        const { data } = this.state;
        return (
            <div className={styles.container}>
                <Header />
                <Cards {...data} />
            </div>
        )
    }
}

export default App;