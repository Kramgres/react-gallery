import React from "react";
import {connect} from "react-redux";
import Catalog from "./Catalog";
import {getUserAlbums} from "../../redux/catalog-reducers";

class CatalogContainer extends React.Component {
    componentDidMount() {
        let userId = 1;
        this.props.getUserAlbums(userId);
    }

    render() {
        return (
            <Catalog {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    catalog: state.catalogPage
})

export default connect(mapStateToProps, {getUserAlbums})(CatalogContainer);