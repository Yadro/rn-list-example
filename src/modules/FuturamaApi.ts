import {fetchJson} from '../helpers/Fetcher';

export default class FuturamaApi {
  static getCharacters() {
    return fetchJson('https://futuramaapi.herokuapp.com/api/v2/characters');
  }
}
