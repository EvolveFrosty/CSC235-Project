   <?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="scripts/nav.css" />
<nav class= "navbar">
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="db2.php">Research Database</a></li>
	<li><a href="diagram.html">ER-Diagrams</a></li>
  </ul>
</nav>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<style>
body {
  background-color: #f9f9f9;
}

.container {
  border: 2px solid #ccc;
}

body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
<body>
<center>
<h1>SCSU CSC 235 Database</h1>
</center>
<?php
    // enable debugging
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // connect to the database
    require('db.php');

    // prepare a query
    // $sql = "SELECT photoURL, firstName, lastName, attractionTitle, attractionURL FROM people";
    $sql = "SELECT * FROM carneiror1 ORDER BY lastName";

    // run the query and store the result in a variable
    $result = $conn->query($sql);
    ?>

    <center>
    <div class="container">
      <div class="overlay">
        <div class="text">CSC 235 Spring 2023
          <?php
          if ($result->num_rows > 0) {
             // create an HTML table to display database results
             echo "<center><table id='database-results'><th>Last name</th><th>First name</th><th>Major</th><th>Email</th>";
             // output data of each row returned from the database query in an HTML table cell
             while($row = $result->fetch_assoc()) {
              echo "<tr><td>" . $row["lastName"] . "</td><td>" . $row["firstName"] . "</td><td>" .$row["major"]."</td><td>". $row["email"]. "</td></tr>";
            }
          } else {
             echo "Difficulty finding results";
          }

          // disconnect from the database
          $conn->close();

          // complete the HTML table
          echo "</table></center><br>";
          ?>
          <span id="table-row-count"></span>
        </div>
      </div>
    </div>
    <!-- count and display the number of rows returned from the database to the HTML table -->
    <script type="text/javascript">
    var table = document.getElementById("database-results");
    var totalRowCount = table.rows.length;
    document.getElementById("table-row-count").innerHTML = totalRowCount + " rows were retrieved from the MariaDB database via PHP and displayed in an HTML table revealed by CSS and reported by JavaScript";
    </script>
    </center>
</body>
<footer id= "footer" style="background-color: black; color: white; text-align: center; padding: 10px;">
      Copyright &copy; 2023 Ricardo Carneiro
    </footer>
</html>
