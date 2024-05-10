import {
  PROFILES_REQUEST,
  PROFILES_FAILURE,
  PROFILES_CONFLICT,
  SAVE_PROFILES,
  GET_PROFILES,
  SEARCH_PROFILES,
  DISCONTINUE_PROFILE,
} from '../../../actions/usuarios/profilesActions/actionTypes';
import {
  searchProfiles,
  profilesConflict,
  profilesFailure,
  profilesRequest,
  getProfiles,
  saveProfiles,
  discontinueProfiles,
} from './profilesCases';

const initialState = {
  allProfiles: [],
  loading: false,
  error: false,
  conflict: false,
};

export default function profilesReducer(state = initialState, action) {
  switch (action.type) {
    // Public
    case PROFILES_REQUEST:
      return profilesRequest(state);
    case PROFILES_FAILURE:
      return profilesFailure(state, action);
    // Create
    case PROFILES_CONFLICT:
      return profilesConflict(state, action);
    case SAVE_PROFILES:
      return saveProfiles(state);
    // Get
    case GET_PROFILES:
      return getProfiles(state, action);
    // Search
    case SEARCH_PROFILES:
      return searchProfiles(state, action);
    // Update
    case DISCONTINUE_PROFILE:
      return discontinueProfiles(state, action);
    default:
      return state;
  }
}
