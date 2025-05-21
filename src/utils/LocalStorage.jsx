const employees = [
  {
    id: 1,
    firstName: "Raj",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        accept: true, // Changed from active to accept
        newTask: true,
        complete: false,
        fail: false,
        taskTitle: "Complete Project Proposal",
        taskDescription:
          "Draft and submit the project proposal for client review.",
        taskDate: "2023-10-15",
        category: "Project",
      },
      {
        taskNumber: 2,
        accept: false, // Changed
        newTask: false,
        complete: true,
        fail: false,
        taskTitle: "Fix UI Bug",
        taskDescription: "Resolve the button alignment issue on the dashboard.",
        taskDate: "2023-10-10",
        category: "Development",
      },
      {
        taskNumber: 3,
        accept: true, // Changed
        newTask: false,
        complete: false,
        fail: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly team sync-up meeting.",
        taskDate: "2023-10-12",
        category: "Meeting",
      },
      {
        taskNumber: 4,
        accept: true, // Changed
        newTask: true,
        complete: false,
        fail: false,
        taskTitle: "Database Optimization",
        taskDescription: "Optimize SQL queries for better performance.",
        taskDate: "2023-10-18",
        category: "Backend",
      },
    ],
    taskStats: {
      accept: 3, // Changed from active to accept
      complete: 1,
      fail: 0,
      newTask: 2,
    },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        accept: true, // Changed
        newTask: false,
        complete: false,
        fail: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Cover new features with unit tests.",
        taskDate: "2023-10-14",
        category: "Testing",
      },
      {
        taskNumber: 2,
        accept: false, // Changed
        newTask: false,
        complete: true,
        fail: false,
        taskTitle: "Deploy Staging",
        taskDescription: "Push latest changes to staging environment.",
        taskDate: "2023-10-09",
        category: "DevOps",
      },
      {
        taskNumber: 3,
        accept: true, // Changed
        newTask: true,
        complete: false,
        fail: false,
        taskTitle: "API Documentation",
        taskDescription: "Update API docs for new endpoints.",
        taskDate: "2023-10-16",
        category: "Documentation",
      },
    ],
    taskStats: {
      accept: 2, // Changed
      complete: 1,
      fail: 0,
      newTask: 1,
    },
  },
  {
    id: 3,
    firstName: "सुनील", // Nepali name (Sunil)
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        accept: true, // Changed
        newTask: true,
        complete: false,
        fail: false,
        taskTitle: "Design Landing Page",
        taskDescription: "Create mockups for the new landing page.",
        taskDate: "2023-10-17",
        category: "Design",
      },
      {
        taskNumber: 2,
        accept: true, // Changed
        newTask: false,
        complete: false,
        fail: false,
        taskTitle: "Client Feedback Review",
        taskDescription: "Analyze and implement client feedback.",
        taskDate: "2023-10-13",
        category: "Client",
      },
      {
        taskNumber: 3,
        accept: false, // Changed
        newTask: false,
        complete: true,
        fail: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Fix reported bugs from QA.",
        taskDate: "2023-10-08",
        category: "Development",
      },
      {
        taskNumber: 4,
        accept: false, // Changed
        newTask: false,
        complete: false,
        fail: true,
        taskTitle: "Server Migration",
        taskDescription: "Attempted but failed due to permissions.",
        taskDate: "2023-10-11",
        category: "DevOps",
      },
    ],
    taskStats: {
      accept: 2, // Changed
      complete: 1,
      fail: 1,
      newTask: 1,
    },
  },
  {
    id: 4,
    firstName: "Amit",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        accept: true, // Changed
        newTask: false,
        complete: false,
        fail: false,
        taskTitle: "Code Review",
        taskDescription: "Review pull requests from the team.",
        taskDate: "2023-10-14",
        category: "Development",
      },
      {
        taskNumber: 2,
        accept: true, // Changed
        newTask: true,
        complete: false,
        fail: false,
        taskTitle: "Onboard New Hire",
        taskDescription: "Train the new developer on project workflow.",
        taskDate: "2023-10-16",
        category: "HR",
      },
      {
        taskNumber: 3,
        accept: false, // Changed
        newTask: false,
        complete: true,
        fail: false,
        taskTitle: "Update Dependencies",
        taskDescription: "Upgrade outdated npm packages.",
        taskDate: "2023-10-07",
        category: "Maintenance",
      },
      {
        taskNumber: 4,
        accept: true, // Changed
        newTask: false,
        complete: false,
        fail: false,
        taskTitle: "Performance Testing",
        taskDescription: "Run load tests on the new API.",
        taskDate: "2023-10-15",
        category: "Testing",
      },
      {
        taskNumber: 5,
        accept: false, // Changed
        newTask: false,
        complete: true,
        fail: false,
        taskTitle: "Security Audit",
        taskDescription: "Check for vulnerabilities in the codebase.",
        taskDate: "2023-10-05",
        category: "Security",
      },
    ],
    taskStats: {
      accept: 3, // Changed
      complete: 2,
      fail: 0,
      newTask: 1,
    },
  },
  {
    id: 5,
    firstName: "Anjali",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskNumber: 1,
        accept: true, // Changed
        newTask: true,
        complete: false,
        fail: false,
        taskTitle: "Marketing Strategy",
        taskDescription: "Plan the Q4 marketing campaign.",
        taskDate: "2023-10-20",
        category: "Marketing",
      },
      {
        taskNumber: 2,
        accept: true, // Changed
        newTask: false,
        complete: false,
        fail: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO rankings.",
        taskDate: "2023-10-18",
        category: "SEO",
      },
      {
        taskNumber: 3,
        accept: false, // Changed
        newTask: false,
        complete: true,
        fail: false,
        taskTitle: "Social Media Posts",
        taskDescription: "Schedule posts for the week.",
        taskDate: "2023-10-09",
        category: "Social Media",
      },
      {
        taskNumber: 4,
        accept: false, // Changed
        newTask: false,
        complete: false,
        fail: true,
        taskTitle: "Ad Campaign",
        taskDescription: "Google Ads campaign failed due to budget.",
        taskDate: "2023-10-12",
        category: "Advertising",
      },
      {
        taskNumber: 5,
        accept: true, // Changed
        newTask: false,
        complete: false,
        fail: false,
        taskTitle: "Analytics Report",
        taskDescription: "Generate monthly traffic report.",
        taskDate: "2023-10-19",
        category: "Analytics",
      },
      {
        taskNumber: 6,
        accept: true, // Changed
        newTask: true,
        complete: false,
        fail: false,
        taskTitle: "Email Newsletter",
        taskDescription: "Design and send the monthly newsletter.",
        taskDate: "2023-10-21",
        category: "Email Marketing",
      },
    ],
    taskStats: {
      accept: 4, // Changed
      complete: 1,
      fail: 1,
      newTask: 2,
    },
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

// function to store date in local storage
export const setLocalStorege = () => {
  //data in local storage will be in the form of key value pair so we need to pass key, value parameters in string form  while calling setItem() and to make the value in string there is stringify() method defined in JSON library

  //   for employees data
  localStorage.setItem("employees", JSON.stringify(employees));

  //   for admin data
  localStorage.setItem("admin", JSON.stringify(admin));
};

// function to get data from local storage
export const getLocalStorege = () => {
  // to get the data from local storage we use getItem() method and the datq we get will be in string form so to received in array form we need to use parse() method which is defined in JSON library.

  //   for employees data
  const employeesData = JSON.parse(localStorage.getItem("employees"));

  //   for admin data
  const adminData = JSON.parse(localStorage.getItem("admin"));

  return { employeesData, adminData };
};
