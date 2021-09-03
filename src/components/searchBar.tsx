import React, {Component} from 'react';
import {connect} from "react-redux";

import { searchImages, fetchImages } from "../actions";

type Props = {
    searchImages: any,
    fetchImages: any,
    value: string
};

class SearchBar extends Component<Props> {
    render() { 
        const { value } = this.props;
        return (  
            <div className="input-group rounded input-group-lg responsive-search-bar">
                <input
                    onChange={(event) => this.props.searchImages(event.target.value)}
                    value={value} type="text" className="form-control rounded" placeholder="Search" aria-label="Search"
                />
                <button
                    className="btn btn-dark ml-4 px-5"
                    onClick={(event) => this.props.fetchImages(value)}
                >
                    <img src="/images/search.png" alt="search" />
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        value: state.search.value
    };
};
 
export default connect(mapStateToProps, {searchImages, fetchImages })(SearchBar);