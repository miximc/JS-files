// Домашнее задание на тему Фильтр:

// №1 Написать фильтр, убирающий из массива все нечетные числа

console.log('First exercise');
var nums = [2, 3, 5, 7, 6, 9, 1, 2, 13];  
var chet_nums = nums.filter(items => items % 2 === 0);
console.log(chet_nums);

// №2 Написать фильтр, убирающий из списка пустые строки
console.log('Second exercise');
var my_str = ['h','e','l', '', ' ','l','o'];
var new_str = my_str.filter(words => words !== '' && words !== ' ');
console.log(new_str);

// №3 Написать фильтр, убирающий null и undefined
console.log('Third exercise')
var my_list = ['P','y','t', null, undefined,'h','o','n'];
var new_list = my_list.filter(words => words != null && words != undefined);
console.log(new_list);


