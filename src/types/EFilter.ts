enum EFilter {
  none = 'none',
  name = 'name',
  age = 'age',
}

const FilterStr: Record<EFilter, string> = {
  [EFilter.none]: 'None',
  [EFilter.name]: 'Name',
  [EFilter.age]: 'Age',
};

export {EFilter, FilterStr};
