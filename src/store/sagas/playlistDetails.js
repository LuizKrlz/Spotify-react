import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylistsDetailsActions } from '../ducks/playlistDetails';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylistsDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (error) {
    yield put(ErrorActions.setError('Nao foi possivel obter os detalhes da playlist'));
  }
}
