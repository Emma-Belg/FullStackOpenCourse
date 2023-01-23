const Header = (props) => { 
    const content = props.content;
    
    return (
        <h1>{content[0].course}</h1> 
    )
  }
  
  export default Header;