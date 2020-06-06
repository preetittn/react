// import React,{useState,useEffect} from 'react';

// import Button from '../../../../UI/Button/Button';
// import { connect } from 'react-redux';
// import axios from 'axios';
// const SingleCategory=props=>{

//     const{access_token}=props;
//     useEffect(()=>{
//         // setLoading(true);
//         const headers = {
//             Authorization: 'Bearer ' + access_token
//         }
//         axios.get('http://localhost:8080/category/all',{ headers: headers })
//         .then(response=>{
//             setCategories(response.data);
//             console.log(response.data)
//             // setLoading(false);
//         })
//     },[access_token])

//    // const [loading,setLoading]=useState(false);
//     const [name,setName]=useState("")
//     const [categories,setCategories]=useState([]);  
//     const[categoryId,setCategoryId]=useState("");


//     const submitHandler=(event)=>{
//         event.preventDefault();
//         // setLoading(true);
//         // const headers = {
//         //     Authorization: 'Bearer ' + access_token
//         // }
//     }
//         const fetchCategoryHandler = (id) => {
//             const headers = {
//                 Authorization: 'Bearer' + access_token
//             }
//             axios.get('http://localhost:8080/category/' + id, { headers: headers })
//                 .then(response => {
//                     console.log(response);
//                 }).catch(error => {
//                     console.log(error);
//                 });
    
//         };
    
//         // let query='?';
//         // query=query+`name=${name}&id=${categoryId}`;
//         // axios.put('http://localhost:8080/category/'+query,{},{headers:headers})
//         // .then(response=>{
//         //     console.log(response.data);
//         //     props.history.push("/categoryOpr")
//         //     alert(response.data);
//         //     // setLoading(false);
//         // })
        

    
        
//     // // const categoryChangeHandler = (e) => setCategoryId(e.target.value);

//     // const nameChangedHandler=(event)=>{
//     //     setName(event.target.value)
//     // }
//     const showList=(l)=>{
//         if(l>0){
//             return <SingleCategoryView fetchedUsers={users} userRole={params.role.value}/>;
//         };
//     };
  
//     return(
//         // <div className="container" style={{width:"50%",border:"2px solid green",padding:"50px"}}>
//         //     <form onSubmit={submitHandler}>
//         //         <div>
//         //         <h4>Category id</h4>
//         //         <input type="text" placeholder="Category id"  onChange={idChangedHandler}/>
//         //         </div>
//         //         <div>
//         //         <h4>Name of Category</h4>
//         //         <input type="text" placeholder="Category name" onChange={nameChangedHandler}/>
//         //         <div>
//         //         <Button btnType="Success" >Submit</Button>
//         //         </div>
//         //         </div>
//         //     </form>
           
//         // </div>
//         <>
        
        
//         <table className="table table-bordered table-hover table-responsive" style={{marginLeft:"15%", marginRight:"15%"}}>
//         <thead className="thead-dark">
//             <tr>
//             <th scope="col">#</th>
//             <th scope="col">Category Id</th>
//             <th scope="col">Name</th>
//             {/* <th scope="col">Parent</th>
//             <th scope="col">Children</th>
//             <th scope="col">Field Values</th> */}
//             {/* <th scope="col">Update</th> */}
//             </tr>
//         </thead>
//         <tbody>
//             {categories.map((category,index) => (
//                 <tr key={category.category.id}>
//                     <th scope="row">{index}</th>
//                     <td>{category.category.id}</td>
//                     <td>{category.category.name}</td>
//                     {/* <td>{category.category.parentId ? category.category.parentId.name : 'No data'}</td>
//                     <td>{category.childCategory.length > 0 ? category.childCategory.map((c) => <div key={c.id}>{c.name}<br /></div>) : 'No data'}</td> */}
//                     {/* <td>{category.filedValuesSet.length > 0 ? <button type="submit" className="btn btn-primary" onClick={() => metadataClick(category.filedValuesSet)} >Metadata</button> : 'No data'}</td> */}
//                     {/* <td><button type="submit" className="btn btn-success" onClick={() => updateClick(category.category.id)} >Update</button></td> */}
//                 </tr>
//             ))} 
//         </tbody>
//     </table>
//     <div className="container" style={{width:"50%",border:"2px solid green",padding:"50px"}}>
//             <form onSubmit={submitHandler}>
//                 {/* <div className="col-lg-9">
//                                     <select id="categoryId" className="form-control" size="0"  >
//                                         <option value="default">ID-Category</option>
//                                             {categories.map(category => (
//                                                 <option key={category.category.id} value={category.category.id} >{category.category.id}-{category.category.name}</option>
//                                             ))}
//                                     </select>
//                                 </div> */}
//                 <input type="text" placeholder="enter category id" onChange={fetchCategoryHandler}/>
//                 <Button btnType="Success" onChange={fetchCategoryHandler}>fetch Category</Button>
//             </form>
//         </div>
               
//             </>
//     )
// };
// const mapStateToProps=state=>{
//     return{
//         access_token:state.auth.token
//     }
// }

// export default connect(mapStateToProps)(SingleCategory)