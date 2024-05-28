import { NavLink, useNavigate, useParams } from "react-router-dom";
import { BooksContext } from "../../Elements/BookContext/BookListContext";
import { LinkViewMore } from "../../Styles/NavLinkViewMore/NavLinkViewMore.styled";
import {
  BooksReportWrapper,
  UserPageContainer,
  UserWrapper,
} from "../../Styles/UserPage/UserPage.styled";
import { useContext, useEffect, useState } from "react";
import Loader from "../../Elements/Loader/Loader.styled";
import ButtonGeneralStyled from "../../Elements/ButtonGeneral/ButtonGeneral.styled";
import { LoginStatus } from "../../requests/LoginStatus";
import { HttpMethods } from "../../requests/HttpMethods";
import Request from "../../requests/Request";

export default function UserReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reportType, setReportType] = useState([]); // State to hold report type

  

  useEffect(() => {
    async function fetchData() {
      const loggedUser = LoginStatus.getLoginStatus();
      setUser(loggedUser);

      const dbUser = await Request.sendRequest(
        `/user/byEmail/${loggedUser.email}`,
        HttpMethods.GET
      );

      

      let fetchedReports = [];
      const reportUrlPattern = `/user/${dbUser.id}/report?type=`
      try {
        let userBalanceReport = await Request.sendRequest(
          `${reportUrlPattern}user_balance_report`,
          HttpMethods.GET
        );
        let allBooksReport = await Request.sendRequest(
          `${reportUrlPattern}all_books_report`,
          HttpMethods.GET
        );
        let borrowedBooksReport = await Request.sendRequest(
          `${reportUrlPattern}borrowed_books_report`,
          HttpMethods.GET
        );

        userBalanceReport.reportType = "user_balance_report"
        allBooksReport.reportType = "all_books_report"
        borrowedBooksReport.reportType = "borrowed_books_report"

        console.log(borrowedBooksReport)

        fetchedReports.push(userBalanceReport)
        fetchedReports.push(allBooksReport)
        fetchedReports.push(borrowedBooksReport)

        console.log("yeeeeeeeeeeeeeeees")
        console.log(fetchedReports)
      } catch (error) {
        console.log("noooooooooooo")
        console.log(error)
        fetchedReports = [];
      }
      setReports(fetchedReports);
    }

    fetchData();
  }, []);

  const [user, setUser] = useState([]);

  
  if (loading) {
    return (
      <UserPageContainer>
        <Loader />
        <h2 style={{ color: "white" }}> Loading...</h2>
      </UserPageContainer>
    );
  } else {
    return (
      <UserPageContainer>
        <UserWrapper>
          <h1>Reports</h1>
        </UserWrapper>
        <BooksReportWrapper>
          <h2>{user.firstName}'s Report List</h2>
          {reports.map((report) => {
            return (
              <div key={report.id}>
                {(() => {
                  if (report.reportType === "borrowed_books_report") {
                    

                    return (
                      // Return the JSX
                      <div className="report-card" key={report.id}>
                        <p>Current borrowed books</p>
                        {report.borrowedBooks
                          .map(book => {
                            return(
                              <div className="my-row">
                              <div className="report-card" key={report.id}>
                                {book[0].title}
                              </div>
                              <div className="report-card" key={report.id}>
                                Issued date: {book[1][0]}
                              </div>
                              <div className="report-card" key={report.id}>
                                Return date: {book[1][1]}
                              </div>
                              </div>
                            )
                          })}
                      </div>
                    );
                  } else if (report.reportType === "user_balance_report") {
                    return (
                      // Return the JSX
                      <div className="report-card" key={report.id}>
                        <p>Your balance</p>
                        <p>Balance: {report.balance}</p>
                        <p>Books borrowed: {report.booksBorrowed}</p>
                      </div>
                    );
                  } else if (report.reportType === "all_books_report") {
                    return (
                      // Return the JSX
                      <div className="report-card" key={report.id}>
                        <p>All books</p>
                        <p>Count: {report.allBooksCount}</p>
                        <p>Aerage price: {report.averagePrice}</p>
                        <p>Max price: {report.maxPrice}</p>
                        <p>Min price: {report.minPrice}</p>
                      </div>
                    );
                  }
                })()}
              </div>
            );
          })}
        </BooksReportWrapper>
      </UserPageContainer>
    );
  }
}

// import { NavLink, useNavigate, useParams } from "react-router-dom"; // Assuming you are using react-router for routing
// import { BooksContext } from "../../Elements/BookContext/BookListContext";
// import { LinkViewMore } from "../../Styles/NavLinkViewMore/NavLinkViewMore.styled";
// import {
//   BooksReportWrapper,
//   UserPageContainer,
//   UserWrapper,
// } from "../../Styles/UserPage/UserPage.styled";
// import { useContext, useEffect, useState } from "react";
// import Loader from "../../Elements/Loader/Loader.styled";
// import ButtonGeneralStyled from "../../Elements/ButtonGeneral/ButtonGeneral.styled";
// import { LoginStatus } from "../../requests/LoginStatus";
// import { HttpMethods } from "../../requests/HttpMethods";
// import Request from "../../requests/Request";

// export default function UserReports() {
//   const [reports, setReports] = useState([]);
//   const [user, setUser] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const { id } = useParams();

//   useEffect(() => {
//     async function fetchData() {
//       const loggedUser = LoginStatus.getLoginStatus();
//       setUser(loggedUser);

//       const dbUser = await Request.sendRequest(
//         `/user/byEmail/${loggedUser.email}`,
//         HttpMethods.GET
//       );

//       const urlParams = new URLSearchParams(window.location.search);
//       const reportType = urlParams.get("type"); // Get the report type from the URL query parameter

//       let fetchedReports;
//       try {
//         fetchedReports = await Request.sendRequest(
//           `/user/${dbUser.id}/report?type=${reportType}`,
//           HttpMethods.GET
//         );
//       } catch (error) {
//         fetchedReports = [];
//       }
//       setReports(fetchedReports);
//     }

//     fetchData();
//   }, [id]);

//   if (loading) {
//     return (
//       <UserPageContainer>
//         <Loader />
//         <h2 style={{ color: "white" }}> Loading...</h2>
//       </UserPageContainer>
//     );
//   } else {
//     return (
//       <UserPageContainer>
//         <UserWrapper>
//           <h1>Reports</h1>
//         </UserWrapper>
//         <BooksReportWrapper>
//           <h2>{user.firstName}'s Report List</h2>
//           {reports.map((report) => {
//             return (
//               <div key={report.id}>
//                 {(() => {
//                   if (reportType === "borrowed_books_report") {
//                     <div className="report-card" key={report.id}>
//                       <p>{report.userEmail}</p>
//                       <p>{report.borrowedBooks}</p>
//                     </div>;
//                   } else if (reportType === "user_balance_report") {
//                     <div className="report-card" key={report.id}>
//                       <p>{report.allBooksCount}</p>
//                       <p>{report.balance}</p>
//                       <p>{report.booksBorrowed}</p>
//                     </div>;
//                   } else if (reportType === "all_books_report") {
//                     <div className="report-card" key={report.id}>
//                       <p>{report.allBooksCount}</p>
//                       <p>{report.averagePrice}</p>
//                       <p>{report.maxPrice}</p>
//                       <p>{report.minPrice}</p>
//                     </div>;
//                   }
//                 })()}
//               </div>
//             );
//           })}
//         </BooksReportWrapper>
//       </UserPageContainer>
//     );
//   }
// }
