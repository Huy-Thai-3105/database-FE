import React, { useState } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../Contexts/UserContext';

export default function AddTrainee() {
    const {login ,setLogin, setToken} = React.useContext(UserContext) 
    function logout() {
        setLogin(false);
        setToken("");
    }

    const [SSN, setSSN] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [DoB, setDoB] = useState("");
    const [photo, setPhoto] = useState("") ; 
    const [Cname, setCname] = useState("");
    const [Cnumber, setCnumber] = useState("");
    const [Caddress, setCaddress] = useState("");
    const [Cphone, setCphone] = useState("");
    const [Edate, setEdate] = useState("");

    const [message, setMessage] = React.useState([]);
    const add = async () => {
        const data = JSON.stringify({
            SSN : SSN,
            Fname : firstName,
            Lname : lastName,
            address : address,
            phone : phone,
            DoB : DoB,
            photo : photo,
            Cnumber : Cnumber,
            Cname : Cname,
            Caddress : Caddress,
            Cphone : Cphone ,
            Edate : Edate
        })
        const config = {
            method: 'post',
            url : 'http://localhost/database/Ass2_HCSDL/Trainee/add',
            headers :{
                'Content-Type': 'application/json'
            },
            data : data
        }
        const response = await axios(config)
        setMessage(response.data) ; 
        console.log(message) ;
    }

 
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the changes
    const handleSSN = (e) => {
        setSSN(e.target.value);
        setSubmitted(false);
    };
    const handlefirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };
    const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };

    const handleDoB = (e) => {
        setDoB(e.target.value);
        setSubmitted(false);
    };
    const handleCname = (e) => {
        setCname(e.target.value);
        setSubmitted(false);
    };
    const handleCnumber = (e) => {
        setCnumber(e.target.value);
        setSubmitted(false);
    };
    const handleCaddress = (e) => {
        setCaddress(e.target.value);
        setSubmitted(false);
    };
    const handleCphone = (e) => {
        setCphone(e.target.value);
        setSubmitted(false);
    };
    const handleEdate = (e) => {
        setEdate(e.target.value);
        setSubmitted(false);
    };

    // Handling the submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (login === false) alert("Bạn chưa đăng nhập"); 
        else
        if (SSN && firstName && lastName && address && phone && DoB && photo && Cname && Cnumber && Caddress && Cphone && Edate) {
            add();
            setError(false);
            setSubmitted(true);
        } else {
            setError(true);     
        }
        alert(message["message"]) ;
    };
  

    return (
    <div>
         <div className="header-container">
            <div className='navbar'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="./trainee">Trainee</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="./searchName">Find trainee</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="./getResult">Trainee Result</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="./add">Add trainee</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="user">
                <FontAwesomeIcon className='icon' icon="fa-solid fa-user" />
                <a href='/' onClick={logout}> Logout </a>
            </div>
        <div> 
            </div>
    </div>
    <div className="container"  >
        <form>
            <h1>Add Trainee</h1>
            <div className="row">
                <div className="col">
                    <label>SSN</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter SSN"
                        value={SSN}
                        onChange={handleSSN}
                    />
                </div>
                <div className="col">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={handlefirstName}
                    />
                </div>
                <div className="col">
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={handleLastName}
                    />
                </div>
            </div>
                <div className="mb-3">
                    <label>Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter address"
                        value={address}
                        onChange={handleAddress}
                    />
                </div>
                <div className="mb-3">
                    <label>Phone Number</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Address"
                        value={phone}
                        onChange={handlePhone}
                    />
                </div>
                <div className="mb-3">
                    <label>Date of Birth</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Birthday"
                        value={DoB}
                        onChange={handleDoB}
                    />
                </div>
                <div className="mb-3">
                    <label>Photo</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter link photo"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                    />
                </div>
                <div className="row">
                    <div className="col">
                        <label>Company Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Enter Company Name"
                            value={Cname}
                            onChange={handleCname}
                        />
                    </div>
                    <div className="col">
                        <label>Company Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Company Number"
                            value={Cnumber}
                            onChange={handleCnumber}
                        />
                    </div>
                </div>
               
                <div className="mb-3">
                    <label>Company Phone Number</label>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Company Phone Number"
                        value={Cphone}
                        onChange={handleCphone}
                    />
                </div>
                <div className="mb-3">
                    <label>Company Address</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Company Address"
                        value={Caddress}
                        onChange={handleCaddress}
                    />
                </div>
                <div className="mb-3">
                    <label>Enter Date</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Company EDay"
                        value={Edate}
                        onChange={handleEdate}
                    />
                </div>            
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
                </form>
    </div> 
    </div>

    );
}
