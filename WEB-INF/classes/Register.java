import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;
import java.util.*;

public class Register extends HttpServlet {

   public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
		  
		  try
		  {
			String name = request.getParameter("name");
			String email = request.getParameter("user");
			String password = request.getParameter("pass");
			String gender = request.getParameter("gender");
			String dob = request.getParameter("dob");
			String rtype = request.getParameter("rtype");
			String mno = request.getParameter("mno");
			String add = request.getParameter("add");
		  
			String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
			String DB_URL="jdbc:mysql://localhost:3306/thecomputerarena";
			String USER = "root";
			String PASS = "";
		  
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
			PreparedStatement stmt = conn.prepareStatement("insert into accounts values(?,?,?,?,?,?,?,?)");
			stmt.setString(1,name);
			stmt.setString(2,email);
			stmt.setString(3,password);
			stmt.setString(4,gender);
			stmt.setString(5,dob);
			stmt.setString(6,rtype);
			stmt.setString(7,mno);
			stmt.setString(8,add);
			
			int rows_affected = stmt.executeUpdate();
		  
			response.setContentType("text/html");
			PrintWriter out = response.getWriter();
			if(rows_affected>0)
			{
				out.println("<h1>" + "Success" + "</h1>");
				out.println("<h2>" + "Redirecting in 10 Seconds" + "</h2>");
				response.setHeader("Refresh", "10; URL=index.html");
			}
			else
			{
				out.println("<h1>" + "Error" + "</h1>");
				out.println("<h2>" + "Redirecting in 10 Seconds" + "</h2>");
				response.setHeader("Refresh", "10; URL=index.html");
			}
			out.close();
		  }
		  catch(Exception e)
		  {
			  response.setContentType("text/html");
			  PrintWriter out = response.getWriter();
			  out.println("<h1>" + "Error" + "</h1>");
			  out.println("<h2>" + "Redirecting in 10 Seconds" + "</h2>");
			  response.setHeader("Refresh", "10; URL=index.html");
			  out.close();
		  }
   }
}
