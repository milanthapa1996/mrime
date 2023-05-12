import React, { useState } from "react";
import Layout from "../layout";
import { useNavigate } from "react-router-dom";
const athletes = [
  {
    person_id: 1,
    name: "Lionel Messi",
    email: "lionel@example.com",
    position: "Forward",
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQM5sRjWJoPDVjR56LjKTzyltIZVgV4q2YXw&usqp=CAU",
    status: "good",
    volume: "0.5L",
    normalRange: "0.2L - 0.7L",
    interpretation:
      "Lionel Messi's brain scan shows normal findings. There are no signs of any abnormalities or lesions. The ventricular system, sulci, and gyri are well defined and symmetrical. The brainstem and cerebellum also appear normal.",
  },
  {
    person_id: 2,
    name: "Cristiano Ronaldo",
    email: "ronaldo@example.com",
    position: "Forward",
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSTIKIypK97EcdFcBoDh82Dgmrn_MokhqDQA&usqp=CAU",
    status: "fit",
    volume: "0.6L",
    normalRange: "0.3L - 0.8L",
    interpretation:
      "Cristiano Ronaldo's brain scan reveals no abnormal findings. There are no tumors, lesions, or structural abnormalities observed. The ventricular system, sulci, and gyri are well defined and symmetrical. The brainstem and cerebellum exhibit normal characteristics.",
  },
  {
    person_id: 3,
    name: "Neymar Jr",
    email: "neymar@example.com",
    position: "Forward",
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfTqjINxGia6FcWupD_9PPeGXILnyYJVKXw&usqp=CAU",
    status: "injury",
    volume: "0.4L",
    normalRange: "0.1L - 0.6L",
    interpretation:
      "Neymar Jr's brain scan indicates normal findings without any abnormalities, lesions, or tumors. The ventricular system, sulci, and gyri demonstrate well-defined and symmetric patterns. The brainstem and cerebellum exhibit typical characteristics.",
  },
  {
    person_id: 4,
    name: "Virgil van Dijk",
    email: "vandijk@example.com",
    position: "Defender",
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX-90JD3KHU3XQLNHFL4fpwaixxX4slH-stw&usqp=CAU",
    status: "fit",
    volume: "0.7L",
    normalRange: "0.4L - 0.9L",
    interpretation:
      "Virgil van Dijk's brain scan displays normal findings without any signs of abnormalities, lesions, or tumors. The ventricular system, sulci, and gyri are well defined and symmetrical. The brainstem and cerebellum demonstrate typical characteristics.",
  },
  {
    person_id: 5,
    name: "Kevin De Bruyne",
    email: "debruyne@example.com",
    position: "Midfielder",
    img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsb1p7Gr0co7XDByA0FnFitS9U_Tt0nFNL5w&usqp=CAU",
    status: "good",
    volume: "0.6L",
    normalRange: "0.3L - 0.8L",
    interpretation:
      "Kevin De Bruyne's brain scan reveals normal findings with no abnormalities, lesions, or tumors detected. The ventricular system, sulci, and gyri exhibit well-defined and symmetrical patterns. The brainstem and cerebellum appear typical.",
  },
];
const Root = () => {
  let navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // Filter athletes based on search term and status
  const filteredAthletes = athletes.filter(
    (athlete) =>
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (statusFilter === "" || athlete.status === statusFilter)
  );

  // Get color code based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "good":
        return "bg-green-500";
      case "fit":
        return "bg-blue-500";
      case "injury":
        return "bg-red-200";
      default:
        return "bg-gray-500";
    }
  };

  const redirectToResultsPage = (athlete) => {
    navigate(`/results/${athlete.person_id}`, { state: { athlete } });
  };

  // Map athletes data to table rows
  const tableRows = filteredAthletes.map((athlete) => (
    <tr key={athlete.person_id}>
      <td className="px-4 py-2 border">{athlete.person_id}</td>
      <td className="px-4 py-2 border">{athlete.name}</td>
      <td className="px-4 py-2 border">{athlete.email}</td>
      <td className="px-4 py-2 border">{athlete.position}</td>
      <td className="px-4 py-2 border">
        <span
          className={`inline-block rounded-full w-2 h-2 mr-2 ${
            athlete.status === "injury"
              ? "bg-red-500 animate-pulse"
              : getStatusColor(athlete.status)
          }`}
        ></span>
        {athlete.status}
      </td>
      <td
        className="px-4 py-2 border cursor-pointer text-blue-500 hover:underline"
        onClick={() => redirectToResultsPage(athlete)}
      >
        View Results
      </td>
    </tr>
  ));

  // Handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  // Handle status filter change
  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">List Of Athletes</h1>
        <p className="mb-4">
          Welcome to athletes page. Here, you can find information about some
          talented football players.
        </p>
        {/* table component */}
        <div className="flex items-center justify-between pb-4">
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select an option
            </label>
            <select
              id="atheletes"
              value={statusFilter}
              onChange={handleStatusFilterChange}
              className="px-4 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option value="">Choose status</option>
              <option value="good">Good</option>
              <option value="fit">Fit</option>
              <option value="injury">Injury</option>
            </select>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-athelte"
              value={searchTerm}
              onChange={handleSearchChange}
              className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>

        <table className="w-full">
          <thead className="bg-gray-200 text-left">
            <tr>
              <th className="px-4 py-2 border">Person ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Position</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Result</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        <div className="mt-4">
          <span className="inline-block rounded-full w-4 h-4 bg-green-500 mr-2"></span>
          <span className="mr-4">Good</span>
          <span className="inline-block rounded-full w-4 h-4 bg-blue-500 mr-2"></span>
          <span className="mr-4">Fit</span>
          <span className="inline-block rounded-full w-4 h-4 bg-red-500 mr-2 animate-pulse"></span>
          <span className="mr-4">Injury</span>
          <span className="inline-block rounded-full w-4 h-4 bg-gray-500 mr-2"></span>
          <span>Other</span>
        </div>
      </div>
    </Layout>
  );
};

export default Root;
