import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './GetResult.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../Contexts/UserContext';

export default function GetResult() {
    const {login ,setLogin, setToken} = React.useContext(UserContext) 
    
    const [result, setResult] = useState([]); 
    const [ssn, setSSN] = useState("") ; 
    const [year, setYear] = useState("") ;
    const [data, setData] = useState("") ;
   

    React.useEffect(() =>{
        const traineeResult = async () => {
            const data = JSON.stringify({
                SSN : ssn,
                year: year
            })
            const config = {
                method: 'post',
                url : 'http://localhost/database/Ass2_HCSDL/Trainee/getResult',
                headers :{
                    'Content-Type': 'application/json'
                },
                data : data
            }
            const respone = await axios(config)
            setResult(respone.data) ; 
            console.log(respone.data)
        }
        if (login === false) alert("Bạn chưa đăng nhập"); 
        else    
        traineeResult() ; 

        const getDetail = async () => {
            const resp = await fetch(`http://localhost/database/Ass2_HCSDL/Trainee/detail/${ssn}`);
            
            if (!resp.ok) {
            alert("Wrong SSN")
            }

            const json = await resp.json();   
            setData(json) ;
        }
        getDetail();
    },[ssn,year])
    
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
                <FontAwesomeIcon className='icon' icon="fa-solid fa-user"  />
                <a href='/' onClick={()=>
                {setLogin(false);
                 setToken("");
         }}> Logout </a>
            </div>
        <div> 
        </div>
        </div><br/>
        <div className="container">
            <form >
                <div className="form-group">
                    <label for="ssn">SSN</label>
                    <input type="text" className="form-control" id="ssn"  placeholder="Enter Trainee SSN"
                        value={ssn}
                        onChange={(e) => setSSN(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label for="year">Year</label>
                    <input type="text" className="form-control" id="year" placeholder="Password"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <br/>
                <h4>Trainee name: {data["name"]}</h4> 
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Episode</th>
                            <th scope="col">Total Votes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(result)  && result.map(trainee => 
                        <tr key={trainee.Episode}>
                            <td>{trainee.Episode}</td>
                            <td>{trainee.vote}</td>
                        </tr>
                        )}  
                    </tbody>
                </table>
            </form>
        </div>
    </div>
    )
}
