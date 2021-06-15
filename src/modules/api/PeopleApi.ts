import {fetchJson} from '../../helpers/Fetcher';
import Person from '../../modules/people/models/Person';

export default class PeopleApi {
  static getPeople() {
    return fetchJson<Person[]>(
      'https://run.mocky.io/v3/561a60b7-6794-4a3c-9184-ab7e7c30face',
    );
  }
}
