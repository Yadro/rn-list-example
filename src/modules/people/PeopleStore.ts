import {makeAutoObservable, runInAction} from 'mobx';
import Person from './models/Person';
import PeopleService from './PeopleService';
import {EFilter} from '../../types/EFilter';

const filters = {
  [EFilter.name]: (a: Person, b: Person) =>
    a.fullName.localeCompare(b.fullName),
  [EFilter.age]: (a: Person, b: Person) =>
    (!!a.age && !!b.age && a.age - b.age) || 0,
};

export default class PeopleStore {
  people: Person[] = [];
  loading: boolean = false;
  private peopleService: PeopleService;

  constructor() {
    makeAutoObservable(this);
    this.peopleService = new PeopleService();
  }

  async fetchCharacters() {
    this.loading = true;

    try {
      const people = await this.peopleService.getPeople();

      runInAction(() => {
        this.people = people;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  getCharacters(filter: EFilter) {
    if (filter === EFilter.none) {
      return this.people;
    }

    return this.people.slice().sort(filters[filter]);
  }
}
