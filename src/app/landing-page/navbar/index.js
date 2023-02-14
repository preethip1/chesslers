import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.chesslers}>Chesslers</div>
      <div className={styles.navbar_subcontainer}>
        <div className={styles.search_container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="white"
            viewBox="0 0 16 16"
            className={styles.search_icon}
          >
            {" "}
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />{" "}
          </svg>
          <div className="input-group rounded">
            <input
              className={styles.input_search}
              type="search"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span
              className="input-group-text border-0"
              id="search-addon"
            ></span>
          </div>
        </div>
        <div className={styles.leaderboard}>Leaderboard</div>
        <div className={styles.btn_container}>
          <button className={styles.login_btn}>Login with </button>
          <svg
            height="30"
            viewBox="-12 -12 74 74"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#000000"
              stroke="#000000"
              d="M38.956.5c-3.53.418-6.452.902-9.286 2.984C5.534 1.786-.692 18.533.68 29.364 3.493 50.214 31.918 55.785 41.329 41.7c-7.444 7.696-19.276 8.752-28.323 3.084C3.959 39.116-.506 27.392 4.683 17.567 9.873 7.742 18.996 4.535 29.03 6.405c2.43-1.418 5.225-3.22 7.655-3.187l-1.694 4.86 12.752 21.37c-.439 5.654-5.459 6.112-5.459 6.112-.574-1.47-1.634-2.942-4.842-6.036-3.207-3.094-17.465-10.177-15.788-16.207-2.001 6.967 10.311 14.152 14.04 17.663 3.73 3.51 5.426 6.04 5.795 6.756 0 0 9.392-2.504 7.838-8.927L37.4 7.171z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
