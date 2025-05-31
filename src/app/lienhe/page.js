'use client'
import { useEffect, useState } from "react";
import styles from './page.module.css';
export default function LienHe() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/users");
        const result = await response.json();
        if (response.ok) {
          console.log("Users:", result.data);
          setUsers(result.data);
        } else {
          console.error("Error fetching users:", result.error);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }


    fetchUsers();
  }, []);


  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Liên hệ</h2>
      {users.map((user) => (
        <div key={user._id} className={styles.container}>
          <img
            src={user.ImageURL}
            alt={`Avatar of ${user.Name}`}
            className={styles.avatar}
          />
          <p><strong>Name: {user.Name}</strong></p>
          <p><strong>Address: {user.Address}</strong></p>
        </div>
      ))}
    </div>
  );
}