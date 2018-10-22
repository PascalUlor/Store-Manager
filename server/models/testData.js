const userDataBase = [
  {
    id: 1,
    Name: 'Don Pascal',
    email: 'pc@yahoo.com',
    password: '123',
    priviledges: 'Admin',
    dateAdded: '14-12-2018',
  },
  {
    id: 2,
    Name: 'Clark Kent',
    email: 'clark@gmail.com',
    password: '453',
    priviledges: 'user',
    dateAdded: '14-12-2018',
  },
  {
    id: 3,
    Name: 'Mike',
    email: 'mk@yahoo.com',
    password: '123',
    priviledges: 'user',
    dateAdded: '14-12-2018',
  },
];

const category = {
  cat1: 'Beverage',
  cat2: 'Insecticide',
  cat3: 'snacks',
};

const inventory = [
  {
    id: 1,
    userId: userDataBase[0].id,
    productName: 'Milo',
    productCategory: category.cat1,
    description: 'Food drink of future champions',
    status: 'Available',
    dateAdded: '22-08-2018',
  },
  {
    id: 2,
    userId: userDataBase[0].id,
    productName: 'Baygon',
    productCategory: category.cat2,
    description: 'kill mosquito well-well',
    status: 'Finished',
    dateAdded: '10-08-2018',
  },
];

const salesRecord = [
  {
    id: '1',
    userId: userDataBase[0].id,
    productNo: '101',
    productName: 'Peak',
    dateSold: '02-10-2018',
    quantity: '12',
    price: '950',
  },
  {
    id: '2',
    userId: userDataBase[0].id,
    productNo: '121',
    productName: 'Gala',
    dateSold: '02-10-2018',
    quantity: '5',
    price: '500',
  },
];


const db = { userDataBase, inventory, salesRecord };

export default db;
