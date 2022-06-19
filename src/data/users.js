const fullname=sessionStorage.getItem("firstName")+" "+sessionStorage.getItem("lastName")
const username=sessionStorage.getItem("username")

const users = [
  {
    
    username: {username},
    userimage:
      "https://avatars.githubusercontent.com/u/79963893?s=400&u=1c4628727238a10a4055584f750b1de99e2866f8&v=4",
    displayName: {fullname},
    biograpfy: "CSE Student",
    followingCount: 4,
    followersCount: 1998,
    joinYear: 2022,
    joinMonth: "April",
  }
];

export default users;
