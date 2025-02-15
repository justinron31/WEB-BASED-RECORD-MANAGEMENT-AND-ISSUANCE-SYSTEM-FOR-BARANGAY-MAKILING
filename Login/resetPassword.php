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


    <title>Reset Password - Staff</title>
</head>

<body>

    <!--LOADER-->
    <div id="preloader">
        <div id="status">&nbsp;</div>
    </div>


    <!--VALIDATION MESSAGE-->
    <div id="validationPopup1" class="popup2">
        <p>Please enter a valid email address.</p>
    </div>


    <nav>
        <!--NAVBAR-->
        <div id="nav-bar">
            <div id="logcon">
                <img class="logo" src="../Images/logo.png" alt="Makiling logo" />
                <h1 class="logoname">MAKILING BRMI SYSTEM</h1>
            </div>
            <a href="loginStaff.php"><button class="switchButton" role="button">
                    <span class="text">RESET PASSWORD </span><span> LOGIN</span>
                </button></a>
        </div>
    </nav>

    <!--LOGIN FORM-->
    <div class="login-container">
        <div class="logo-container">
            <img class="logo1" src="../Images/logo.png" alt="Makiling logo" />
            <p class="login-text">RESET PASSWORD</p>
        </div>
        <form class="login-form" action="#" method="post">
            <input type="text" id="email" name="email" placeholder="Enter registered email" oninput="validateEmail();"
                autofocus required>

            <button type="submit" class="login-button">Reset Password</button>
        </form>
        <br>
    </div>


    <!-- FOOTER BRO-->
    <footer>
        <p>&copy; 2024 BARANGAY MAKILING RECORD MANAGEMENT AND ISSUANCE SYSTEM | All rights reserved.</p>
    </footer>

    <script src="../Login/CSS,JS/login.js"></script>
</body>

</html>