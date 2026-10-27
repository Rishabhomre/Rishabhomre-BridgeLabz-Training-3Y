// Q6: Filter student rows in real time, without case sensitivity.
const studentSearch = document.getElementById("studentSearch");
const studentTableRows = [...document.querySelectorAll("#studentTable tbody tr")];
const noStudentResults = document.getElementById("noStudentResults");

studentSearch.addEventListener("input", () => {
  const searchTerm = studentSearch.value.trim().toLowerCase();
  let visibleRows = 0;

  studentTableRows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const matches = rowText.includes(searchTerm);
    row.hidden = !matches;
    if (matches) visibleRows += 1;
  });

  noStudentResults.hidden = visibleRows !== 0;
});
