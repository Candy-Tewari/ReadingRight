import React from 'react';
import {connect} from "react-redux";

type Props = {
    imagesData: any
}

const InfoImages = (props: Props) => {
    if(props.imagesData.images.length === 0)
        return null;
    return (
        <div className="mt-3 pl-2">
            <div className="font-weight-bold h1">{props.imagesData.searchValue}</div>
            <span>{`${props.imagesData.total} images has been found`}</span>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        imagesData: state.imagesData
    };
};

export default connect(mapStateToProps)(InfoImages);