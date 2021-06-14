import React from "react";
import {connect} from "react-redux";
import Album from "./Album";
import {getAlbum} from "../../redux/album-reducers";

class AlbumContainer extends React.Component {
    componentDidMount() {
        this.props.getAlbum(1);
    }

    render() {
        return (
            <Album {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    album: state.albumPage
})

export default connect(mapStateToProps, {getAlbum})(AlbumContainer);