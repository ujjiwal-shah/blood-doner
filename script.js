const donors = [
    { name: "Amit Patel ", city: "Mumbai", state: "Maharashtra", contact: "452053748" },
    { name: "Sonia Gupta", city: "Bangalore", state: "Karnataka", contact: "4634863434" },
    { name: "dev shah", city: "Mumbai", state: "Maharashtra", contact: "369987422" },
    { name: "Deepak Kumar", city: "Bangalore", state: "Karnataka", contact: "436496852" },
    { name: "Sunita Sharma", city: "Mumbai", state: "Maharashtra", contact: "4256350663" },
    { name: "Suresh Malhotra", city: "Bangalore", state: "Karnataka", contact: "4806204534" },
    { name: "Rajesh Verma ", city: "Mumbai", state: "Maharashtra", contact: "45324836701" },
    { name: "Vikram Chaudhary", city: "Bangalore", state: "Karnataka", contact: "408687453" },
    { name: "Priya Singh ", city: "Mumbai", state: "Maharashtra", contact: "896778697893" },
    { name: "Rohit Jain", city: "Bangalore", state: "Karnataka", contact: "51306593.501" },
    { name: "Vikas Menon ", city: "Mumbai", state: "Maharashtra", contact: "786328932487" },
    { name: "Akash Singhal", city: "Bangalore", state: "Karnataka", contact: "8963089614" },
    { name: "Nikita Rao  ", city: "Mumbai", state: "Maharashtra", contact: "786378937" },
    { name: "Poonam Gupta", city: "Bangalore", state: "Karnataka", contact: "3684610254" },
    { name: "Karan Mehta ", city: "Mumbai", state: "Maharashtra", contact: "254443849" },
    { name: "Shreya Kapoor ", city: "Mumbai", state: "Maharashtra", contact: "42084926444" },
    
    // Add more donor data here
];

function findDonors() {
    const state = document.getElementById("state").value;
    const city = document.getElementById("city").value;

    const filteredDonors = donors.filter(donor => donor.state === state && donor.city === city);

    if (filteredDonors.length > 0) {
        localStorage.setItem('donorData', JSON.stringify(filteredDonors));
        window.location.href = 'results.html';
    } else {
        alert("No donors found.");
    }
}
