const Layout = ({children}) => {
  return (
    <div style={{
      height:"100vh",
      background:"black",
      color:"white",
      padding:"10px",
      display:"grid",
      rowGap:"10px",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      
      }}>
      {children}
  </div>
  );
}

export default Layout;
