import {api} from "../api/api";

const SET_CATALOG = 'SET_CATALOG';

let initialState = {
    cards: [{
        userId: null,
        albumId: null,
        title: "",
        imageUrl: "",
        imageTitle: "",
        imagesCount: 0
    }
    ],
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATALOG:
            return {
                ...state,
                cards: [...action.cards]
            }
        default:
            return state;
    }
}

export const getUserAlbums = (userId) => {
    return (dispatch) => {
        api.getUserAlbums(userId).then(data => {
            return data.map(c => ({userId: c.userId, albumId: c.id, title: c.title}));
        }).then(cards => {
            let promises = [];
            cards.forEach(c => (
                promises.push(
                api.getAlbumImages(c.albumId).then(data => {
                    c.imageUrl = data[0].url;
                    c.imageTitle = data[0].title;
                    c.imagesCount = data.length
                })
            )))
            Promise.all(promises).then(() =>
                dispatch(setCatalog(cards))
            );
        })

    }
}

export const setCatalog = (cards) => ({type: SET_CATALOG, cards});
export default catalogReducer;