class Room {
    #scheme = []
    // 1. Функции в классе js пишутся сразу с названия,
    //    без слова function!
    constructor(row_scheme) {  // 1 параметр ДАЖЕ НЕ УКАЗЫВАЕМ! Он есть сразу сам
      this.#scheme = row_scheme;

    }
    
 
    
    // # - показатель скрытости (приватности) поля или метода
    #the_table(rows) { // Передаём строки таблицы
      //let result = "<table border='1'>";
      let result = document.createElement('table');
      // Создали пустую таблицу. Её ещё нет на странице
      result.setAttribute('border', '1');
      for (let i = 0; i < rows.length; i++ ) {
        result.appendChild(rows[i]);
        // Прикрепили строку к таблице. Но в строке ничего нет, смотреть не на что
      }
      return result;
    }
    
    #the_row(td_count) {
        let row = document.createElement('tr');
        let td;
        for (let i = 0; i < td_count; i++) {
            td = document.createElement('td');
            row.appendChild(td);
            td.innerHTML = '&nbsp';
        }
        return row
    }
    
    create_node_html() {
      /* 
      // Таблицы всё ещё нет, но у неё есть граница, когда таблица проявится, её будет видно
      let row = document.createElement('tr');
      // Создали ряд (строку) таблицы. Она "оторвана", не прикреплена к таблице
      let td = document.createElement('td');
      // Создали ячейку таблицы. Она "оторвана", не прикреплена к строке
      row.appendChild(td);
      // Прикрепили ячейку к строке. 
      td.setAttribute('colspan', '2');
      // Сделали ячейку размером с две колонки!
  //    ';
      td.appendChild(document.createTextNode(' '));
      // Можно не сохранять в переменную, а сразу прикреплять объект
      row = document.createElement('tr');
      // Переменная уже есть
      td = document.createElement('td');
      row.appendChild(td);
      td = document.createElement('td');
      row.appendChild(td); */
      let rows = [];
      for (let r = 0; r < this.#scheme.length; r++){
        rows.push(this.#the_row(this.#scheme[r]));
      }
      let result = this.#the_table(rows);
      return result;
    }
  }
  
  window.onload = () => {
    var r = new Room([4,2,1]);  // Для создания объекта необходимо ключевое слово new
    console.log(r.create_html_code_txt());
    //document.getElementById('hotel').innerHTML += r.create_html_code_txt();
    document.getElementById('hotel').appendChild(
      r.create_node_html()
      // Возвращают элемент, мы его "удочеряем"
    );
  };