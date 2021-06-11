import AbstractModel from '../../../base/AbstractModel';

export default class Person extends AbstractModel {
  id: number | null = null;
  first_name: string | null = null;
  last_name: string | null = null;
  email: string | null = null;
  gender: string | null = null;
  catch_phrase: string | null = null;
  age: number | null = null;

  constructor(props: any) {
    super();
    this.load(props);
  }

  get fullName() {
    return `${this.first_name} ${this.last_name}`;
  }
}
