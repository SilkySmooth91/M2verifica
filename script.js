const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]


function jobSearch(luogo, ruolo) {
  let result = jobs.filter(jobs => {
    let locationCheck = jobs.location.toLowerCase().includes(luogo)
    let titleCheck = jobs.title.toLowerCase().includes(ruolo)
    return (locationCheck && titleCheck)
  })
  let count = result.length
  return {result: result, count: count}
  
}

function displayResult(result) {
  let count = result.length
  let resultDiv = document.querySelector("#results")
  resultDiv.innerHTML = ""
  let listTitle = document.createElement("h2")
  listTitle.id = "listTitle"
  resultDiv.appendChild(listTitle)

  if (count === 0) {
    listTitle.textContent = "No jobs found matching your criteria"
  } else{
    let resultList = document.createElement("ul")
    resultList.id = "resultList"
    if (count === 1) {
      listTitle.textContent = count + " job found!"
    } else {
      listTitle.textContent = count + " jobs found!"
    }
    for (let i of result) {
      let listItem = document.createElement("li")
      listItem.classList.add("listItem")
        listItem.textContent = i.location + " - " + i.title
        resultList.appendChild(listItem)
    }

    resultDiv.appendChild(resultList)
  }
  
}

const PULSANTE = document.getElementById("searchButton")
PULSANTE.addEventListener("click", () => {
  let luogo = document.getElementById("location").value.toLowerCase()
  let ruolo = document.getElementById("position").value.toLowerCase()
  let results = jobSearch(luogo, ruolo)
 
  displayResult(results.result)
})

