// Написать класс, получающий массив строк и формирующий из него абзац,
// и два наследных класса. Они формирует из него список по одной строке,
// другой - таблицу - по одному слову в ячейке.

class List_stroka {

    #stroka = [];

    constructor()

    abzac (stroki) {
       let result = document.createElement('p');
       result.setAttribute('p') + 'br';
       for (i = 1; i < stroki.lenght; i++) {
        result.appendChild(stroki[i]);

       }
       return result
    }
    stroka (st) {
        let strok = document.createElement('span');
        let perenos
        for (i = 0; i < st; i++) {

        }



    }
}