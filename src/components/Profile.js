import React from "react";

function Profile(){
    var val = localStorage.getItem('userData');
    var object = JSON.parse(val);
    return(
        <div>
            {/* <p>email</p>
            <small>{object.email}</small> */}
            <table className="table">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>{object.fname}</td>
                    <td>{object.lname}</td>
                    <td>{object.email}</td>
                </tr>
            </table>
        </div>
    )
}

export default Profile;