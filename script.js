var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var API_URL = "https://api.thecatapi.com/v1/breeds";
function fetchCats() {
    return __awaiter(this, void 0, void 0, function () {
        var cat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(API_URL)];
                case 1:
                    cat = _a.sent();
                    return [4 /*yield*/, cat.json()];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function Display(text) {
    var output = document.getElementById("output");
    output.innerText = text;
}
document.getElementById("allNamesBtn").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var cats, names;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchCats()];
            case 1:
                cats = _a.sent();
                names = cats.map(function (cat) { return cat.name; }).join("\n");
                Display("All Names \n------------------------------\n".concat(names));
                return [2 /*return*/];
        }
    });
}); });
document.getElementById("healthIssues").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var value, cats, filtered, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                value = document.getElementById("healthInput").valueAsNumber;
                return [4 /*yield*/, fetchCats()];
            case 1:
                cats = _a.sent();
                filtered = cats.filter(function (cat) { return cat.health_issues; });
                result = filtered.map(function (cat) { return cat.name; }).join("\n");
                Display("Cats with Health Issues = ".concat(value, ": \n------------------------------\n").concat(result));
                return [2 /*return*/];
        }
    });
}); });
document.getElementById("weightBtn").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var unit, cats, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                unit = document.querySelector('input[name = "unit"]:checked').value;
                return [4 /*yield*/, fetchCats()];
            case 1:
                cats = _a.sent();
                result = cats.map(function (cat) { return "".concat(cat.name, ": ").concat(cat.weight[unit], " ").concat(unit); }).join("\n");
                Display("Weights (".concat(unit, "): \n------------------------------\n").concat(result));
                return [2 /*return*/];
        }
    });
}); });
document.getElementById("intelligence").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var cats, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchCats()];
            case 1:
                cats = _a.sent();
                result = cats.map(function (cat) { return "".concat(cat.name, ": I=").concat(cat.intelligence, ", F=").concat(cat.child_friendly); }).join("\n");
                Display("Intelligence - Child Friendly:\n------------------------------\n".concat(result));
                return [2 /*return*/];
        }
    });
}); });
document.getElementById("avgIntelligence").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var cats, total, avg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchCats()];
            case 1:
                cats = _a.sent();
                total = cats.reduce(function (sum, cat) { return sum + cat.intelligence; }, 0);
                avg = (total / cats.length).toFixed(2);
                Display("Average Intelligence = ".concat(avg));
                return [2 /*return*/];
        }
    });
}); });
document.getElementById("avgIntelligenceChild").addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
    var cats, filtered, total, avg;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetchCats()];
            case 1:
                cats = _a.sent();
                filtered = cats.filter(function (cat) { return cat.child_friendly === 4; });
                total = filtered.reduce(function (sum, cat) { return sum + cat.intelligence; }, 0);
                avg = filtered.length ? (total / filtered.length).toFixed(2) : "N/A";
                Display("Average Intelligence for Child Friendly = 4\n".concat(avg));
                return [2 /*return*/];
        }
    });
}); });
