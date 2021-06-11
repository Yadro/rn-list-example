import {makeAutoObservable, runInAction} from 'mobx';
import Person from './models/Person';
import PeopleService from './PeopleService';

export default class PeopleStore {
  people: Person[] = [];
  loading: boolean = false;
  private peopleService: PeopleService;

  constructor() {
    makeAutoObservable(this);
    this.peopleService = new PeopleService();
  }

  async getCharacters() {
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
}
