// import React, { useEffect, useState } from "react";
// import { CSVReader } from "react-papaparse";
// import Papa from "papaparse";
// import { CSVLink, CSVDownload } from "react-csv";
// import DataTable from "react-data-table-component";

// export default function CSVReader1() {
//   const [data, setData] = useState([]);
//   const [columns, setColumns] = useState([]);

//   const buttonRef = React.createRef();

//   const parseFile = (file) => {
//     Papa.parse(file, {
//       header: true,
//       complete: (results) => {
//         setData(results.data);
//       },
//     });

//     const handleOpenDialog = (e) => {
//       // Note that the ref is set async, so it might be null at some point
//       if (buttonRef.current) {
//         buttonRef.current.open(e);
//       }
//     };

//     const handleOnFileLoad = (data) => {
//       console.log("---------------------------");
//       console.log(data);
//       console.log("---------------------------");
//       setData(data);
//     };

//     const handleOnError = (err, file, inputElem, reason) => {
//       console.log(err);
//     };

//     const handleOnRemoveFile = (data) => {
//       console.log("---------------------------");
//       console.log(data);
//       console.log("---------------------------");
//     };

//     const handleRemoveFile = (e) => {
//       // Note that the ref is set async, so it might be null at some point
//       if (buttonRef.current) {
//         buttonRef.current.removeFile(e);
//       }
//     };

//     //   if (!data) return <div>"waiting"</div>;
//     //   console.log("CHECK:" + data[0].data);
//     //   console.log("CHECK:" + data);

//     return (
//       <div>
//         <CSVReader
//           ref={buttonRef}
//           onFileLoad={handleOnFileLoad}
//           onError={handleOnError}
//           noClick
//           noDrag
//           onRemoveFile={handleOnRemoveFile}
//           header={true}
//         >
//           {({ file }) => (
//             <aside
//               style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 marginBottom: 10,
//               }}
//             >
//               <button
//                 type="button"
//                 onClick={handleOpenDialog}
//                 style={{
//                   borderRadius: 0,
//                   marginLeft: 200,
//                   marginRight: 0,
//                   width: "10%",
//                   paddingLeft: 0,
//                   paddingRight: 0,
//                 }}
//               >
//                 Browse file
//               </button>
//               <div
//                 style={{
//                   borderWidth: 1,
//                   borderStyle: "solid",
//                   borderColor: "#ccc",
//                   height: 45,
//                   lineHeight: 2.5,
//                   marginTop: 5,
//                   marginBottom: 5,
//                   paddingLeft: 13,
//                   paddingTop: 3,
//                   width: "30%",
//                 }}
//               >
//                 {file && file.name}
//               </div>
//               <button
//                 style={{
//                   borderRadius: 0,
//                   marginLeft: 0,
//                   marginRight: 0,
//                   paddingLeft: 20,
//                   paddingRight: 20,
//                 }}
//                 onClick={handleRemoveFile}
//               >
//                 Remove
//               </button>
//             </aside>
//           )}
//         </CSVReader>
//         {data ? "" : <CSVLink data={data}>Download table</CSVLink>}
//         <DataTable highlightOnHover columns={columns} data={data} />

//         {/* {data.map((columns, i) => {
//           return (
//             <div>
//               <p> Barcode: {columns} </p>
//               <p> Owner: {columns.Owner} </p>
//               <p> Volume: {columns.Volume} </p>
//               <p> Buffer: {columns.Buffer} </p>
//               <p> SampleType: {columns.SampleType} </p>
//               <br></br>
//             </div>
//           );
//         })} */}
//       </div>
//     );
//   };
// }
