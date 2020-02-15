const studentForm = document.querySelector('.form');
const studentInput = studentForm.querySelector('input#student');
const studentListElement = document.querySelector('.student-list');

const deleteButtonClickHandler = function (evt) {
  const studentElement = evt.target.parentNode;
  studentElement.classList.add('student_deleted');
  setTimeout(function () {
    if (studentElement.parentNode) {
      studentListElement.removeChild(studentElement);
    }
  }, 500);
};

const addDeleteButtonClickHandlerToLastStudent = function () {
  const deleteButton = studentListElement.children[studentListElement.childElementCount - 1].querySelector('.student__delete');
  deleteButton.addEventListener('click', deleteButtonClickHandler);
};

const createStudentElement = function (studentName, faceNumber) {
  const studentElement = document.createElement('article');
  studentElement.classList.add('student');

  const faceElement = document.createElement('div');
  faceElement.classList.add('student__face');
  faceElement.classList.add('student__face_number_' + faceNumber);
  studentElement.appendChild(faceElement);

  const nameElement = document.createElement('div');
  nameElement.classList.add('student__name');
  nameElement.innerText = studentName;
  studentElement.appendChild(nameElement);

  const dateElement = document.createElement('div');
  dateElement.classList.add('student__date');
  dateElement.innerText = Date();
  studentElement.appendChild(dateElement);

  const crossElement = document.createElement('div');
  crossElement.classList.add('student__delete');
  crossElement.innerText = 'x';
  studentElement.appendChild(crossElement);

  return studentElement;
};

const createStudentElementFromTemplate = function (studentName, faceNumber) {
  const studentTemplate = document.querySelector('#student-template').content;

  const studentElement = studentTemplate.cloneNode(true);
  studentElement.querySelector('.student__face').classList.add('student__face_number_' + faceNumber);
  studentElement.querySelector('.student__name').innerText = studentName;
  studentElement.querySelector('.student__date').innerText = Date();

  return studentElement;
};

const insertWithInnerHtml = function (evt) {
  const studentName = studentInput.value;
  const faceNumber = Math.floor(Math.random() * 6);

  studentListElement.innerHTML +=
    `<article class="student">
            <div class="student__face student__face_number_${faceNumber}"></div>
            <div class="student__name">${studentName}</div>
            <div class="student__date">${Date()}</div>
            <div class="student__delete">x</div>
        </article>`;

  addDeleteButtonClickHandlerToLastStudent();
};

const insertWithAdjacentHtml = function (evt) {
  const studentName = studentInput.value;
  const faceNumber = Math.floor(Math.random() * 6);

  studentListElement.insertAdjacentHTML('beforeend',
    `<article class="student">
            <div class="student__face student__face_number_${faceNumber}"></div>
            <div class="student__name">${studentName}</div>
            <div class="student__date">${Date()}</div>
            <div class="student__delete">x</div>
        </article>`);

  addDeleteButtonClickHandlerToLastStudent();
};

const insertWithAppendChild = function (evt) {
  const studentName = studentInput.value;
  const faceNumber = Math.floor(Math.random() * 6);

  const studentElement = createStudentElement(studentName, faceNumber);
  studentListElement.appendChild(studentElement);

  addDeleteButtonClickHandlerToLastStudent();
};

const insertWithAppend = function (evt) {
  const studentName = studentInput.value;
  const faceNumber = Math.floor(Math.random() * 6);

  const studentElement = createStudentElement(studentName, faceNumber);
  studentListElement.append(studentElement);

  addDeleteButtonClickHandlerToLastStudent();
};

const insertWithTemplate = function (evt) {
  const studentName = studentInput.value;
  const faceNumber = Math.floor(Math.random() * 6);

  const studentElement = createStudentElementFromTemplate(studentName, faceNumber);
  studentListElement.appendChild(studentElement);

  addDeleteButtonClickHandlerToLastStudent();
};

studentForm.addEventListener('submit', evt => evt.preventDefault());

document.querySelector(".insert-with-inner-html").addEventListener('click', insertWithInnerHtml);
document.querySelector(".insert-with-adjacent-html").addEventListener('click', insertWithAdjacentHtml);
document.querySelector(".insert-with-append-child").addEventListener('click', insertWithAppendChild);
document.querySelector(".insert-with-append").addEventListener('click', insertWithAppend);
document.querySelector(".insert-with-template").addEventListener('click', insertWithTemplate);
