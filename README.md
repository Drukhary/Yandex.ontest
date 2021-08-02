# Yandex.Contest
Решение одной из задач на тренировочном контесте здесь https://contest.yandex.ru/contest/28414/problems/3/

3. Поврежденные файлы Бальтазара
Магнитная буря здорово потрепала файлы Бальтазара. Раньше он хранил в своей папке разные файлы и поддиректории, но теперь там настоящая неразбериха.
Бальтазар был минималистом, поэтому всегда все файлы называл ﬁle и использовал собственную асинхронную файловую систему, которая базировалась на объекте Folder c двумя методами:

 
type File = string | Folder | {} | null | undefined;  
 
type Folder = {  
  // Получить по индексу файл или папку  
  read(index: number, callback: (file: File) => void): void;  
 
  // Получить количество элементов в директории  
  size(callback: (size: number) => void): void;  
}  
Часть файлов осталась без повреждений, часть — потеряна навсегда, потому что превратилась в null или {}, а еще часть повреждена и, кажется, может быть восстановлена. Понять, что файл поврежден очень просто — часть букв в названии продублировались. Помогите Бальтазару найти все такие файлы и сложите их в массив для дальнейшего анализа. Массив надо отсортировать лексиграфически.

Формат ввода
Объект с определенной структурой:

 
Folder([  
    ’file’,  
    ’ffffile’,  
    Folder([  
        ’file’,  
    ]),  
    Folder([  
        ’fiiile’,  
    ]),  
    Folder([  
        {},  
        null,  
        ’file’,  
        ’ffiillee’,  
        ’ffiillee’,  
    ]),  
    Folder([  
        Folder([  
            ’filllle’,  
            ’file’,  
            null,  
        ]),  
        {},  
        Folder([]),  
    ]),  
]);
Формат вывода
Массив строк, отсортированный в лексикографическом порядке:

 
[  
    ’ffffile’,  
    ’ffiillee’,  
    ’ffiillee’,  
    ’fiiile’,  
    ’filllle’,  
]
Примечания
Задачу требуется решить на JavaScript (ES2017) и оформить решение по шаблону:

 
module.exports = async function(input) {  
    // ...  
    return result;  
}
Песочницу для решения можно загрузить по ссылке:
https://contest.yandex.ru/contest/28414/download/3/
