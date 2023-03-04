import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Profiles = () => {

    const [users, setUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(users);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://express-t4.onrender.com/api/users');
            const data = await response.json();
            setUsers(data);
            setSearchResults(data);
        };
        fetchData();
    }, []);

    const handleSearchQueryChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query) {
            const filteredData = users.filter(item =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredData);
        } else if (query === '') {
            setSearchResults(users);
        }
    };

    useState(() => {
        setSearchResults(users);
      }, [users]);

    return (
        <div>

            <h1>Profiles</h1>

            <div>
                <input style={{'margin-left': '60px'}} type="text" value={searchQuery} onChange={handleSearchQueryChange} placeholder="Search Name" />
                <ul className='column'>
                    {searchResults.map(user => (
                        <>
                        <Link to="/profiledetails" state={{ id: user._id }} className="link">
                            <div className='boxprofile'>
                                <img src={user.picture} alt="" />
                                <p>{user.name}</p>
                            </div>
                        </Link>
                    </>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Profiles
