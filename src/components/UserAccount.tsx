import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
export function UserAccount () {
    return (
        <div className="userAccount">
<Link to={'/account'} >
<AccountCircleIcon color="error" fontSize="large" cursor="pointer" />
</Link>
        </div>
    )
}