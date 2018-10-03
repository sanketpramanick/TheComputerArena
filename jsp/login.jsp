<%@ page import = "java.io.*,java.util.*,java.sql.*"%>
 
<html>
   <head>
      <title>Dashboard</title>
   </head>
   <body>
       <h1>Dashboard</h1>
         <%
         try{
         String usr = request.getParameter("uname");
         String pswd = request.getParameter("psw");
         String JDBC_DRIVER = "com.mysql.jdbc.Driver";
         String DB_URL="jdbc:mysql://localhost:3306/thecomputerarena";
         String USER = "root";
         String PASS = "";
         Class.forName("com.mysql.jdbc.Driver");
         Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
         PreparedStatement stmt = conn.prepareStatement("select * from accounts where Email like ? and Password = ?");
         stmt.setString(1,usr);stmt.setString(2,pswd);
         ResultSet rs = stmt.executeQuery();rs.next();
         %>

      <table border="1" width="100%">
         <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Registration Type</th>
            <th>Mobile Number</th>
            <th>Address</th>
         </thead>
            <tr>
               <td><%=rs.getString("Name")%></td>
               <td><%=rs.getString("Email")%></td>
               <td><%=rs.getString("Gender")%></td>
               <td><%=rs.getString("DOB")%></td>
               <td><%=rs.getString("RType")%></td>
               <td><%=rs.getString("MobileNo")%></td>
               <td><%=rs.getString("Address")%></td>
            </tr>
      </table>
        <%}catch(Exception e){%>
            <h2><%=e%></h2>
        <%}%>
   </body>
</html>