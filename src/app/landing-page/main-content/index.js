import styles from "./main-content.module.css";
import {CHESSBOARD_IMAGES} from '../../constant';


function MainContent() {
  return (
    <div className={styles.main_container}>
      <div className={styles.main_content_container}>
        <div className={styles.left_container}>
          <p className={styles.heading}>
            Play
            <br /> Chess.
          </p>
          <p className={styles.heading}>
            Get
            <br /> Paid.
          </p>
          <p className={styles.sub_heading}>
            Join now to get $5 and get started
          </p>
        </div>
        <div className={styles.right_container}>
          <img
            alt="board"
            src={CHESSBOARD_IMAGES.chessboard}
            className={styles.board}
          />
          <div>
            <img
              alt="king"
              src={CHESSBOARD_IMAGES.king}
              className={styles.king_icon}
            />
            <img
              alt="knight"
              src={CHESSBOARD_IMAGES.knight}
              className={styles.knight_icon}
            />
            <img
              alt="pawn"
              src={CHESSBOARD_IMAGES.pawn}
              className={styles.pawn_icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
