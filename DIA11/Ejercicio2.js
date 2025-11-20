function LeerInvertido(String){
    const TextoNormal = String.toLowerCase();
    const  separarCaracteres = TextoNormal.split("");
    const  invertirCaracteres = separarCaracteres.reverse();
    const JuntarLoInvertido = invertirCaracteres.join("");

    if(TextoNormal === JuntarLoInvertido){
        return true;
    }else{
        return false;
    }

}

console.log(LeerInvertido("coco"));