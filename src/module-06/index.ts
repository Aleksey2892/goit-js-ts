import users from './users';

type TUsers = {
  id: string;
  name: string;
  email: string;
  eyeColor: string;
  friends: string[];
  isActive: boolean;
  balance: number;
  skills: string[];
  gender: string;
  age: number;
}[];

// 1 =====================================================
const getUserNames = (users: TUsers) => {
  return users.map((user) => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// 2=====================================================
const getUsersWithEyeColor = (users: TUsers, color: string) => {
  return users.filter((user) => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));
// [ {Moore Hensley}, {Sharlene Bush}, {Carey Barr} ]

// 3 =====================================================
const getUsersWithGender = (users: TUsers, gender: string) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// 4 =====================================================
const getInactiveUsers = (users: TUsers) => {
  return users.filter((user) => !user.isActive);
};

console.log(getInactiveUsers(users));
// [ {Moore Hensley}, {Ross Vazquez}, {Blackburn Dotson} ]

// 5 =====================================================
const getUserWithEmail = (users: TUsers, email: string) => {
  return users.find((user) => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {Elma Head}

// 6 =====================================================
const getUsersWithAge = (users: TUsers, min: number, max: number) => {
  return users.filter((user) => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30));
// [ {Ross Vazquez}, {Elma Head}, {Carey Barr} ]
console.log(getUsersWithAge(users, 30, 40));
// [ {Moore Hensley}, {Sharlene Bush}, {Blackburn Dotson}, {Sheree Anthony} ]

// 7 =====================================================
const calculateTotalBalance = (users: TUsers) => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users));
// 20916

// 8 =====================================================
const getUsersWithFriend = (users: TUsers, friendName: string) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]

// 9 =====================================================
const getNamesSortedByFriendsCount = (users: TUsers) => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// 10 =====================================================
const getSortedUniqueSkills = (users: TUsers): string[] => {
  return Array.from(
    new Set(
      users.reduce((allSkills: string[], user) => {
        allSkills.push(...user.skills);
        return allSkills;
      }, [])
    )
  ).sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

export {};
