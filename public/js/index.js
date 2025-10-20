// // // Search Functionality
// document.addEventListener('DOMContentLoaded', function() {
//     const searchBtn = document.getElementById('searchBtn');
//     const searchInput = document.getElementById('searchInput');
//     if (searchBtn && searchInput) {
//         searchBtn.addEventListener('click', function() {
//             performSearch();
//         });
//         searchInput.addEventListener('keypress', function(e) {
//             if (e.key === 'Enter') {
//                 performSearch();
//             }
//         });
//     }
//     function performSearch() {
//         const searchTerm = searchInput.value.toLowerCase();
//         const rows = document.querySelectorAll('#tableBody tr');
//         rows.forEach(row => {
//             const text = row.textContent.toLowerCase();
//             row.style.display = text.includes(searchTerm) ? '' : 'none';
//         });
//     }
//     // Add Customer Form
//     const addForm = document.getElementById('addCustomerForm');
//     if (addForm) {
//         addForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const formData = {
//                 fullName: document.getElementById('fullName').value,
//                 gender: document.getElementById('gender').value,
//                 country: document.getElementById('country').value,
//                 age: document.getElementById('age').value,
//                 email: document.getElementById('email').value,
//                 phone: document.getElementById('phone').value
//             };
//             console.log('New Customer:', formData);
//             alert('تم إضافة العميل بنجاح!');
//             window.location.href = 'index.html';
//         });
//     }

//     // Edit Customer Form
//     const editForm = document.getElementById('editCustomerForm');
//     if (editForm) {
//         editForm.addEventListener('submit', function(e) {
//             e.preventDefault();
            
//             const formData = {
//                 fullName: document.getElementById('editFullName').value,
//                 gender: document.getElementById('editGender').value,
//                 country: document.getElementById('editCountry').value,
//                 age: document.getElementById('editAge').value,
//                 email: document.getElementById('editEmail').value,
//                 phone: document.getElementById('editPhone').value
//             };

//             console.log('Updated Customer:', formData);
//             alert('تم تحديث بيانات العميل بنجاح!');
//             window.location.href = 'index.html';
//         });
//     }

//     // Sidebar Close Button
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.style.display = 'none';
        });
    };

// // // View Customer Function
// // function viewCustomer(id) {
// //     window.location.href = `view-customer.html?id=${id}`;
// // }

// // // Edit Customer Function
// // function editCustomer(id) {
// //     window.location.href = `edit-customer.html?id=${id}`;
// // }

// // // Delete Customer Function
// // function deleteCustomer(btn) {
// //     if (confirm('هل أنت متأكد من حذف هذا العميل؟')) {
// //         const row = btn.closest('tr');
// //         row.style.opacity = '0';
// //         setTimeout(() => {
// //             row.remove();
// //             alert('تم حذف العميل بنجاح!');
// //         }, 300);
// //     }
// // }

// // // Load Customer Data for View Page
// // window.addEventListener('load', function() {
// //     const urlParams = new URLSearchParams(window.location.search);
// //     const customerId = urlParams.get('id');

// //     if (window.location.pathname.includes('view-customer.html') && customerId) {
// //         loadCustomerDetails(customerId);
// //     }

// //     if (window.location.pathname.includes('edit-customer.html') && customerId) {
// //         loadCustomerForEdit(customerId);
// //     }
// // });

// // // Sample Data for Customers
// // // const customersData = {
// // //     1: { name: 'Ali Hassan', gender: 'Male', country: 'Egypt', age: 30, email: 'ali.hassan@example.com', phone: '+20 123 456 7890', updated: '1 days ago' },
// // //     2: { name: 'Layla Sayed', gender: 'Female', country: 'Saudi Arabia', age: 15, email: 'layla.sayed@example.com', phone: '+966 123 456 789', updated: '2 days ago' },
// // //     3: { name: 'Zeyad Mohsen', gender: 'Male', country: 'Morocco', age: 11, email: 'zeyad.mohsen@example.com', phone: '+212 123 456 789', updated: '3 days ago' },
// // //     4: { name: 'Nour Ahmed', gender: 'Female', country: 'Ukraine', age: 10, email: 'nour.ahmed@example.com', phone: '+380 123 456 789', updated: '2 days ago' },
// // //     5: { name: 'Fatma Ali', gender: 'Female', country: 'France', age: 35, email: 'fatma.ali@example.com', phone: '+33 123 456 789', updated: '2 days ago' }
// // // };

// // // function loadCustomerDetails(id) {
// // //     const customer = customersData[id];
// // //     if (customer) {
// // //         document.getElementById('viewFullName').textContent = customer.name;
// // //         document.getElementById('viewGender').textContent = customer.gender;
// // //         document.getElementById('viewCountry').textContent = customer.country;
// // //         document.getElementById('viewAge').textContent = customer.age;
// // //         document.getElementById('viewEmail').textContent = customer.email;
// // //         document.getElementById('viewPhone').textContent = customer.phone;
// // //         document.getElementById('viewUpdated').textContent = customer.updated;
// // //     }
// // // }

// // // function loadCustomerForEdit(id) {
// // //     const customer = customersData[id];
// // //     if (customer) {
// // //         document.getElementById('editFullName').value = customer.name;
// // //         document.getElementById('editGender').value = customer.gender;
// // //         document.getElementById('editCountry').value = customer.country;
// // //         document.getElementById('editAge').value = customer.age;
// // //         document.getElementById('editEmail').value = customer.email;
// // //         document.getElementById('editPhone').value = customer.phone;
// // //     }
// // // }