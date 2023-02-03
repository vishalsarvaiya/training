const employee_details = [
  {
    No: 1,
    firstname: "Vishal",
    lastname: "sarvaiya",
    email: "vishal123@gmail.com",
    phone_number: "9895421565",
    gender: "Male",
    department: "Admin",
    skills: ["Communication","Backend Technology"],
    about: "Ahmedabad",
  },
  {
    No: 2,
    firstname: "Bhavy",
    lastname: "Chavda",
    email: "Bhavy453@gmail.com",
    phone_number: "8812121212",
    gender: "Male",
    department: "Admin",
    skills: ["Finance"],
    about: "Aanand",
  },
  {
    No: 3,
    firstname: "Avinash",
    lastname: "Dhanani",
    email: "Avinash123@gmail.com",
    phone_number: "9104136213",
    gender: "Male",
    department: "Account",
    skills: ["Communication"],
    about: "Bhavnagar",
  },
  {
    No: 4,
    firstname: "Hardik",
    lastname: "Kalaria",
    email: "Hardik453@gmail.com",
    phone_number: "8887774445",
    gender: "Male",
    department: "Mobile",
    skills: ["Finance"],
    about: "Ahmedabad",
  },
  {
    No: 5,
    firstname: "Dhruvraj",
    lastname: "Zala",
    email: "zala234@gmail.com",
    phone_number: "9647851246",
    gender: "Male",
    department: "Mobile",
    skills: ["Finance, Programming"],
    about: "Gandhinagar",
  },
  {
    No: 6,
    firstname: "Kevin",
    lastname: "Bhuva",
    email: "kevin8674@gmail.com",
    phone_number: "7832011458",
    gender: "Male",
    department: ".Net",
    skills: ["Optimization"],
    about: "Ahmedabad",
  },
  {
    No: 7,
    firstname: "Mahipal",
    lastname: "Chavda",
    email: "mahipal987@gmail.com",
    phone_number: "7698547854",
    gender: "male",
    department: "PHP",
    skills: ["Backend Technology"],
    about: "Aanand",
  },
  {
    No: 8,
    firstname: "Deep",
    lastname: "Zalavadiya",
    email: "deep0990@gmail.com",
    phone_number: "8989747465",
    gender: "Male",
    department: "SEO",
    skills: ["Fronted Technology"],
    about: "Surat",
  },
  {
    No: 9,
    firstname: "Manish",
    lastname: "yadav",
    email: "manish777@gmail.com",
    phone_number: "9696847548",
    gender: "Male",
    department: ".Net",
    skills: ["Optimization"],
    about: "Banaras",
  },
  {
    No: 10,
    firstname: "Nishchal",
    lastname: "Thakkar",
    email: "nishchal232@gmail.com",
    phone_number: "7215452140",
    gender: "Male",
    department: ".Net",
    skills: ["Recruitment"],
    about: "Ahmedabad",
  },
  {
    No: 11,
    firstname: "deval",
    lastname: "parmar",
    email: "ddeval@gmail.com",
    phone_number: "9898989898",
    gender: "Male",
    department: "Admin",
    skills: ["Finance"],
    about: "Ahmedabad",
  },
  {
    No: 12,
    firstname: "Dhavani",
    lastname: "Shah",
    email: "shah2232@gmail.com",
    phone_number: "7485967845",
    gender: "Female",
    department: "Mobile",
    skills: ["App Development"],
    about: "Ahmedabad",
  },
  {
    No: 13,
    firstname: "Stuti",
    lastname: "Lad",
    email: "lad1232@gmail.com",
    phone_number: "9896587485",
    gender: "Female",
    department: "SEO",
    skills: ["Programming"],
    about: "Ahmedabad",
  },
];

const searchData = (searchText) => {
  const arr = [];
  searchText = searchText.toLowerCase();
  for (let i = 0; i < employee_details.length; i++) {
    if (
      JSON.stringify(employee_details[i]).toLowerCase().includes(searchText)
    ) {
      arr.push(employee_details[i]);
    }
  }
  return arr;
};

const paigination = (page, pagePerData) => {
  if (page < 0) {
    return [];
  }
  const ans = [];
  for (
    let i = page * pagePerData;
    i < page * pagePerData + pagePerData && i < employee_details.length;
    i++
  ) {
    ans.push(employee_details[i]);
  }
  return ans;
};
export { employee_details, searchData, paigination };
