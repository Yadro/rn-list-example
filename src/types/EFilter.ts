enum EFilter {
  name = 'name',
  age = 'age',
}

const FilterStr: Record<EFilter, string> = {
  [EFilter.name]: 'Name',
  [EFilter.age]: 'Age',
};

export {EFilter, FilterStr};
