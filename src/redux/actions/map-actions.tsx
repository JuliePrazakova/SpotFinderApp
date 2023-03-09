import { SET_MAP_SEARCH } from "../action-types";

const setMapSearch = (id: string) => ({
  type: SET_MAP_SEARCH,
  payload: {
    id: id,
  },
});

export { setMapSearch };
