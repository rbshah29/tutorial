import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const ProfileDetails = () => {

    const {state} = useLocation();

    const [users, setUsers] = useState([]);

    const id = state.id;

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
          const data = await response.json();
          setUsers([data]);
          console.log(data);
        };
        fetchData();
    }, [id]);

  return (
    <div>
      <ul>
        {users.map(user => (
            <div key={user.id} onClick={() => setUsers([user])}>
              <div className='box'>
                <p>{user.picture}</p>
                <h3><b>{user.name}</b></h3>
                <p><b>About </b>:- {user.about}</p>
                <p><b>Gender </b>:- {user.gender}</p>
                <p><b>Eyecolor </b>:- {user.eyeColor}</p>
                <p><b>Email </b>:- {user.email}</p>
                <p><b>Company </b>:- {user.company}</p>
                <p><b>Balance </b>:- {user.balance}</p>
                <p><b>Age </b>:- {user.age}</p>
                <p><b>Phone Number </b>:- {user.phone}</p>
                <p><b>Address </b>:- {user.address}</p>
                <p><b>Message </b>:- {user.greeting}</p>
                <p><b>Extra </b>:- {user.favoriteFruit}</p>
              </div>
            </div>
        ))}
        </ul>

    </div>
  )
}

export default ProfileDetails