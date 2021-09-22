import { FETCH_TERMS_FAIL, FETCH_TERMS_SUCCESS, FETCH_TERMS_LOADING } from "../actions";

const initialState = {
    termResults: [{
        artistName: "Sure Sure",
        country: "USA",

        artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/16/d9/77/16d9774c-07fd-88a7-e9cd-f6a784c44391/source/100x100bb.jpg",
        artworkUrl60: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/16/d9/77/16d9774c-07fd-88a7-e9cd-f6a784c44391/source/60x60bb.jpg",
        artworkUrl30: "https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/16/d9/77/16d9774c-07fd-88a7-e9cd-f6a784c44391/source/30x30bb.jpg",

        artistViewUrl: "https://music.apple.com/us/artist/sure-sure/1087919613?uo=4",
    }, {
        artistName: "Poro",
        country: "USA",

        artworkUrl100: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/e3/9d/1be39d02-cb38-b82b-d26e-df21dd53a802/source/100x100bb.jpg",
        artworkUrl60: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/e3/9d/1be39d02-cb38-b82b-d26e-df21dd53a802/source/60x60bb.jpg",
        artworkUrl30: "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/1b/e3/9d/1be39d02-cb38-b82b-d26e-df21dd53a802/source/30x30bb.jpg",

        artistViewUrl: "https://music.apple.com/us/artist/poro/151144689?uo=4",
    }],
    isFetching: false,
    error: ''
};


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (FETCH_TERMS_LOADING):
            return ({
                ...state,
                error: '',
                isFetching: true,
            })
        case (FETCH_TERMS_SUCCESS):
            return ({
                ...state,
                error: '',
                isFetching: false,
                termResults: action.payload,
            })
        case (FETCH_TERMS_FAIL):
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            })
        default:
            return state;
    }
};