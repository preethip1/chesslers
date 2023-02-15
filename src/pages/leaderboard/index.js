import LeaderTable from "./leader-table";
import Navbar from "../../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function LeaderBoard() {
  return (
    <div>
      <Navbar />  
      <LeaderTable />
    </div>
  );
}

export default LeaderBoard;
