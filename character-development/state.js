//initial state
var initialState = {
    episodes: [
    {
        id: "S1E1",
        title: "Season 1 Episode 1",
        release: "Released: 2017-09-17",
        slides: ["S1E1", "title", "presents", "play"]
    },
    {
        id: "S1E2",
        title: "Season 1 Episode 2",
        release: "Released: 2017-09-24",
        slides: ["S1E2", "S1E1", "title", "presents", "S1E1", "previously", "play"]
    },
    {
        id: "S1E3",
        title: "Season 1 Episode 3",
        release: "Released: 2017-10-01",
        slides: ["S1E3", "S1E2", "S1E1", "title", "presents", "S1E2", "S1E1", "previously", "play"]
    },
    {
        id: "S1E4",
        title: "Season 1 Episode 4",
        release: "Released: 2017-10-08",
        slides: ["S1E4", "S1E3", "S1E2", "S1E1", "title", "presents", "S1E3", "S1E2", "S1E1", "previously", "play"]
    },
    {
        id: "soon",
        title: "Season 1 Episode 5",
        release: "Released: 2017-10-15",
        slides: ["S1E5", "S1E4", "S1E3", "S1E2", "S1E1", "title", "presents", "S1E4", "S1E3", "S1E2", "S1E1", "previously", "play", "soon"]
    }
    ]
};

//reducer
//todo: split reducer
function slideReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    } else {
        //handle actions
        switch(action.type) {
            case REMOVE_SLIDE: 
                return Object.assign({}, state, {
                    episodes: state.episodes.map(function(episode, index) {
                        if(episode.id === action.episodeID) {
                            return Object.assign({}, episode, {
                                slides: episode.slides.slice(0, -1)
                            });
                        } else {
                            return episode;
                        }
                    })
                });
        
            default: 
                return state;
        }
    }
}

//Action
var REMOVE_SLIDE = 'REMOVE_SLIDE';

//Action creator
//remove the top slide of an episode
function removeSlide(episodeID) {
    return {
        type: REMOVE_SLIDE,
        episodeID
    }
}

//create store
var store = Redux.createStore(slideReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//log initial state
console.log(store.getState());

//log every state
var unsubscribe = store.subscribe(function() {
    return console.log(store.getState());
});

//dispatch action on function call
function shiftSlide(episodeID) {
    if(episodeID === "soon") {
        alert("Coming Soon!");
    } else {
        store.dispatch(removeSlide(episodeID));    
    }
}
