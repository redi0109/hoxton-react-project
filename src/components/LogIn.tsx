import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';
import { Link } from 'react-router-dom';

export function LogIn (){
    return(
<div>
    <Link to="/signIn">
<Face6TwoToneIcon color="error" fontSize="large" cursor="pointer" />
</Link>
</div>
    )
}