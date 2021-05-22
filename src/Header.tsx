export interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    return ( <div className="header">
        <h1>Company`s Name</h1>
        <a href="/">Home</a>
    </div> );
}
 
export default Header;