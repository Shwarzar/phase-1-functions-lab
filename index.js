
function distanceFromHqInBlocks(n) {
    if (n >= 42) {
    n = n - 42
    }
    else {
        n = 42 - n
    }

    return n
}

function distanceFromHqInFeet(n) {
    if (n >= 42) {
        n = n - 42
        }
        else {
            n = 42 - n
        }
        return n * 264
 }

function distanceTravelledInFeet(a, b) {

    if (a > b) {
        a = a - b
    }
    else {
            a = b - a
        }
        return a * 264
}

function calculatesFarePrice(a, b) {

    if (a > b) {
        a = a - b
    }
    else {
            a = b - a
        }
    a = a * 264

    if (a < 400) {
        return 0
    }
    else if (a >= 400 && a <= 2000) {
        a = (a - 400) * 0.02
        return a
    }
    else if(a > 2000 && a <= 2500) {
        a = 25
        return a
    }
    else if (a > 2500) {
       let cool = 'cannot travel that far'
        return cool
}
return a
}
