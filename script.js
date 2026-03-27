/* OPEN MENU IF COMING FROM RESULT PAGE */

const menuParam=new URLSearchParams(window.location.search);

if(menuParam.get("menu")==="true"){

if(document.getElementById("home")){
document.getElementById("home").style.display="none";
}

if(document.getElementById("menu")){
document.getElementById("menu").style.display="block";
}

}

function openPage(type){
window.location.href="result.html?type="+type;
}

function startApp(){
document.getElementById("home").style.display="none";
document.getElementById("menu").style.display="block";
}

/* RESULT PAGE */

const params=new URLSearchParams(window.location.search);

const type=params.get("type");

let foods=[];


/* EMOTION FOODS */

if(type==="happy"){

foods=[
"Ice Cream","Pizza","Burgers","Cake","Chocolate",
"Smoothies","Biryani","Pasta","Milkshakes"
];

}

else if(type==="sad"){

foods=[
"Tea","Coffee","Khichdi",
"Dal rice","Tomato soup",
"Mashed potatoes","Homemade curry meals"
];

}

else if(type==="lazy"){

foods=[
"Instant noodles","Sandwich","Bread omelette",
"Upma","Poha","Curd rice","Oats"
];

}

else if(type==="energetic"){

foods=[
"Protein shake","Eggs","Chicken",
"Paneer dishes","Banana"
];

}


/* CATEGORY STRUCTURE */

const categories={

"Cuisine":{

"Indian":[
"Biryani","Dal rice","Paneer dishes",
"Masala dosa","Chole bhature",
"Rajma chawal","Pulao"
],

"Italian":[
"Pizza","Pasta","Lasagna",
"Risotto","Garlic bread"
],

"Chinese":[
"Noodles","Fried Rice",
"Manchurian","Spring rolls"
],

"Mexican":[
"Tacos","Burrito",
"Quesadilla","Nachos"
],

"American":[
"Burgers","Hot Dog",
"Fried Chicken","Pancakes"
],

"Japanese":[
"Sushi","Ramen","Tempura"
],

"Korean":[
"Kimchi","Bibimbap","Korean fried chicken"
],

"Thai":[
"Pad Thai","Green curry","Tom Yum soup"
]

},

"Type of Meal":{

"Breakfast":[
"Upma","Poha","Idli",
"Dosa","Bread omelette",
"Pancakes","Oats"
],

"Lunch":[
"Biryani","Dal rice",
"Meals","Fried rice",
"Rajma chawal"
],

"Dinner":[
"Pizza","Chicken curry",
"Roti curry","Pasta",
"Paneer curry"
],

"Snacks":[
"Sandwich","Burger",
"Samosa","French fries",
"Noodles"
]

},

"Taste":{

"Sweet":[
"Cake","Ice Cream",
"Chocolate","Donut",
"Brownie"
],

"Spicy":[
"Biryani","Chicken curry",
"Manchurian","Paneer tikka"
],

"Sour":[
"Tomato soup",
"Pickle","Lemon rice"
],

"Salty":[
"Fries","Chips",
"Popcorn"
]

},

"Diet Type":{

"Veg":[
"Paneer dishes",
"Veg Biryani",
"Upma","Poha"
],

"Non Veg":[
"Chicken",
"Eggs",
"Fish curry"
],

"Vegan":[
"Salads",
"Fruit bowl",
"Veg soup"
],

"High Protein":[
"Eggs",
"Chicken",
"Protein shake"
],

"Low Carb":[
"Salad",
"Grilled chicken"
]

},

"Cooking Method":{

"Fried":[
"Burgers",
"Fries",
"Chicken fry"
],

"Baked":[
"Pizza",
"Cake",
"Garlic bread"
],

"Boiled":[
"Eggs",
"Soup",
"Vegetables"
],

"Grilled":[
"Grilled chicken",
"Paneer tikka"
],

"Steamed":[
"Idli",
"Momoz"
]

},

"Modern Food":{

"Fast Food":[
"Pizza",
"Burgers",
"Wrap",
"Fries"
],

"Desserts":[
"Cake",
"Ice Cream",
"Brownie",
"Donut"
],

"Street Food":[
"Pani puri",
"Vada pav",
"Pav bhaji"
],

"Healthy Bowls":[
"Salad bowl",
"Smoothie bowl"
]

}

};


/* FOOD TYPES */

const foodTypes={

"Pizza":[
"Margherita","Farmhouse","Paneer Pizza","Veggie Pizza","Cheese Burst"
],

"Ice Cream":[
"Vanilla","Chocolate","Strawberry","Butterscotch","Black currant"
],

"Burgers":[
"Veg Burger","Chicken Burger","Cheese Burger","Paneer Burger"
],

"Cake":[
"Chocolate Cake","Black Forest","Red Velvet","Fruit Cake"
],

"Chocolate":[
"Dark Chocolate","Milk Chocolate","White Chocolate"
],

"Smoothies":[
"Mango Smoothie","Banana Smoothie","Strawberry Smoothie"
],

"Biryani":[
"Veg Biryani","Chicken Biryani","Paneer Biryani","Mushroom Biryani"
],

"Pasta":[
"White Sauce Pasta","Red Sauce Pasta","Cheese Pasta"
],

"Milkshakes":[
"Chocolate Milkshake","Strawberry Milkshake","Oreo Milkshake"
],

"Tea":[
"Green Tea","Masala Tea","Lemon Tea","Black Tea"
],

"Coffee":[
"Cold Coffee","Black Coffee","Cappuccino","Filter Coffee"
],

"Tomato soup":[
"Cream Tomato Soup","Spicy Tomato Soup","Garlic Tomato Soup"
],

"Eggs":[
"Boiled Eggs","Omelette","Scrambled Eggs","Half Fry"
],

"Protein shake":[
"Whey Protein Shake","Banana Protein Shake","Chocolate Protein Shake"
],

"Paneer dishes":[
"Paneer Butter Masala","Kadai Paneer","Palak Paneer","Paneer Tikka"
],

"Chicken":[
"Grilled Chicken","Chicken Curry","Chicken Fry","Tandoori Chicken"
],

"Khichdi":[
"Moong dal khichdi","Vegetable khichdi","Masala khichdi"
],

"Dal rice":[
"Simple dal rice","Ghee dal rice","Tomato dal rice"
],

"Upma":[
"Rava upma","Vegetable upma"
],

"Poha":[
"Kanda poha","Vegetable poha"
],

"Oats":[
"Oats porridge","Masala oats"
],

"Curd rice":[
"Simple curd rice","Tempered curd rice"
],

"Bread omelette":[
"Classic bread omelette","Cheese bread omelette"
],

"Sandwich":[
"Veg Sandwich","Grilled Sandwich","Cheese Sandwich"
]

};


/* RECIPES */

const recipes={ "Pizza":{ "Margherita":[ "Prepare pizza dough", "Spread tomato sauce", "Add mozzarella cheese", "Bake 15 minutes" ], "Farmhouse":[ "Prepare dough", "Add pizza sauce", "Add vegetables", "Add cheese", "Bake" ], "Paneer Pizza":[ "Prepare pizza dough", "Spread tomato sauce", "Add marinated paneer", "Bake" ], "Veggie Pizza":[ "Prepare dough", "Add vegetables", "Add cheese", "Bake" ], "Cheese Burst":[ "Prepare dough", "Add extra cheese", "Bake" ] }, "Ice Cream":{ "Vanilla":[ "Boil milk", "Add sugar", "Add vanilla", "Freeze" ], "Chocolate":[ "Add cocoa", "Add milk", "Freeze" ], "Strawberry":[ "Add strawberry pulp", "Freeze" ], "Butterscotch":[ "Add butterscotch syrup", "Freeze" ], "Black currant":[ "Add syrup", "Freeze" ] }, "Burgers":{ "Veg Burger":[ "Prepare veg patty", "Toast bun", "Add vegetables", "Add sauce" ], "Chicken Burger":[ "Prepare chicken patty", "Toast bun" ], "Cheese Burger":[ "Add cheese slice", "Toast bun" ], "Paneer Burger":[ "Prepare paneer patty", "Toast bun" ] }, "Cake":{ "Chocolate Cake":[ "Prepare batter", "Bake 30 mins" ], "Black Forest":[ "Bake cake", "Add cream", "Add cherries" ], "Red Velvet":[ "Prepare batter", "Bake", "Add frosting" ], "Fruit Cake":[ "Add dry fruits", "Bake" ] }, "Tea":{ "Green Tea":[ "Boil water", "Add tea leaves" ], "Masala Tea":[ "Boil milk", "Add tea", "Add spices" ], "Lemon Tea":[ "Boil water", "Add lemon" ], "Black Tea":[ "Boil water", "Add tea" ] }, "Coffee":{ "Cold Coffee":[ "Add coffee", "Add milk", "Blend" ], "Black Coffee":[ "Boil water", "Add coffee" ], "Cappuccino":[ "Prepare coffee", "Add foam" ], "Filter Coffee":[ "Prepare decoction", "Add milk" ] }, "Khichdi":{ "Moong dal khichdi":[ "Wash rice and dal", "Cook", "Add ghee" ], "Vegetable khichdi":[ "Add vegetables", "Cook" ], "Masala khichdi":[ "Add spices", "Cook" ] }, "Dal rice":{ "Simple dal rice":[ "Cook rice", "Cook dal", "Mix" ], "Ghee dal rice":[ "Add ghee" ], "Tomato dal rice":[ "Add tomatoes" ] }, "Upma":{ "Rava upma":[ "Roast rava", "Add water", "Cook" ], "Vegetable upma":[ "Add vegetables", "Cook" ] }, "Poha":{ "Kanda poha":[ "Wash poha", "Add onions" ], "Vegetable poha":[ "Add vegetables" ] }, "Oats":{ "Oats porridge":[ "Boil milk", "Add oats" ], "Masala oats":[ "Add vegetables", "Cook" ] }, "Curd rice":{ "Simple curd rice":[ "Add curd", "Mix" ], "Tempered curd rice":[ "Add mustard seeds" ] }, "Bread omelette":{ "Classic bread omelette":[ "Beat eggs", "Cook with bread" ], "Cheese bread omelette":[ "Add cheese" ] } };


/* CATEGORY OPEN */

if(type==="cuisine") showCategory("Cuisine");

if(type==="meal") showCategory("Type of Meal");

if(type==="taste") showCategory("Taste");

if(type==="diet") showCategory("Diet Type");

if(type==="method") showCategory("Cooking Method");

if(type==="modern") showCategory("Modern Food");


function showCategory(name){

let sub=categories[name];

let text=`<h2>${name}</h2>`;

for(let s in sub){

text+=`

<div class="foodcard">

<div class="foodname">
${s}
</div>

<button class="viewbtn"
onclick="showCategoryFoods('${name}','${s}')">

View Dishes

</button>

</div>

`;

}

document.getElementById("output").innerHTML=text;

}


function showCategoryFoods(cat,sub){

foods=categories[cat][sub];

showFoods();

document.getElementById("output").innerHTML+=`

<button class="morebtn"
onclick="openExternalLink('${cat}','${sub}')">

More ${sub} Foods 🌐

</button>

`;

}


/* SHOW FOODS */

if(foods.length>0){
showFoods();
}

function showFoods(){

let text="";

for(let i=0;i<foods.length;i++){

text+=`

<div class="foodcard">

<div class="foodname">
${foods[i]}
</div>

<button class="viewbtn"
onclick="showTypes('${foods[i]}')">

Types

</button>

<button class="recipebtn"
onclick="showRecipes('${foods[i]}')">

Recipes

</button>

</div>

`;

}

document.getElementById("output").innerHTML=text;

}


/* SHOW TYPES */

function showTypes(food){

let types=foodTypes[food] || [];

let text=`<h2>${food} Types</h2>`;

for(let t of types){

text+=`

<div class="fooditem">
${t}
</div>

`;

}

text+=`

<button onclick="showFoods()" class="backbtn">
⬅ Back
</button>

`;

document.getElementById("output").innerHTML=text;

}


/* SHOW RECIPES */

function showRecipes(food){

let types=foodTypes[food] || [];

let text=`<h2>${food} Recipes</h2>`;

for(let t of types){

text+=`<div class="foodcard"><h3>${t}</h3>`;

let steps=recipes[food]?.[t];

if(steps){

for(let s of steps){

text+=`

<div class="fooditem">
• ${s}
</div>

`;

}

}

else{

text+=`Recipe not added yet`;

}

text+=`</div>`;

}

text+=`

<button onclick="showFoods()" class="backbtn">
⬅ Back
</button>

`;

document.getElementById("output").innerHTML=text;

}


function goBack(){

window.location.href="index.html?menu=true";

}

function openExternalLink(category,sub){

/* CUISINE */

if(category==="Cuisine"){

if(sub==="Indian")
window.open("https://hebbarskitchen.com");

else if(sub==="Italian")
window.open("https://www.allrecipes.com/recipes/723/world-cuisine/european/italian/");

else if(sub==="Chinese")
window.open("https://www.bbcgoodfood.com/recipes/collection/chinese-recipes");

else if(sub==="Mexican")
window.open("https://tasty.co/search?q=mexican");

else if(sub==="American")
window.open("https://www.foodnetwork.com/topics/american");

else if(sub==="Japanese")
window.open("https://www.justonecookbook.com");

else if(sub==="Korean")
window.open("https://www.maangchi.com");

else if(sub==="Thai")
window.open("https://hot-thai-kitchen.com");

}

/* TYPE OF MEAL */

if(category==="Type of Meal"){

if(sub==="Breakfast")
window.open("https://www.indianhealthyrecipes.com/recipes/breakfast/");

else if(sub==="Lunch")
window.open("https://www.allrecipes.com/recipes/17561/lunch/");

else if(sub==="Dinner")
window.open("https://www.bbcgoodfood.com/recipes/collection/dinner-recipes");

else if(sub==="Snacks")
window.open("https://www.vegrecipesofindia.com/recipes/snacks-recipes/");
}

/* TASTE */

if(category==="Taste"){

if(sub==="Sweet")
window.open("https://www.allrecipes.com/recipes/79/desserts/");

else if(sub==="Spicy")
window.open("https://www.chilipeppermadness.com/recipes/");

else if(sub==="Sour")
window.open("https://www.tarladalal.com/recipes-for-indian-sour-recipes-414");

else if(sub==="Salty")
window.open("https://www.tasteofhome.com/collection/salty-snacks/");
}

/* DIET */

if(category==="Diet Type"){

if(sub==="Veg")
window.open("https://www.vegrecipesofindia.com");

else if(sub==="Non Veg")
window.open("https://www.indianhealthyrecipes.com/non-veg-recipes/");

else if(sub==="Vegan")
window.open("https://minimalistbaker.com/recipe-index/?fwp_special-diet=vegan");

else if(sub==="High Protein")
window.open("https://www.healthline.com/nutrition/high-protein-foods");

else if(sub==="Low Carb")
window.open("https://www.dietdoctor.com/low-carb/recipes");
}

/* COOKING METHOD */

if(category==="Cooking Method"){

if(sub==="Fried")
window.open("https://www.allrecipes.com/recipes/17562/cooking-style/frying/");

else if(sub==="Baked")
window.open("https://www.bbcgoodfood.com/recipes/collection/baking-recipes");

else if(sub==="Boiled")
window.open("https://www.tarladalal.com/recipes-for-boiled-food-187");

else if(sub==="Grilled")
window.open("https://www.foodnetwork.com/topics/grilling");

else if(sub==="Steamed")
window.open("https://www.vegrecipesofindia.com/steamed-recipes/");
}

/* MODERN FOOD */

if(category==="Modern Food"){

if(sub==="Fast Food")
window.open("https://www.tasteatlas.com/fast-food");

else if(sub==="Desserts")
window.open("https://www.allrecipes.com/recipes/79/desserts/");

else if(sub==="Street Food")
window.open("https://www.vegrecipesofindia.com/recipes/street-food/");

else if(sub==="Healthy Bowls")
window.open("https://www.eatingwell.com/recipes/17952/mealtimes/dinner/bowl/");
}

}