import React from 'react';
import RoomTable from '../components/RoomTable.js';
import { useState, useEffect } from 'react';

function Admin() {
  const [items, setItems] = useState(null);
  useEffect(() => {
    console.log('app useeffect!!');
    let url = 'https://62c63193a361f72512968244.mockapi.io/api/rooms';

    // if (searchTerm.length > 0) {
    //   url = url + '?search=' + searchTerm;
    // }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  return <ItemTable data={items} />;
}
export default Admin;
