import PeopleApi from '../api/PeopleApi';
import PeopleFactory from './PeopleFactory';
import Person from './models/Person';

export default class PeopleService {
  private peopleFactory: PeopleFactory;

  constructor() {
    this.peopleFactory = new PeopleFactory();
  }

  async getPeople(): Promise<Person[]> {
    const people = await PeopleApi.getPeople();

    return this.peopleFactory.createList(Person, people);
  }
}
