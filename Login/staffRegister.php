<!DOCTYPE html>
<html lang="en">

<head>
    <!--LOGO TAB-->
    <link rel="shortcut icon" type="image/x-icon" href="../images/logo.png" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>


    <!-- META TAGS BRO -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Barangay management system for makiling" />
    <meta name="keywords" content="Web Development, Barangay Management System" />
    <meta name="authors" content="Arcillas, Galang, Ignacio" />

    <!-- CSS / JAVASCRIPT -->

    <link rel="stylesheet" href="../Login/CSS,JS/login.css" />
    <script src="../Login/CSS,JS/login.js"></script>


    <title>Registration - Staff</title>
</head>

<body>

    <!-- LOADER-->
    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>


    <nav>
        <!--NAVBAR-->
        <div id="nav-bar">
            <div id="logcon">
                <img class="logo" src="../Images/logo.png" alt="Makiling logo" />
                <h1 class="logoname">MAKILING BRMI SYSTEM</h1>
            </div>
            <a href="loginStaff.php"><button class="switchButton" role="button"><span class="text">REGISTER
                    </span><span> LOGIN</span></button></a>
        </div>
    </nav>

    <!--LOGIN FORM-->
    <div class="login-containerReg">
        <div class="logo-container">

            <p class="login-text">STAFF REGISTRATION</p>
            <hr>
        </div>

        <form class="login-form" action="../Php/staffReg.php" method="post"
            onsubmit="return validatePassword() && validateEmail();">
            <input type="text" id="name" name="fname" placeholder="Firstname" oninput="capitalizeFirstLetter('name')"
                autofocus required>
            <input type="text" id="lname" name="lname" placeholder="Lastname" oninput="capitalizeFirstLetter('lname')"
                required>
            <input type="text" id="idnum" name="idnum" placeholder="ID number" oninput="capitalizeFirstLetter('idnum')"
                required>
            <input type="text" id="email" name="email" placeholder="Email" required>

            <select class="selectbox" id="genderSelect" name="gender" required onchange="changeFontColor()">
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>

            <input type="password" id="password" name="password" placeholder="Password" required>
            <input type="password" id="confirmPassword" name="cpassword" placeholder="Confirm Password" required>
            <button type="submit" class="login-button">SUBMIT</button>
            <br>
            <br>

        </form>
    </div>
    <br />

    <!-- FOOTER BRO-->
    <footer>
        <p>&copy; 2024 BARANGAY MAKILING RECORD MANAGEMENT AND ISSUANCE SYSTEM | All rights reserved.</p>
    </footer>


</body>

</html>
