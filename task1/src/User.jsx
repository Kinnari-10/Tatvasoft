import {Link} from "react-router-dom";

export const User = ({name,age}) => {
    
    return <h1><center>This is User Component<br />{name} is age of {age}<br /> <Link to="/">Home</Link><br/></center></h1>;
};

export const Home = () => {
    return <h1><center>This is Home Component. <br/> <Link to="/user">user</Link></center></h1>;
};