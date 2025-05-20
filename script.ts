
// storing the API in a variable.
const API_URL = "https://api.thecatapi.com/v1/breeds";

//creating a function to fetch data from the API.
async function fetchCats(){
    let cat = await fetch(API_URL);
    return await cat.json();        //await is a feature i learned while doing this project as it holds the value to the variable until the whole data is processed. (copied from ChatGPT)
}

//funtion created to display the output.
function Display(text: string){
    let output = document.getElementById("output")!;
    output.innerText = text;
}

//to display the names of all the cats after clicking the button "All names".
document.getElementById("allNamesBtn")!.addEventListener("click", async () => {     //learned about .addEventListener which basically tells the code what to do when certain action is done. In this case, when the user clicks the button.
    let cats = await fetchCats();
    let names = cats.map((cat: any) => cat.name).join("\n");        //searching for only the name of the cats from the API and listing them.
    Display(`All Names \n------------------------------\n${names}`);        //displaying the list on the screen.
})

//to display the name of the cats with certain health issues.
document.getElementById("healthIssues")!.addEventListener("click", async() => {
    let value = (document.getElementById("healthInput") as HTMLInputElement).valueAsNumber;
    let cats = await fetchCats();
    let filtered = cats.filter((cat: any) => cat.health_issues);        //filtering the data and taking only the name of the cats with the health issue number user wants.
    let result = filtered.map((cat: any) => cat.name).join("\n");       //storing in a different variable as a list.
    Display(`Cats with Health Issues = ${value}: \n------------------------------\n${result}`);     //displaying the list
})

//to display the weight of the cats in imperial or metric
document.getElementById("weightBtn")!.addEventListener("click", async () => {
    let unit = (document.querySelector('input[name = "unit"]:checked') as HTMLInputElement).value;      //selects the data according to the input given by the user.
    let cats = await fetchCats();
    let result = cats.map((cat: any) => `${cat.name}: ${cat.weight[unit]} ${unit}`).join("\n");     //makes a list of cat names and their weight in the unit required by the user
    Display(`Weights (${unit}): \n------------------------------\n${result}`);
})

//to display the level of intelligience and child friendliness of the cats.
document.getElementById("intelligence")!.addEventListener("click", async () => {
    let cats = await fetchCats();
    let result = cats.map((cat: any) => `${cat.name}: I=${cat.intelligence}, F=${cat.child_friendly}`).join("\n");      //this creates a list with the cats' name and their respective intelligence and child friendliness.
    Display(`Intelligence - Child Friendly:\n------------------------------\n${result}`);
})

//to display the average intelligence of the cats
document.getElementById("avgIntelligence")!.addEventListener("click", async () => {
    let cats = await fetchCats();
    let total = cats.reduce((sum: number, cat: any) => sum + cat.intelligence, 0);      //.reduce is a feature that combines all the items of the array into a sinle result. copied from chatGPT
    let avg = (total/cats.length).toFixed(2);
    Display(`Average Intelligence = ${avg}`);       //Displays the average intelligence of the cats
})


//to display the average intelligence for the cats that are Child Friendly
document.getElementById("avgIntelligenceChild")!.addEventListener("click", async () => {
    let cats = await fetchCats();
    let filtered = cats.filter((cat: any) => cat.child_friendly === 4);
    let total = filtered.reduce((sum: number, cat: any) => sum + cat.intelligence, 0);
    let avg = filtered.length ? (total / filtered.length).toFixed(2) : "N/A";       //much concise form of a conditional statement where the "?" happens to be an if-else.
    Display(`Average Intelligence for Child Friendly = 4\n${avg}`);
})