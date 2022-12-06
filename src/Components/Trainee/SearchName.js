import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../Contexts/UserContext';

export default function TraineeSearchName () {

    const [searchName, setSearchName] = React.useState(""); 

    const {login ,setLogin, setToken} = React.useContext(UserContext) 

    // function logout() {
    //     setLogin(false);
    //     setToken("");
    // }
    const [info, setInfo] = React.useState([]);
    React.useEffect(() =>{ 
        const searchByName = async () => {

            const data = JSON.stringify({
                name : searchName
            })
            const config = {
                method: 'post',
                url : 'http://localhost/database/Ass2_HCSDL/Trainee/search',
                headers :{
                    'Content-Type': 'application/json'
                },
                data : data
            }
            const response = await axios(config)
            setInfo(response.data)
        }
        if (login === false) alert("Bạn chưa đăng nhập"); 
        else
        searchByName();
    },[searchName])
    return (
    <div  >
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
                <a href='/'  onClick={()=>
                {setLogin(false);
                 setToken("");
         }} > Logout </a>
            </div>
        <div> 
        </div>
        </div><br/>
        <div className="container">
        <div className='searchBox'>
            <div class="input-group rounded">
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" 
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                />
                </div>
            </div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">SSN</th>
                    <th scope="col">Name</th>
                    <th scope="col">BestAC</th>
                    <th scope="col">NoS</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
               {/* <tr>
                     <td>{info.SSN}</td>
                    <td>{info.name}</td>
                    <td>{info.photo}</td>
                    <td>{info.phone}</td>
                    <td>{info.address}</td>  
                </tr>  */}
                {Array.isArray(info)  && info.map(trainee => 
                    <tr key={trainee.SSN}>
                        <td>{trainee.SSN}</td>
                        <td>{trainee.name}</td>
                        <td>{trainee.Photo}</td>
                        <td>{trainee.phone}</td>
                        <td>{trainee.NoS}</td>
                        <td>{trainee.address}</td>
                        <td><a href={`/search/${trainee.SSN}`} >Detail</a></td>
                    </tr>
                )}  
            </tbody>
            </table>
        </div>
    </div>
  )
}
