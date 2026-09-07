let userArray = [];
let nextId = 1;

const getAll = () => {
  return userArray;
};

const addOne = (name,
  email,
  password,
  phone_number,
  gender,
  date_of_birth,
  membership_status,
  account_verified,
  country) => {
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status|| !account_verified || !country ) {
    return false;
  }
  const newUser = {
    id:nextId++,
   name,
  email,
  password,
  phone_number,
  gender,
  date_of_birth,
  membership_status,
  account_verified,
  country
  };
  userArray.push(newUser);
  return newUser;
};

const findById = (id) => {
  const user = userArray.find((user) => user.id === Number(id));
  return user || false;
};

const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if (updatedData.name) user.name = updatedData.name;
    if (updatedData.info) user.info = updatedData.info;
    if (updatedData.image) user.image = updatedData.image;
    if (updatedData.price) user.price = updatedData.price;
    if (updatedData.duration) user.duration = updatedData.duration;
    if (updatedData.groupSize) user.groupSize = updatedData.groupSize;
    if (updatedData.rating !== undefined) user.rating = updatedData.rating;
    if (updatedData.availability !== undefined) user.availability = updatedData.availability;
    return user;
  }
  return false;
};

const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initialLength = userArray.length;
    userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLength;
  }
  return false;
};

if (require.main === module) {
  let result = addOne(

  "Matti Seppänen",
  "matti@example.com",
  "M@45mtg$",
 " +358401234567",
  'Male',
  "2000-01-15",
'Active',
   true,
 "Finland"

  );
  console.log(result);
  result = addOne(
    "Matti Seppänen",
  "matti@example.com",
  "M@45mtg$",
 " +358401234567",
  'Male',
  "2000-01-15",
'Active',
   true,
 "Finland"
  );
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(2));
  console.log(
    "updateById called:",
    updateOneById(2, {
      name: "Italy in 7 Days user",
      info: "Paris is synonymous.",
      image: "https://www.course-api.com/images/users/user-2.jpeg",
      price: 800,
      duration: "7 days",
      groupSize: "Max 8 people",
      rating: 4.7,
      availability: false,
    })
  );
  console.log("findById called after item updated:", findById(2));
  console.log("deleteById called:", deleteOneById(2));
  console.log("findById called after item deleted:", findById(2));
}

const user = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = user;