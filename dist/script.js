"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = "https://api.thecatapi.com/v1/breeds";
function fetchCats() {
    return __awaiter(this, void 0, void 0, function* () {
        let cat = yield fetch(API_URL);
        return yield cat.json();
    });
}
function Display(text) {
    let output = document.getElementById("output");
    output.innerText = text;
}
document.getElementById("allNamesBtn").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let cats = yield fetchCats();
    let names = cats.map((cat) => cat.name).join("\n");
    Display(`All Names \n------------------------------\n${names}`);
}));
document.getElementById("healthIssues").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let value = document.getElementById("healthInput").valueAsNumber;
    let cats = yield fetchCats();
    let filtered = cats.filter((cat) => cat.health_issues);
    let result = filtered.map((cat) => cat.name).join("\n");
    Display(`Cats with Health Issues = ${value}: \n------------------------------\n${result}`);
}));
document.getElementById("weightBtn").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let unit = document.querySelector('input[name = "unit"]:checked').value;
    let cats = yield fetchCats();
    let result = cats.map((cat) => `${cat.name}: ${cat.weight[unit]} ${unit}`).join("\n");
    Display(`Weights (${unit}): \n------------------------------\n${result}`);
}));
document.getElementById("intelligence").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let cats = yield fetchCats();
    let result = cats.map((cat) => `${cat.name}: I=${cat.intelligence}, F=${cat.child_friendly}`).join("\n");
    Display(`Intelligence - Child Friendly:\n------------------------------\n${result}`);
}));
document.getElementById("avgIntelligence").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let cats = yield fetchCats();
    let total = cats.reduce((sum, cat) => sum + cat.intelligence, 0);
    let avg = (total / cats.length).toFixed(2);
    Display(`Average Intelligence = ${avg}`);
}));
document.getElementById("avgIntelligenceChild").addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    let cats = yield fetchCats();
    let filtered = cats.filter((cat) => cat.child_friendly === 4);
    let total = filtered.reduce((sum, cat) => sum + cat.intelligence, 0);
    let avg = filtered.length ? (total / filtered.length).toFixed(2) : "N/A";
    Display(`Average Intelligence for Child Friendly = 4\n${avg}`);
}));
