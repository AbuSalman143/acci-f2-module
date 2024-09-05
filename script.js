let employeeCount = 0;
let employees = [];

function addUser() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;
    const messageElement = document.getElementById('success-message');

    if (name && profession && age) {
        employeeCount++;
        employees.push({ name, profession, age });
        document.getElementById('employee-count').innerText = `You have ${employeeCount} Employees.`;

        // Display success message
        messageElement.innerText = 'Success : Employee Added!';
        messageElement.style.color = 'green';

        renderEmployeeList();

        // Clear inputs
        document.getElementById('name').value = '';
        document.getElementById('profession').value = '';
        document.getElementById('age').value = '';
    } else {
        // Display error message
        messageElement.innerText = "Error : Please make sure all fields are filled before adding an employee!";
        messageElement.style.color = "red";
    }
}

function renderEmployeeList() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = ''; // Clear existing list

    employees.forEach((employee, index) => {
        const employeeItem = document.createElement('div');
        employeeItem.className = 'employee-item';
        employeeItem.innerHTML = `
            <div>
                <span>${index + 1}.</span> 
                <span>Name: ${employee.name}</span> 
                <span>Profession: ${employee.profession}</span>  
                <span>Age: ${employee.age}</span> 
            </div>
            <button class="delete-btn" onclick="deleteUser(${index})">Delete User</button>
        `;
        employeeList.appendChild(employeeItem);
    });
}

function deleteUser(index) {
    employees.splice(index, 1);
    employeeCount--;
    document.getElementById('employee-count').innerText = `You have ${employeeCount} Employees.`;
    renderEmployeeList();
}
