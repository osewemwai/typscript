enum Role { ADMIN, READ_ONLY, AUTHOR };
const mtu = {
  name: "Shadrack",
  age: 25,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN
};
console.log(mtu.name);

for(const hobby of mtu.hobbies) {
  console.log(hobby.toUpperCase());
}
if(mtu.role === Role.ADMIN) {
  console.log("is admin");
}
