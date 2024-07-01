import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import "./Accounts.css";

const Account = ({ jwt, id, accountName, accountCn, notificationEndpoint, balance, button, }) => {

    const navigate = useNavigate();

    return (
        <div className="card-container">
            <div className="card-text">
                <h3 className="card-heading">{accountName}</h3>
                <span className="card-total">R{total} Budgeted</span>
            </div>
            {
                progressBar && (
                    <>
                        <div className="card-bar">
                            <progress className="progress-bar" value={progress} />
                        </div>
                        <div className="card-amounts">
                            <span className="card-amount">R{spent} spent</span>
                            <span className="card-amount">R{remaining} remaining</span>
                        </div>
                        {
                            (remaining < 0) && (
                                <div className="card-over">
                                    <span className="text-over">You are over budget!</span>
                                </div>
                            )
                        }
                    </>
                )
            }
            {
                button && (
                    <div className="card-button">
                        <button className="card-button-text" onClick={() => {
                            navigate(`/account/${accountName}`, { state: { jwt, name, total, spent } })
                        }}>View More</button>
                    </div>
                )
            }
        </div>
    )
}

export default BudgetCard; 