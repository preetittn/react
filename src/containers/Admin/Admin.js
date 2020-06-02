import React,{useState} from 'react';
import Aux from '../../hoc/Aux/Aux';
import {updateObject,checkValidity} from '../../Shared/Utility';
import Input from '../../UI/Input/Input';
import Spinner from '../../UI/Spinner/Spinner';
import AdminUser from '../../components/AdminUser/AdminUser';
import axios from 'axios';
// import Button from '../../UI/Button/Button';
import classes from './Admin.module.css';

const Admin=React.memo((props)=>{
    const [params,setParams]=useState({
        role:{
            elementType:"select",
            elementConfig:{
                options:[
                    // {value:"none",displayValue:"User Role.."},
                    {value:"cust",displayValue:"Customer"},
                    {value:"sell",displayValue:"Seller"}
                ]
            },
            validation:{},
            value:"none",
            isValid:true
        },
        SortBy:{
            elementType:"select",
            elementConfig:{
                options:[
                    {value:"none",displayValue:"Sort by.."},
                    {value:"id",displayValue:"id"},
                ],
            },
            validation:{},
            value:"none",
            isValid:true
        },
        page:{
            elementType:"input",
            elementConfig:{
                type:"number",
                placeholder:"Page number",
            },
            value:"",
            validation:{
                required:true,
            },
            isValid:false,
            touched:false,
        },
        size: {
            elementType: "input",
            elementConfig: {
              type: "number",
              placeholder: "Size(no. of users on each page)",
            },
            value: "",
            validation: {
              required: true,
            },
            isValid: false,
            touched: false,
          },

    });

    const [loading,setLoading]=useState(false);
    const [users,setUsers]=useState([]);

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("Param in submit : ", params);
        setLoading(true)
        let result = null;
    
        const paramData = {};
    
        let query = "?";
        for (let key in params) {
          if (key !== "role") {
            if (key !== "SortBy") {
              query = query + "&" + key + "=" + params[key].value;
            } else {
              query = query + key + "=" + params[key].value;
            }
          }
        }
    
        console.log("Query passed is",query)
    
        for (let key in params) {
          paramData[key] = params[key].value;
        }
    
        console.log("Role is",paramData.role)

        // let fetchedData = null;    
        // if (paramData.role === "cust") {
        // fetchedData =axios.get("http://localhost:8080/admin/customers", {
        // headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
        // }+query)
        // setLoading(false)}
        // else
        // {
        // fetchedData =axios.get("http://localhost:8080/admin/sellers", {
        // headers: { Authorization: "Bearer " + localStorage.getItem("access_token") },
        // }+query)
        // setLoading(false)
        // }


        let fetchedData = null;    
        if (paramData.role === "sell") {
            fetchedData = axios.get("http://localhost:8080/admin/sellers"+query)
            setLoading(false)
        } else  {
            fetchedData = axios.get("http://localhost:8080/admin/customers"+query)
            setLoading(false)
        }
    
        fetchedData.then(response => {
            result = response.data
            setUsers(result)
            console.log("Data received is: ",response)
            console.log("Data fetched is",response.data)
        }).catch(error => {
            console.log("Error is",error)
        })
      };

    const formElementsArray=[];
    for(let key in params){
        formElementsArray.push({
            id:key,
            config:params[key],
        });
    }

    const inputChangedHandler=(event,paramName)=>{
        const updatedSchedules = updateObject(params, {
            [paramName]: updateObject(params[paramName], {
              value: event.target.value,
              valid: checkValidity(event.target.value, params[paramName].validation),
              touched: true,
            }),
          });
          setParams(updatedSchedules);
    }

    const showList=(l)=>{
        if(l>0){
            return <AdminUser fetchedUsers={users} userRole={params.role.value}/>;
        };
    };


    let form=formElementsArray.map((formElement)=>(
        <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={(event) => inputChangedHandler(event, formElement.id)}/>
    ));

    if(loading){
        form=<Spinner/>;
    }
    return(
        <Aux>
            <div className={classes.AdminData}> 
                <form onSubmit={submitHandler}>
                    <h3><i className="fa fa-user">  Admin</i></h3>
                    <p>List of all registered users.</p>
                    {form}
                    <button type="submit" class="btn btn-primary">Get Users</button>
                </form>
            </div>
            <div>
                <section>{showList(users.length)}</section>
            </div>
        </Aux>
    );
})
export default Admin;