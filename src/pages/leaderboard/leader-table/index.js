import styles from "./leader-table.module.css";
import { useEffect, useState } from "react";

function LeaderTable() {
  const [users, setUsers] = useState([]);
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  async function fetchUsers() {
    try {
      const response = await fetch(API_URL);
      const users = await response.json();
      return users;
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div>
      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.heading}>
                LeaderBoard
              </th>
              <th></th>
              <th></th>
              <th className={styles.weekly}>
                Weekly
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr>
                  <td className={styles.table_data}>{`# ${index + 1}`}</td>
                  <td className={styles.table_data}>{user.username}</td>
                  <td className={styles.name}>{user.name}</td>
                  <td className={styles.table_data}>{50 - index}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderTable;
