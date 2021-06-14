import {api} from "../api/api";

const SET_ALBUM = 'SET_ALBUM';

let initialState = {
    id: null,
    userId: null,
    title: "",
    images: [
        {
            id: null,
            title: "",
            url: ""
        }
    ],
}

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALBUM:
            return {
                ...state,
                id: action.id,
                userId: action.userId,
                title: action.title,
                images: [...action.images]
            }
        default:
            return state;
    }
}

export const getAlbum = (albumId) => {
    return (dispatch) => {
        api.getAlbum(albumId).then(data => {
            return data;
        }).then(album => {
            api.getAlbumImages(albumId).then(data => {
                album.images = data.map(i => ({id: i.id, title: i.title, url: i.url}));
                return album;
            }).then(album => {
                dispatch(setAlbum(album))
            })
        })
    }
}

export const setAlbum = (album) => ({type: SET_ALBUM,
    id: album.id,
    userId: album.userId,
    title: album.title,
    images: album.images});
export default albumReducer;