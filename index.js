// const cart = [{name: "Үзэг", quantity: 1}, {name: "Дэвтэр", quantity: 2}];
// if (cart.length === 0) {
//     console.log("Хасах бараа алга");

// } else if (cart[0].quantity > 1) {
//     console.log(cart[0].quantity -= 1);

// } else {
//     cart.splice(0, 1);
// }
// console.log(cart);

// const settings = {sound: true, notifications: false};
// const selectedKey = "notifications";
// if (selectedKey in settings) {
//     settings[selectedKey] = ! settings[selectedKey]
// } else {
//     console.log("Тохиргоо олдсонгүй");

// }
// console.log(settings);

// const profile = {username: "nomi"};
// const takenNames = ["admin", "guest", "bat"];
// const newUsername = "saraa";
// if (newUsername.length < 4) {
//     console.log("Нэр хэт богино");

// } else if (profile.username === newUsername) {
//     console.log("Нэр өөрчлөгдөөгүй");

// } else if (takenNames.includes(newUsername)) {
//     console.log("Энэ нэр ашиглагдаж байна");

// } else {
//     profile.username = newUsername;
// }
// console.log(profile);

// const file = {name: "lesson.pdf", extension: "pdf", sizeMB: 8};
// const allowedExtensions = ["pdf", "txt"];
// if (!allowedExtensions.includes(file.extension)) {
//     console.log("Файлын төрөл тохирохгүй");

// } else if (file.sizeMB > 10) {
//     console.log("Файл хэт том");

// } else {
//     console.log("Файлыг байршуулах боломжтой");

// }

// const existingMeeting ={start:10, end: 12};
// const newMeeting = {start:11, end: 13};
// if (newMeeting.start >= newMeeting.end) {
//     console.log("Цагийн мэдээлэл буруу");

// } else if (newMeeting.start < existingMeeting.end && newMeeting.end > existingMeeting.start) {
//     console.log("Уулзалтын цаг давхцаж байна");

// } else {
//     console.log("Уулзалтын цаг давхцахгүй");

// }

// const character = { health: 70, maxHealth: 100, potions: 2 };

// if (character.health === character.maxHealth) {
//   console.log("эм хэрэглэхгүй");
// } else if (character.health < character.maxHealth && character.potions === 0) {
//   console.log("Эм дууссан");
// } else {
//   const addedHealth = character.health + 40;
//   character.potions -= 1;
//   if (addedHealth > character.maxHealth) {
//     character.health = character.maxHealth;
//   }
// }

// console.log(character);

// const mobilePlan = {remainingGB: 5, extraUsedGB: 0, allowExtra: true};
// const requestedGB = 7;
// if (mobilePlan.remainingGB >= requestedGB) {
//     console.log(mobilePlan.remainingGB -= requestedGB);
    
// } else if (mobilePlan.allowExtra) {
//     mobilePlan.extraUsedGB += requestedGB - mobilePlan.remainingGB;
//     mobilePlan.remainingGB = 0;
// } 
// console.log(mobilePlan);

// const parking = {hours: 3, isMember: true};
// let total;
// if ( parking.hours <= 0) {
//     console.log("Хугацаа буруу");
    
// } else {
//     total = 3000 + (parking.hours -1) * 2000;
// }
// if (parking.isMember) {
//     total = total * 0.8
// }
// console.log(total);

// const contact = {email: "", phone: "99112233"};
// if (contact.email !== "") {
//     console.log(contact.email);
    
// } else if (contact.phone !== "") {
//     console.log(contact.phone);
    
// } else {
//     console.log("Холбоо барих мэдээлэл алга");
    
// }

// const team = {members: ["Ану", "Бат", "Сараа"], captain: "Тэмүүлэн"};
// if (team.members.length !== 3) {
//     console.log("Баг яг 3 гишүүнтэй байх ёстой");
    
// } else if (!team.members.includes(team.captain)) {
//     console.log("Ахлагч багийн гишүүн биш байна");
    
// } else {
//     console.log( "Баг баталгаажлаа");
    
// }

// const triangle = {sides: [5, 5, 8]};
// const a = triangle.sides[0];
// const b = triangle.sides[1];
// const c = triangle.sides[2];
// if (a <=0 || b <=0 || c <= 0 || a + b<= c || a + c<= b || c + b<= a) {
//     console.log("Гурвалжин үүсэхгүй");
    
// } else if (a === b && b === c) {
//     console.log("Адил талт");
    
// } else if (a === b || c === a || b === c) {
//     console.log("Адил хажуут");
    
// } else {
//     console.log("Элдэв талт");
    
// }

// const account = {password:"old123", isLocked: false};
// const currentPassword =  "old123";
// const newPassword = "newpass88";
// const confirmPassword = "newpass88";
// if (account.isLocked) {
//     console.log("Бүртгэл түгжигдсэн");
    
// } else if (currentPassword !== account.password) {
//     console.log("Одоогийн нууц үг буруу байнa. ");
    
// } else if (newPassword.length <= 8) {
//     console.log("8-аас доошгүй тэмдэгттэй байна.");
    
// } else if (newPassword !== confirmPassword) {
//     console.log("Нууц үг таарахгүй байна.");
    
// } else {
//     newPassword === confirmPassword;
//     console.log("account.password нь " + newPassword);
    
// }

// const account = {password: "secret123", failedAttempts: 2, isLocked: false};
// const enteredPassword = "wrong123";
// if (account.isLocked) {
//     console.log("Бүртгэл түгжигдсэн");
    
// } else if (enteredPassword === account.password) {
//     account.failedAttempts = 0;
    
// } else {account.failedAttempts ++;
//     if (account.failedAttempts >= 3) {
//         account.isLocked = true;
        
//     } else {
//         console.log("Нууц үг буруу");
        
//     }
// }
// console.log(account);

// const notification = {isRead:  false, sentCount: 2};
// if (notification.isRead === true) {
//     console.log("Дахин илгээх шаардлагагүй");
    
// } else if (notification.isRead === false, notification.sentCount < 3) {
//     notification.sentCount += 1;

// } else {
//     console.log("Илгээх хязгаарт хүрсэн" );
    
// }
// console.log(notification);

const post = {hasImage: true, caption: "", isPublic: true };
if (post.hasImage === )



