import axios from "axios";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const api = {
    getUserAlbums(userId){
        return instance.get(`users/${userId}/albums`).then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
    },

    getAlbumImages(albumId){
        return instance.get(`/albums/${albumId}/photos`).then(response => {
            if (response.status === 200){
                return response.data;
            }
        })
    },

    getAlbum(albumId){
        return instance.get(`/albums/${albumId}`).then(response => {
            if (response.status === 200) {
                return response.data;
            }
        })
    }
}