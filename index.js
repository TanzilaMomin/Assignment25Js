const data = [
    {
      fname: "Neha",
      lname: "Patil",
      email: "asad@gmail.com",
    },
    {
      fname: "Shaikh",
      lname: "Faizan",
      email: "faizan@gmail.com",
    },
    {
      fname: "Priya",
      lname: "kumar",
      email: "kumar@gmail.com",
    },
    {
      fname: "Shaikh",
      lname: "Shoeb",
      email: "shoeb@gmail.com",
    },
    {
      fname: "John",
      lname: "Marry",
      email: "john@gmail.com",
    },
    {
      fname: "Shaikh",
      lname: "Sameer",
      email: "sameer23@gmail.com",
    },
    {
      fname: "Revan",
      lname: "sidheshwar",
      email: "revan@gmail.com",
    },
    {
      fname: "Sunil",
      lname: "kamde",
      email: "sunil@gmail.com",
    },
    {
      fname: "Syed",
      lname: "Wajid Ali",
      email: "wajid@gmail.com",
    },
  ];
  const mainDiv=document.getElementById("main");
  const generateComponent=(curr)=>{
    const divComp=document.createElement("div");
    divComp.setAttribute("class","comp");

    const fname=document.createElement("h3");
    fname.innerText= "First   Name-    "+curr.fname;

    const lname=document.createElement("h3");
    lname.innerText= "Last Name-   "+curr.lname;

    const email=document.createElement("h3");
    email.innerText=curr.email;


    divComp.appendChild(fname);
    divComp.appendChild(lname);
    divComp.appendChild(email);

    mainDiv.appendChild(divComp);
  }
data.forEach((item)=>{
  generateComponent(item)
})
