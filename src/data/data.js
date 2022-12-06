const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Thomas",
      lastName: "Dovineau",
      age: 31,
    },
    todayScore: 0.4,
    keyData: {
      calorieCount: 1889,
      proteinCount: 231,
      carbohydrateCount: 310,
      lipidCount: 42,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Cecilia",
      lastName: "Ratorez",
      age: 34,
    },
    score: 0.3,
    keyData: {
      calorieCount: 2500,
      proteinCount: 90,
      carbohydrateCount: 150,
      lipidCount: 120,
    },
  },
];

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 70,
        calories: 160,
      },
      {
        day: "2020-07-02",
        kilogram: 70,
        calories: 162,
      },
      {
        day: "2020-07-03",
        kilogram: 71,
        calories: 286,
      },
      {
        day: "2020-07-04",
        kilogram: 71,
        calories: 280,
      },
      {
        day: "2020-07-05",
        kilogram: 70,
        calories: 290,
      },
      {
        day: "2020-07-06",
        kilogram: 75,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 80,
        calories: 390,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 70,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 69,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 70,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 70,
        calories: 500,
      },
      {
        day: "2020-07-05",
        kilogram: 69,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 69,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 69,
        calories: 390,
      },
    ],
  },
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 45,
      },
      {
        day: 2,
        sessionLength: 30,
      },
      {
        day: 3,
        sessionLength: 40,
      },
      {
        day: 4,
        sessionLength: 23,
      },
      {
        day: 5,
        sessionLength: 15,
      },
      {
        day: 6,
        sessionLength: 60,
      },
      {
        day: 7,
        sessionLength: 0,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 40,
      },
      {
        day: 3,
        sessionLength: 50,
      },
      {
        day: 4,
        sessionLength: 30,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
];

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 190,
        kind: 1,
      },
      {
        value: 100,
        kind: 2,
      },
      {
        value: 50,
        kind: 3,
      },
      {
        value: 140,
        kind: 4,
      },
      {
        value: 90,
        kind: 5,
      },
      {
        value: 200,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 200,
        kind: 1,
      },
      {
        value: 240,
        kind: 2,
      },
      {
        value: 80,
        kind: 3,
      },
      {
        value: 80,
        kind: 4,
      },
      {
        value: 220,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
];

module.exports = {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};
