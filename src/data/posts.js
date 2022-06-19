const username=sessionStorage.getItem("username")
const fullname=sessionStorage.getItem("firstName")+" "+sessionStorage.getItem("lastName")
const posts = [
  
  {
    id: 1,
    userimage:
      "https://avatars.githubusercontent.com/u/79963893?s=400&u=1c4628727238a10a4055584f750b1de99e2866f8&v=4",
    username: {username},
    displayName: {fullname},
    text: "Bu proje Software Engineering Proje Ödevi için yapıyorum.",
    shareImage: "",
    date: "1654214315180",
  },
  
];

export default posts;
