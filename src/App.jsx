import React from "react";
import Card from "./components/Card";

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://tse4.mm.bing.net/th/id/OIP.jCdwA7Tm4IID1CbzkL6MOgHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Ahmedabad, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/002/520/838/original/apple-logo-black-isolated-on-transparent-background-free-vector.jpg",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "SDE I",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Ahmedabad, India",
    },
    {
      brandLogo: "https://cdn.logojoy.com/wp-content/uploads/20231031154602/2016-netflix-logo-768x408.png",
      companyName: "Netflix",
      datePosted: "4 weeks ago",
      post: "Frontend Platform Engineer",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Ahmedabad, India",
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/022/424/230/original/tesla-logo-editorial-free-vector.jpg",
      companyName: "Tesla",
      datePosted: "6 weeks ago",
      post: "Web Application Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://logospng.org/download/uber/logo-uber-preta-1536.png",
      companyName: "Uber",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Ahmedabad, India",
    },
  ];

  console.log(jobOpenings);
  return (
    <div className="parent">
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}>
          <Card company={elem.companyName} post={elem.post} 
          date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} brandLogo={elem.brandLogo} />
        </div>
      })}
    </div>
  );
};

export default App;
