// ─── Resident Form ────────────────────────────────────────────
function changeFontColor(dropDownId) {
  var selectBox = document.getElementById(dropDownId);
  var selectedOption = selectBox.options[selectBox.selectedIndex].value;

  if (selectedOption !== "") {
    selectBox.style.color = "#000000";
  } else {
    selectBox.style.color = "#757575";
  }
}

// ─── Philhealth ───────────────────────────────────────────────
function changeToTextbox(selectBox) {
  changeFontColor(selectBox.id);

  if (selectBox.value === "Yes") {
    var textBox = document.createElement("input");
    textBox.type = "text";
    textBox.name = selectBox.name;
    textBox.required = true;
    textBox.placeholder = "Enter your PhilHealth Number";

    // Store the original select box in a variable
    var originalSelectBox = selectBox;

    // Add an event listener for the blur event
    textBox.addEventListener("blur", function () {
      // If the text box is empty, replace it with the original select box
      if (textBox.value === "") {
        // Set the value of the select box to "No"
        originalSelectBox.value = "No";
        textBox.parentNode.replaceChild(originalSelectBox, textBox);
        // Disable the "Category" input and remove the 'required' attribute
        var categoryInput = document.getElementById("Category");
        categoryInput.disabled = true;
        categoryInput.removeAttribute("required");
        categoryInput.value = "";
      } else {
        // If the text box has a value, enable the "Category" input and add the 'required' attribute
        var categoryInput = document.getElementById("Category");
        categoryInput.disabled = false;
        categoryInput.required = true;
      }
    });

    selectBox.parentNode.replaceChild(textBox, selectBox);
  }
}

// ─── Voters Id ────────────────────────────────────────────────
function changeToTextbox1(selectBox) {
  changeFontColor(selectBox.id);

  if (selectBox.value === "Yes") {
    var textBox = document.createElement("input");
    textBox.type = "text";
    textBox.name = selectBox.name;
    textBox.required = true;
    textBox.placeholder = "Enter your Voter's ID Number";

    var originalSelectBox = selectBox;
    var uploadDiv = document.querySelector(".rInput2");
    var avatarInput = document.getElementById("avatar");

    textBox.addEventListener("blur", function () {
      if (textBox.value === "") {
        originalSelectBox.value = "No";
        textBox.parentNode.replaceChild(originalSelectBox, textBox);
        uploadDiv.style.display = "none";
        avatarInput.disabled = true;
        avatarInput.removeAttribute("required");
      } else {
        uploadDiv.style.display = "block";
        avatarInput.disabled = false;
        avatarInput.required = true;
      }
    });

    selectBox.parentNode.replaceChild(textBox, selectBox);
  }
}

// ─── Relationship ─────────────────────────────────────────────
function changeToTextbox2(selectBox) {
  changeFontColor(selectBox.id);

  if (selectBox.value === "Others") {
    var textBox = document.createElement("input");
    textBox.type = "text";
    textBox.name = selectBox.name;
    textBox.required = true;
    textBox.placeholder = "Specify the relationship";

    var originalSelectBox = selectBox;

    textBox.addEventListener("blur", function () {
      if (textBox.value === "") {
        originalSelectBox.value = "";
        textBox.parentNode.replaceChild(originalSelectBox, textBox);
      }
    });

    selectBox.parentNode.replaceChild(textBox, selectBox);
  }
}

// ─── Toggle Resident Add ──────────────────────────────────────
function toggleResidentForm() {
  document.querySelector(".residentsForm").style.display = "block";
  document.querySelector(".overlayR").style.display = "block";
}

function hideResidentForm() {
  document.querySelector(".residentsForm").style.display = "none";
  document.querySelector(".overlayR").style.display = "none";
}

// ─── Add Member ───────────────────────────────────────────────

var memberCount = 0;
function addMember() {
  memberCount++;
  var newMember = document.createElement("div");
  newMember.className = "addmember";
  newMember.innerHTML = `
               <div class="addmember">
         <div class="rheadTitle">

                        <div class="rheadcon">
                            <div class="line"></div>
                            <p>HOUSEHOLD MEMBER ${memberCount}</p>
                            <div class="line"></div>
                        </div>

                    </div>
                        <div class="rform1">


                            <div class="rInput">
                                <label for="mLastname${memberCount}">Last Name</label>
                                <input type="text" id="mLastname" name="mLastname${memberCount}" placeholder="Enter Lastname" required>
                            </div>

                            <div class="rInput">
                                <label for="mFirstname${memberCount}">First Name</label>
                                <input type="text" id="mFirstname" name="mFirstname${memberCount}" placeholder="Enter Firstname" required>
                            </div>

                            <div class="rInput">
                                <label for="mMaiden${memberCount}">Mother’s Maiden Name</label>
                                <input type="text" id="textbox" name="mMaiden${memberCount}" placeholder="Enter Mother’s Maiden Name" required>
                            </div>

                        </div>

                        <div class="rform1">

                            <div class="rInput">
                                <label for="mRelationship${memberCount}">Relationship</label>
                              <select class="selectbox" id="bussSelect6" name="mRelationship${memberCount}" required onchange="changeToTextbox2(this)">
                                <option value="">Select Relationship</option>
                                <option value="Head">Head</option>
                                <option value="Spouse">Spouse</option>
                                <option value="Son">Son</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Others">Others</option>
                              </select>
                            </div>

                            <div class="rInput">
                                <label for="mGender${memberCount}">Gender</label>
                                <select class="selectbox" id="bussSelect7" name="mGender${memberCount}" required onchange="changeFontColor('bussSelect7')">
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            <div class="rInput">
                                <label for="mAge${memberCount}">Age</label>
                                <input type="text" id="textbox" name="mAge${memberCount}" placeholder="Enter Age"  oninput="validateAge(this)"required>
                            </div>

                        </div>

                        <div class="rform1">

                            <div class="rInput">
                                <label for="mRisk${memberCount}">Classification by Age/Health Risk</label>
                                <select class="selectbox" id="bussSelect9" name="mRisk${memberCount}" required onchange="changeFontColor('bussSelect9')">
                                    <option value="">Select</option>
                                    <option value="Male">Newborn</option>
                                    <option value="Female">Infant (29days-11 months old)</option>
                                    <option value="Male">Under-five (1-4 years old)</option>
                                    <option value="Female">School-aged children (5-9 years old)</option>
                                    <option value="Male">Adolescents (10-19 years old)</option>
                                    <option value="Female">Pregnant</option>
                                    <option value="Male">Persons with disability</option>
                                    <option value="Female">Adult (≥25 years old) </option>
                                    <option value="Male">Adolescent-Pregnant</option>
                                    <option value="Female">Post Partum</option>
                                    <option value="Female">Senior Citizen</option>
                                </select>
                            </div>

                            <div class="rInput">
                                <label for="mQuarter${memberCount}">Quarter</label>
                                <select class="selectbox" id="bussSelect10" name="mQuarter${memberCount}" required
                                    onchange="changeFontColor('bussSelect10')">
                                    <option value="">Select Quarter</option>
                                    <option value="First">First</option>
                                    <option value="Second">Second</option>
                                    <option value="Third">Third</option>
                                    <option value="Fourth">Fourth</option>
                                </select>
                            </div>

                        </div>

                   <div class="addMember1" onclick="removeMember(this.parentElement)">
  <span>- Remove Household Member</span>
</div>

                    </div>

                </div>
        `;
  var formContainer = document.getElementById("formContainer");
  var addMemberButton = document.querySelector(".addMember");

  formContainer.insertBefore(newMember, addMemberButton);

  // Update the total number of family members
  var memberCountField = document.getElementById("memberCount");
  memberCountField.value = memberCount;
}

function removeMember(member) {
  member.remove();
  memberCount--;

  // Update the total number of family members
  var memberCountField = document.getElementById("memberCount");
  memberCountField.value = memberCount;
}

// ─── Age Validate ─────────────────────────────────────────────
function validateAge(input) {
  // Remove non-numeric characters
  input.value = input.value.replace(/\D/g, "");

  // Limit to two digits
  if (input.value.length > 2) {
    input.value = input.value.slice(0, 2);
  }
}
