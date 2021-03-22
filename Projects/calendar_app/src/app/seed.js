export const seedData = [
  {
    id: 1,
    abbvTitle: 'Mon',
    fullTitle: 'Monday',
    events: [
      { details: 'Get Groceries', edit: false },
      { details: 'Carpool', edit: false },
    ],
    active: true,
  },
  {
    id: 2,
    abbvTitle: 'Tue',
    fullTitle: 'Tuesday',
    events: [{ details: 'Yoga/Gym', edit: false }],
    active: false,
  },
  {
    id: 3,
    abbvTitle: 'Wed',
    fullTitle: 'Wednesday',
    events: [{ details: 'Work social', edit: false }],
    active: false,
  },
  {
    id: 4,
    abbvTitle: 'Thu',
    fullTitle: 'Thursday',
    events: [],
    active: false,
  },
  {
    id: 5,
    abbvTitle: 'Fri',
    fullTitle: 'Friday',
    events: [{ details: 'Friday dinner/drinks', edit: false }],
    active: false,
  },
  {
    id: 6,
    abbvTitle: 'Sat',
    fullTitle: 'Saturday',
    events: [{ details: 'Chill with the parents', edit: false }],
    active: false,
  },
  {
    id: 7,
    abbvTitle: 'Sun',
    fullTitle: 'Sunday',
    events: [{ details: 'Netflix/Chill', edit: false }],
    active: false,
  },
];

/*
This follows from a simple, generic approach for developing an app from scratch:
1. Build a static version of the app
2. Break the app into components
3. Hard-code initial states with parent-child data flow
4. Create state mutations (and accompanying component dispatchers)
*/
