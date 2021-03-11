"use strict";

let passengerList = [];
let id = 4;

class Passenger {
    constructor(id, firstName, lastName, dob, from, to, leaving, returning, bags, meal, extra, age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.from = from;
        this.to = to;
        this.leaving = leaving;
        this.returning = returning;
        this.bags = bags;
        this.meal = meal;
        this.extra = extra;
        this.age = age
    }
}


function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let dob = document.getElementById("dob").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let leaving = document.getElementById("leaving").value;
    let returning = document.getElementById("returning").value;
    let bags = document.getElementById("bags").value;

    let user = new Passenger(id, firstName, lastName, dob, from, to, leaving, returning, bags)
    passengerList.push(user);
    id++

    console.log(passengerList);

    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("dob").value = ""
    document.getElementById("from").value = ""
    document.getElementById("to").value = ""
    document.getElementById("leaving").value = ""
    document.getElementById("returning").value = ""
    document.getElementById("bags").value = ""
}


function print() {
    document.getElementById('names').innerHTML = "";

    for (let user in passengerList) {
        document.getElementById('names').innerHTML += `<div onclick="search('${passengerList[user].firstName} ${passengerList[user].lastName}')">${passengerList[user].id}  ${passengerList[user].firstName}  ${passengerList[user].lastName}</div>`
    }
}

function search(name) {
    let searchbar = document.getElementById('search').value;
    if (searchbar == "") {
        searchbar = name;
        console.log(searchbar)
    }
    searchbar = searchbar.split(" ");
    console.log(searchbar)
    for (let user in passengerList) {
        if (passengerList[user].firstName == searchbar[0] && passengerList[user].lastName == searchbar[1]) {
            document.getElementById("outfirstName").value = passengerList[user].firstName
            document.getElementById("outlastName").value = passengerList[user].lastName
            document.getElementById("outDoB").value = passengerList[user].dob
            document.getElementById("outfrom").value = passengerList[user].from
            document.getElementById("outto").value = passengerList[user].to
            document.getElementById("outleaving").value = passengerList[user].leaving
            document.getElementById("outreturning").value = passengerList[user].returning
            document.getElementById("outbags").value = passengerList[user].bags
            document.getElementById("outmeal").value = passengerList[user].meal
            document.getElementById("outextras").value = passengerList[user].extra
            document.getElementById("outage").textContent = passengerList[user].dob - passengerList[user].leaving
        }
    }
}


let jimmy = new Passenger(1, "Jimmy", "Holden", Date(2000, 12, 2), "Phoenix, AZ", "Denver, CO", Date(2020 - 12 - 2), Date(2021 - 1 - 1), 2, "Chicken", "");
passengerList.push(jimmy)
let johnny = new Passenger(2, "Johnny", "Holden", Date(2000, 12, 2), "Phoenix, AZ", "Denver, CO", Date(2020 - 12 - 2), Date(2021 - 1 - 1), 2, "Chicken", "");
passengerList.push(johnny)
let michael = new Passenger(3, "Michael", "Holden", Date(2000, 12, 2), "Phoenix, AZ", "Denver, CO", `Date(2020-12-2)`, Date(2021 - 1 - 1), 2, "fish", "");
passengerList.push(michael)

