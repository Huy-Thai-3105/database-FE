import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Trainee.css' ; 
import '../Header/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../Contexts/UserContext';

export default function Trainee () {
    const [data, setData] = React.useState("") ; 
    const {login ,setLogin, setToken} = React.useContext(UserContext) 
    // function logout() {
    //     setLogin(false);
    //     setToken("");
    // }
    console.log(login)
    
    React.useEffect(() => {
    const getAllTrainee = async () => {
        const resp = await fetch(`http://localhost/database/Ass2_HCSDL/Trainee/read`);
        
        if (!resp.ok) {
          alert("Wrong SSN")
        }
        
        const json = await resp.json();
        setData(json)
        console.log(data);
    }
    if (login === false) alert("Bạn chưa đăng nhập"); 
    else 
    getAllTrainee();
    },[])
    return (
    <div>
        <div className="header-container">
            <div className='navbar'>
                <nav className="navbar navbar-expand-lg navbar-light">
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
                <a href='/' onClick={() => {
                    setLogin(false);
                    setToken("");
                }} > Logout </a>
            </div>
        <div> 
        </div>
        </div><br/>
        <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">SSN</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col"> Birth Day</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Company name</th>
                    <th scope="col"> </th>
                </tr>
            </thead>
            <tbody>
                {Array.isArray(data)  && data.map((trainee) => (
                    <tr key={trainee.SSN}>
                        <td>{trainee.SSN}</td>
                        <td>{trainee.Fname}</td>
                        <td>{trainee.Lname}</td>
                        <td>{trainee.DoB}</td>
                        <td>{trainee.address}</td>
                        <td>{trainee.phone}</td>
                        <td>{trainee.name}</td>
                        <td><a href={`/search/${trainee.SSN}`} >Detail</a></td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
  )
}
