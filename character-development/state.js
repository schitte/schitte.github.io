//initial state
var initialState = {
    episodes: [
    {
        id: "S1E1",
        title: "Season 1 Episode 1",
        release: "Released: 2017-09-17",
        slides: ["S1E1", "title", "presents"]
    },
    {
        id: "S1E2",
        title: "Season 1 Episode 2",
        release: "Released: 2017-09-24",
        slides: ["S1E2", "S1E1", "title", "presents", "S1E1", "previously"]
    },
    {
        id: "S1E3",
        title: "Season 1 Episode 3",
        release: "Released: 2017-10-01",
        slides: ["S1E3", "S1E2", "S1E1", "title", "presents", "S1E2", "S1E1", "previously"]
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
                            return Object.assign({}, state, {
                                slides: state.episodes[index].slides.shift()
                            });
                        } else {
                            return episode;
                        }
                    })
                });
        
            default: 
                return state;
        }
        return state;
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
var store = createStore(slideReducer, initialState);

//log initial state
console.log(store.getState());

//log every state
var unsubscribe = store.subscribe(function() {
    return console.log(store.getState());
});

//dispatch action on function call
function shiftSlide(episodeID) {
    store.dispatch(removeSlide(episodeID));
}
