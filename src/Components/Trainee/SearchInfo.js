import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import UserContext from '../../Contexts/UserContext';

export default function TraineeInfo () {
  //  const [searchItem, setSearchItem] = React.useState(""); 
  const {login ,setLogin, setToken} = React.useContext(UserContext) 

    // function logout() {
    //     setLogin(false);
    //     setToken("");
    // }

    const {id} = useParams() ;
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const getDetail = async () => {
            const resp = await fetch(`http://localhost/database/Ass2_HCSDL/Trainee/detail/${id}`);
            
            if (!resp.ok) {
            alert("Wrong SSN")
            }

            const json = await resp.json();   
            setData(json) ;
        }
        getDetail();
    },[id])
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
                                <a className="nav-link" href="../searchName">Find trainee</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="../getResult">Trainee Result</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="user">
                <FontAwesomeIcon className='icon' icon="fa-solid fa-user" />
                <a href='/' > Logout </a>
            </div>
        <div> 
        </div>
        </div><br/>
        <div className="container">
        <h2>Thông tin chi tiết thực tập sinh</h2><br></br>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">SSN</th>
                    <th scope="col">Name</th>
                    <th scope="col">BestAC</th>
                    <th scope="col">NoS</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
               <tr>
                     <td>{data["SSN"]}</td>
                    <td>{data["name"]}</td>
                    <td>{data["BestAC"]}</td>
                    <td>{data["NoS"]}</td>
                    <td>{data["phone"]}</td>
                    <td>{data["address"]}</td>  
                    {/* {data.map(trainee => 
                        <tr key={trainee.SSN}>
                            <td>{trainee.SSN}</td>
                            <td>{trainee.name}</td>
                            <td>{trainee.BestAC}</td>
                            <td>{trainee.NoS}</td>
                            <td>{trainee.phone}</td>
                            <td>{trainee.address}</td>
                        </tr>
                    )}; */}
                </tr> 
            </tbody>
            </table>
        </div>
    </div>
  )
}
