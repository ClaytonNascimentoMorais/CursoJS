const idade = 100;
let resp
switch (idade){
    case 5:
    case 6:
    case 7:
    case 8:
        resp = 'Infantil'
    break;
    case 9:
    case 10:
    case 11:
    case 12:
        resp = 'Juvenil'
    break;
    case 13:
    case 14:
    case 15:
    case 16:
        resp = 'Junior'
    break;
    case 17:
    case 18:
    case 19:
    case 20:
        resp = 'Profissional'
    break;
    default:
        resp = 'Sem categoria'
}
console.log(resp)
