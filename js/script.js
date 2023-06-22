/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const itemsPerPage = 9;
const studentList = document.querySelector('.student-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list, page) {
    //two variables to store start index and end index of list items per page given
    console.log(list);
    console.log(page);

    const startIndex = (page * itemsPerPage) - itemsPerPage
    const endIndex = (page * itemsPerPage)

    studentList.innerHTML = ""; //removes any existing students that displayed previously
    //loop through objects in list param
    for (i = 0; i < list.length; i++) {
      //the students at these indexes are the ones we want to display on the page.
      if( i >= startIndex && i < endIndex) {
        const student = list[i];
        console.log('student', student);
        studentList.innerHTML += `<li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src=${student.picture.thumbnail} alt="Profile Picture" />
          <h3>${student.name.first +" "+ student.name.last}<h3/>
          <span class="email">${student.email}</span>
        </div>
        <div class ="joined-details">
          <span class="date">${student.registered.date}</span>
        </div>
      </li>`;

      }

   
    }
    
}
showPage(data, 1);


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
