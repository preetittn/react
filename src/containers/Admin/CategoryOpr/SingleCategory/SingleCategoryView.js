// import React, { useState } from "react";
// import Button from '../../UI/Button/Button';
// import Spinner from '../../UI/Spinner/Spinner';
// import axios from "axios";
// import classes from "./AdminUser.module.css";

// const SingleCategoryView = (props) => {

//     const [category, setCategory] = useState([])

//     const count = 1;
//     const [loading, setLoading] = useState(false)

//     const [id, setId] = useState("");
//     const { access_token } = props;

//     // const submitHandler = (event) => {
//     //     event.preventDefault();
//     //     const postData = {
//     //         "id": id
//     //     }
//         const headers = {
//             Authorization: 'Bearer' + access_token
//         }
//         axios.get('http://localhost:8080/category/' + id,{ headers: headers })
//             .then(response => {
//                 setLoading(false)
//                 // props.history.push("/fetchAddress")
//                 // alert(response.data);
//                 console.log(response.data)
//             })
//             .catch(error => {
//                 setLoading(false);
//                 console.log(error.response.data)
//             })
//     }

//     if (loading) {
//         return <Spinner />
//     }

//     return (
//         <div >
//             <h4>Fetched users</h4>
//             <table className="table table-sm" >
//                 <thead>
//                     <tr>
//                         <th scope="col">#</th>
//                         <th scope="col">category id</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Parent</th>
//                         <th scope="col">Children</th>
//                         {/* <th scope="col">Field values</th> */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {props.category.map((category, index) => (
//                         <tr key={category.id}>
//                             <th scope="row">{index}</th>
//                             <td >{category.category.id}</td>
//                             <td>{category.category.name}</td>
//                             <td>{category.category.parentId ? category.category.parentId.name : 'No data'}</td>
//                             <td>{category.childCategory.length > 0 ? category.childCategory.map((c) => <div key={c.id}>{c.name}<br /></div>) : 'No data'}</td>

//                             {/* <td>{String(user.active)}</td>
//                             <td><Button clicked ={(id)=>activateUserHandler(user.id)} btnType="Success">Activate</Button></td>
//                             <td><Button clicked ={(id)=>deactivateUserHandler(user.id)} btnType="Danger">Deactivate</Button></td> */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default SingleCategoryView;