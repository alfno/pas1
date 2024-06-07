import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './header';
import CardList from './CardList';
import { getData } from './data';

import './style.css';

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFavorite: getData(), //ambil data object
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this); 
    }
    //event handling untuk delete data
    onDeleteHandler(id) {
        const dataFavorite = this.state.dataFavorite.filter(Favorite => Favorite.id !== id);
        this.setState({ dataFavorite });
    }

    render() {
        return (
            <div className='favorite'>
                <Header />
                <CardList 
                    dataFavorite={this.state.dataFavorite} 
                    onDelete ={this.onDeleteHandler}
                />
            </div>
        )
    } 
}
 
const root = createRoot(document.getElementById('root'));
root.render(<Favorite />);