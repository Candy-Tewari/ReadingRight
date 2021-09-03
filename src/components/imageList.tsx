import React from 'react';
import {connect} from "react-redux";

import {loadMoreImages, loadMoreImagesSpinner} from "../actions";
import './imageList.css';

type Props = {
    images: Array<any>,
    loadMoreImages: any,
    loadMoreImagesSpinner: any,
    value: string,
    spinner: boolean
}

const ImageList = (props: Props) => {
    const loadMoreImages = () => {
        const n: number = parseInt(process.env.REACT_APP_IMAGES_PER_PAGE || '2');
        props.loadMoreImagesSpinner();
        props.loadMoreImages(props.value, props.images.length/n +1);
    }
    const renderSpinnerStatus = () => {
        if(!props.spinner) {
            if(props.images.length !== 0) {
                return (
                    <button
                        className="btn btn-dark ml-4 px-4 py-2"
                        onClick={loadMoreImages}
                    >
                        Load More
                    </button>
                );
            }
        } else {
            return (
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            );
        }
    }
    return (
        <React.Fragment>
                <div className="image-list mt-5">
                    {props.images.map(
                                image => <img src={image.urls.regular}
                                     className="img-fluid"
                                     alt={image.description}
                                     key={image.id}
                                />
                    )}
                </div>
            <div className="d-flex justify-content-center mt-5">
                {renderSpinnerStatus()}
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state: any) => {
    return {
        images: state.imagesData.images,
        value: state.search.value,
        spinner: state.loader.spinner
    };
};

export default connect(mapStateToProps, {loadMoreImages, loadMoreImagesSpinner})(ImageList);