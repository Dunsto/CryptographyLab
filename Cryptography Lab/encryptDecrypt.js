


function encrypt(message, e, n){
    let cipher = (Math.pow(message, e) % n);


    document.write("cipher = " + cipher + "    ");

    return cipher;
}

function decrypt(cipher, d, n){
    let message = Math.pow(cipher, d) % n;


    document.write("message = " + message + "    ");

    return message;
}