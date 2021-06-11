import {fetchJson} from '../../helpers/Fetcher';
import IPerson from '../../types/Character';

export default class PeopleApi {
  static getPeople() {
    return fetchJson<IPerson[]>(
      'https://run.mocky.io/v3/c43b5314-2147-44e5-afdc-0ac9af2f81d9',
    );
  }
}
